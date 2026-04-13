import requests
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:3000/3002"
TIMEOUT = 30

def test_tc004_english_locale_renders_ltr_layout_and_consistent_site_shell():
    url = f"{BASE_URL}/en"
    headers = {
        "Accept": "text/html"
    }
    try:
        response = requests.get(url, headers=headers, timeout=TIMEOUT)
        response.raise_for_status()
    except requests.RequestException as e:
        assert False, f"Request to {url} failed: {e}"

    # Verify status code 200
    assert response.status_code == 200, f"Expected status code 200 but got {response.status_code}"

    # Parse HTML content
    soup = BeautifulSoup(response.text, "html.parser")

    # Check that the <html> tag has dir="ltr"
    html_tag = soup.find("html")
    assert html_tag is not None, "<html> tag not found in response"
    dir_attr = html_tag.get("dir")
    assert dir_attr == "ltr", f"Expected html dir attribute to be 'ltr', got '{dir_attr}'"

    # Check presence of Navbar and Footer components in the page shell
    # Navbar: assuming element with role="navigation" or a tag with id/class 'navbar'
    navbar = soup.find(attrs={"role": "navigation"})
    if navbar is None:
        navbar = soup.find(class_="navbar")
    assert navbar is not None, "Navbar navigation element not found in English home page"

    # Footer: assuming footer tag or element with id/class 'footer'
    footer = soup.find("footer")
    if footer is None:
        footer = soup.find(class_="footer")
    assert footer is not None, "Footer element not found in English home page"

    # Check English localized content by presence of some known English text or attribute
    body_text = soup.get_text().lower()
    # Common English phrase - for test robustness just check for English words like "home" or "programs"
    assert "home" in body_text or "programs" in body_text, "English localized content not found on page"

    # Check for high-end monochromatic aesthetic by inspecting linked stylesheets or inline styles
    # We look for presence of CSS files or inline style that suggests monochromatic design
    # Since this is subjective, we validate presence of at least one css link or style tag
    css_links = soup.find_all("link", rel="stylesheet")
    style_tags = soup.find_all("style")
    assert css_links or style_tags, "No CSS stylesheets or style tags found, aesthetic validation failed"

test_tc004_english_locale_renders_ltr_layout_and_consistent_site_shell()