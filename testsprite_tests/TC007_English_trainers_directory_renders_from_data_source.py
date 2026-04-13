import requests
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:3000/3002"
TIMEOUT = 30

def test_english_trainers_directory_renders_with_localization_and_aesthetic():
    url = f"{BASE_URL}/en/trainers"
    headers = {
        "Accept": "text/html"
    }
    try:
        response = requests.get(url, headers=headers, timeout=TIMEOUT)
        response.raise_for_status()
    except requests.RequestException as e:
        assert False, f"Request failed: {e}"

    # Validate status code
    assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"

    content = response.text
    soup = BeautifulSoup(content, "html.parser")

    # Verify the page direction is left-to-right for English
    html_tag = soup.find("html")
    assert html_tag is not None, "<html> tag not found"
    dir_attr = html_tag.get("dir", "ltr").lower()
    assert dir_attr == "ltr", f"Expected page direction 'ltr', found '{dir_attr}'"

    # Verify that trainers directory is populated (assume trainers list container has a class/id)
    # Since no exact HTML structure is provided, look for multiple trainer items (e.g. a container with children)
    trainers_section = soup.find(class_="trainers-directory") or soup.find(id="trainers-directory")
    assert trainers_section is not None, "Trainers directory container not found"
    trainer_items = trainers_section.find_all(class_="trainer-item")
    assert len(trainer_items) > 0, "No trainers found in the directory"

    # Verify high-end monochromatic aesthetic by checking styles (assuming CSS class or inline style)
    # For monochromatic, check if key elements have certain CSS classes indicating the style
    # We can't request CSS files, but can inspect class names or style attributes
    # Example: page container with a style or class name indicating monochrome theme

    body_tag = soup.find("body")
    assert body_tag is not None, "<body> tag not found"

    # Check for monochrome related classes or inline styles in body or main container
    monochrome_classes = ["monochrome", "high-end-mono", "mono-theme", "color-scheme-mono"]
    body_classes = body_tag.get("class", [])
    has_monochrome_class = any(c in body_classes for c in monochrome_classes)

    # Additionally, check style attribute for monochrome colors (black, white, gray)
    body_style = body_tag.get("style", "").lower()
    uses_monochrome_colors = any(color in body_style for color in ["black", "white", "gray", "#000", "#fff", "#ccc", "rgb(0,0,0)", "rgb(255,255,255)", "rgb(204,204,204)"])

    assert has_monochrome_class or uses_monochrome_colors, "Monochromatic aesthetic not detected on the page"

test_english_trainers_directory_renders_with_localization_and_aesthetic()