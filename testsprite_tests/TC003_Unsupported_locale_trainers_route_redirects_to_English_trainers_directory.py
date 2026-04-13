import requests
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:3000/3002"
TIMEOUT = 30

def test_unsupported_locale_trainers_redirects_to_english_directory():
    unsupported_locale = "xx"
    trainers_path = f"/{unsupported_locale}/trainers"
    english_trainers_path = "/en/trainers"
    session = requests.Session()

    try:
        # 1. Request unsupported locale trainers page, expect 302 redirect to English trainers
        response = session.get(BASE_URL + trainers_path, allow_redirects=False, timeout=TIMEOUT)
        assert response.status_code == 302, f"Expected 302 redirect, got {response.status_code}"
        location = response.headers.get("Location")
        assert location == english_trainers_path, f"Expected redirect to {english_trainers_path}, got {location}"

        # 2. Follow redirect to English trainers directory
        response_en = session.get(BASE_URL + location, timeout=TIMEOUT)
        assert response_en.status_code == 200, f"Expected 200 OK on English trainers page, got {response_en.status_code}"
        html_content = response_en.text

        # 3. Parse HTML and verify presence of trainers directory content (basic check for core elements)
        soup = BeautifulSoup(html_content, "html.parser")

        # Verify page renders with LTR direction attribute on <html> or main container
        html_tag = soup.find("html")
        assert html_tag is not None, "HTML root element missing"
        dir_attr = html_tag.get("dir", "ltr").lower()
        assert dir_attr == "ltr", f"Expected page direction to be ltr, got {dir_attr}"

        # Verify trainers directory presence (check for typical key text or container)
        # For demo, look for a container with id or class related to trainers or known heading text
        trainers_heading = soup.find(lambda tag: tag.name in ["h1", "h2", "h3"] and "trainers" in tag.text.lower())
        assert trainers_heading, "Trainers heading not found on English trainers page, indicating directory not rendered"

        # Verify monochromatic high-end aesthetic by checking likely CSS classes (basic heuristic)
        # e.g., body or main container has class names indicating monochrome style ("mono", "monochrome", "dark", "gray")
        body = soup.find("body")
        assert body is not None, "Body tag missing"
        body_class = body.get("class", [])
        body_class_str = " ".join(body_class).lower()
        has_monochrome_style = any(keyword in body_class_str for keyword in ["mono", "monochrome", "gray", "dark", "black", "white"])
        assert has_monochrome_style, "Expected monochromatic style CSS classes in body, none found"

    except requests.RequestException as e:
        assert False, f"HTTP request failed: {e}"

test_unsupported_locale_trainers_redirects_to_english_directory()