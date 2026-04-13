import requests
import re

BASE_URL = "http://localhost:3000"

def test_arabic_locale_renders_site_shell_with_rtl_direction():
    url = f"{BASE_URL}/ar"
    headers = {
        "Accept": "text/html"
    }
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
    except requests.RequestException as e:
        assert False, f"HTTP request failed: {e}"

    assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"

    content = response.text

    # Check for dir="rtl" in <html> or <body> tags
    html_dir_rtl = re.search(r'<html[^>]*dir=["\']rtl["\']', content) is not None
    body_dir_rtl = re.search(r'<body[^>]*dir=["\']rtl["\']', content) is not None
    assert html_dir_rtl or body_dir_rtl, "Page direction is not set to 'rtl' for Arabic locale."

    # Check Navbar presence
    nav_tag = re.search(r'<nav[^>]*>', content) is not None
    assert nav_tag, "Navbar element not found on the Arabic home page."

    # Check Footer presence
    footer_tag = re.search(r'<footer[^>]*>', content) is not None
    assert footer_tag, "Footer element not found on the Arabic home page."

    # Check dir="rtl" in nav and footer if present
    nav_dir_match = re.search(r'<nav[^>]*dir=["\']([^"\']+)["\']', content)
    if nav_dir_match:
        assert nav_dir_match.group(1) == "rtl", f"Navbar dir attribute expected 'rtl' but got '{nav_dir_match.group(1)}'"

    footer_dir_match = re.search(r'<footer[^>]*dir=["\']([^"\']+)["\']', content)
    if footer_dir_match:
        assert footer_dir_match.group(1) == "rtl", f"Footer dir attribute expected 'rtl' but got '{footer_dir_match.group(1)}'"

    # Check CSS stylesheets presence
    css_links = re.findall(r'<link[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\'][^>]*>', content, flags=re.IGNORECASE)
    assert any('css' in href.lower() for href in css_links), "No CSS stylesheet found in page header."

    # Check nav and footer have class attributes
    nav_class = re.search(r'<nav[^>]*class=["\']([^"\']+)["\']', content)
    assert nav_class and len(nav_class.group(1).strip()) > 0, "Navbar lacks CSS classes for styling."

    footer_class = re.search(r'<footer[^>]*class=["\']([^"\']+)["\']', content)
    assert footer_class and len(footer_class.group(1).strip()) > 0, "Footer lacks CSS classes for styling."


test_arabic_locale_renders_site_shell_with_rtl_direction()