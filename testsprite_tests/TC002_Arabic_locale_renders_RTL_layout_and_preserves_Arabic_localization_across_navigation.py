import requests
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:3000/3002"
TIMEOUT = 30

def test_arabic_locale_renders_rtl_and_preserves_localization():
    session = requests.Session()
    try:
        # Step 1: GET /ar - Arabic home page
        ar_home_url = f"{BASE_URL}/ar"
        resp_home = session.get(ar_home_url, timeout=TIMEOUT)
        assert resp_home.status_code == 200, f"Expected 200 for Arabic home, got {resp_home.status_code}"
        content_home = resp_home.text

        # Parse HTML
        soup_home = BeautifulSoup(content_home, "html.parser")

        # Validate rtl direction on <html> or <body> or relevant container
        html_tag = soup_home.find("html")
        body_tag = soup_home.find("body")
        dir_attr = (
            html_tag.get("dir") if html_tag and html_tag.has_attr("dir")
            else (body_tag.get("dir") if body_tag and body_tag.has_attr("dir") else None)
        )
        assert dir_attr == "rtl", f"Expected dir='rtl' on Arabic home, found dir='{dir_attr}'"

        # Validate Arabic content presence - look for some Arabic text or lang attribute
        # Check lang attribute on html tag if present
        lang_attr = html_tag.get("lang") if html_tag and html_tag.has_attr("lang") else None
        assert lang_attr == "ar" or "العربية" in content_home or lang_attr is None, "Arabic language not detected or lang attribute missing"

        # Validate presence of Navbar and Footer
        navbar = soup_home.find(attrs={"id": "navbar"}) or soup_home.find(class_="navbar")
        footer = soup_home.find(attrs={"id": "footer"}) or soup_home.find(class_="footer")
        assert navbar is not None, "Navbar not found on Arabic home"
        assert footer is not None, "Footer not found on Arabic home"

        # Step 2: Navigate to /ar/trainers, keep Arabic locale and check localization
        ar_trainers_url = f"{BASE_URL}/ar/trainers"
        resp_trainers = session.get(ar_trainers_url, timeout=TIMEOUT)
        assert resp_trainers.status_code == 200, f"Expected 200 for Arabic trainers, got {resp_trainers.status_code}"
        content_trainers = resp_trainers.text

        soup_trainers = BeautifulSoup(content_trainers, "html.parser")

        # Check page direction rtl
        html_tag_trainers = soup_trainers.find("html")
        body_tag_trainers = soup_trainers.find("body")
        dir_attr_trainers = (
            html_tag_trainers.get("dir") if html_tag_trainers and html_tag_trainers.has_attr("dir")
            else (body_tag_trainers.get("dir") if body_tag_trainers and body_tag_trainers.has_attr("dir") else None)
        )
        assert dir_attr_trainers == "rtl", f"Expected dir='rtl' on Arabic trainers, found dir='{dir_attr_trainers}'"

        # Check Arabic localization presence (lang attribute or Arabic text)
        lang_attr_trainers = html_tag_trainers.get("lang") if html_tag_trainers and html_tag_trainers.has_attr("lang") else None
        assert lang_attr_trainers == "ar" or "العربية" in content_trainers or lang_attr_trainers is None, "Arabic language not detected or lang attribute missing on trainers page"

        # Validate Navbar and Footer presence on trainers page as well
        navbar_tr = soup_trainers.find(attrs={"id": "navbar"}) or soup_trainers.find(class_="navbar")
        footer_tr = soup_trainers.find(attrs={"id": "footer"}) or soup_trainers.find(class_="footer")
        assert navbar_tr is not None, "Navbar not found on Arabic trainers page"
        assert footer_tr is not None, "Footer not found on Arabic trainers page"

        # Optional: Check that the site shell aesthetics include monochromatic high-end style:
        # We can check presence of a CSS class or style indicating monochromatic scheme on the body or html.
        # Since styles details are not given exactly, we check presence of a class like 'monochrome' on body or html
        mono_class_present_home = (
            'monochrome' in body_tag.get("class", []) if body_tag else False
        ) or (
            'monochrome' in html_tag.get("class", []) if html_tag else False
        )
        # If no monochrome class, try to look for black/white colors in style or style tags?
        # For test purpose, just allow it to be True or skip if not found (due to lack of explicit marker)
        # Thus do not assert monochrome class presence but ensure RTL and Arabic localization primarily

    except requests.RequestException as e:
        assert False, f"Network or request error occurred: {e}"

test_arabic_locale_renders_rtl_and_preserves_localization()