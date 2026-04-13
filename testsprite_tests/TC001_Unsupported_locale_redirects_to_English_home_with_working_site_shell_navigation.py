import requests
import re

base_url = "http://localhost:3000/3002"
timeout = 30

def find_tag_attr(html_text, tag, attr):
    pattern = rf'<{tag}[^>]* {attr}=["\']([^"\']+)["\']'
    match = re.search(pattern, html_text, re.IGNORECASE)
    if match:
        return match.group(1)
    return None

def tag_exists(html_text, tag, id_value=None):
    if id_value:
        pattern = rf'<{tag}[^>]* id=["\']{id_value}["\']'
        return re.search(pattern, html_text, re.IGNORECASE) is not None
    else:
        pattern = rf'<{tag}[^>]*>'
        return re.search(pattern, html_text, re.IGNORECASE) is not None

def find_link_with_text(html_text, keyword):
    # Find <a href='...'>(text containing keyword)</a>
    pattern = rf'<a[^>]+href=["\']([^"\']+)["\'][^>]*>([^<]*{keyword}[^<]*)</a>'
    match = re.search(pattern, html_text, re.IGNORECASE)
    if match:
        return match.group(1)
    return None

def find_link_with_href_prefix(html_text, prefix):
    pattern = rf'<a[^>]+href=["\']({prefix}[^"\']*)["\']'
    match = re.search(pattern, html_text, re.IGNORECASE)
    if match:
        return match.group(1)
    return None

def test_unsupported_locale_redirects_to_english_home_with_working_navigation():
    session = requests.Session()
    try:
        # Step 1: Access unsupported locale '/fr' expecting 302 redirect to /en
        resp = session.get(f"{base_url}/fr", allow_redirects=False, timeout=timeout)
        assert resp.status_code == 302, f"Expected 302 redirect for unsupported locale '/fr', got {resp.status_code}"
        location = resp.headers.get('Location')
        assert location == '/en', f"Expected redirect location '/en' but got '{location}'"

        # Step 2: Follow redirect to English home '/en'
        resp_en = session.get(f"{base_url}/en", timeout=timeout)
        assert resp_en.status_code == 200, f"Expected 200 OK for '/en', got {resp_en.status_code}"
        content_en = resp_en.text

        # Validate LTR direction for English page (site shell localization)
        html_dir = None
        html_dir_match = re.search(r'<html[^>]* dir=["\']([^"\']+)["\']', content_en, re.IGNORECASE)
        if html_dir_match:
            html_dir = html_dir_match.group(1).lower()
        assert html_dir == 'ltr', f"English home page 'dir' attribute expected 'ltr', got '{html_dir}'"

        # Validate presence of Navbar and Footer elements (site shell)
        navbar_found = bool(re.search(r'<nav|id=["\']navbar["\']', content_en, re.IGNORECASE))
        footer_found = bool(re.search(r'<footer|id=["\']footer["\']', content_en, re.IGNORECASE))
        assert navbar_found, "Navbar not found on English home page"
        assert footer_found, "Footer not found on English home page"

        # Validate high-end monochromatic aesthetic by checking CSS or style hint in head
        # Search for 'monochrome' in <style> or <link rel="stylesheet" href=...> in <head>
        head_match = re.search(r'<head.*?>(.*?)</head>', content_en, re.IGNORECASE | re.DOTALL)
        assert head_match is not None, "No <head> section found on English home page"
        head_content = head_match.group(1)

        monochrome_found = False

        for style_match in re.finditer(r'<style.*?>(.*?)</style>', head_content, re.DOTALL | re.IGNORECASE):
            if 'monochrome' in style_match.group(1).lower():
                monochrome_found = True
                break
        if not monochrome_found:
            for link_match in re.finditer(r'<link[^>]+rel=["\']stylesheet["\'][^>]+href=["\']([^"\']+)["\']', head_content, re.IGNORECASE):
                href = link_match.group(1).lower()
                if 'monochrome' in href:
                    monochrome_found = True
                    break

        assert monochrome_found, "No monochromatic style found in English home page head"

        # Step 3: Navigate to English programs page via site shell link
        # Find a link containing 'programs' in link text
        programs_link = find_link_with_text(content_en, 'programs')
        if not programs_link:
            # fallback: any link to /en/programs
            programs_link = find_link_with_href_prefix(content_en, '/en/programs')
        assert programs_link is not None, "Link to English programs page not found on home page"

        resp_programs = session.get(f"{base_url}{programs_link}", timeout=timeout)
        assert resp_programs.status_code == 200, f"Expected 200 OK for English programs page, got {resp_programs.status_code}"

        content_prog = resp_programs.text

        # Validate English programs page is LTR and has programs list content
        html_prog_dir = None
        html_prog_dir_match = re.search(r'<html[^>]* dir=["\']([^"\']+)["\']', content_prog, re.IGNORECASE)
        if html_prog_dir_match:
            html_prog_dir = html_prog_dir_match.group(1).lower()
        assert html_prog_dir == 'ltr', f"English programs page 'dir' attribute expected 'ltr', got '{html_prog_dir}'"

        # Validate site shell on programs page
        navbar_prog_found = bool(re.search(r'<nav|id=["\']navbar["\']', content_prog, re.IGNORECASE))
        footer_prog_found = bool(re.search(r'<footer|id=["\']footer["\']', content_prog, re.IGNORECASE))
        assert navbar_prog_found, "Navbar not found on English programs page"
        assert footer_prog_found, "Footer not found on English programs page"

        # Step 4: Navigate to English trainers page via site shell link
        trainers_link = find_link_with_text(content_prog, 'trainers')
        if not trainers_link:
            # fallback: any link to /en/trainers
            trainers_link = find_link_with_href_prefix(content_prog, '/en/trainers')
        assert trainers_link is not None, "Link to English trainers page not found on programs page"

        resp_trainers = session.get(f"{base_url}{trainers_link}", timeout=timeout)
        assert resp_trainers.status_code == 200, f"Expected 200 OK for English trainers page, got {resp_trainers.status_code}"

        content_trainers = resp_trainers.text

        html_trainers_dir = None
        html_trainers_dir_match = re.search(r'<html[^>]* dir=["\']([^"\']+)["\']', content_trainers, re.IGNORECASE)
        if html_trainers_dir_match:
            html_trainers_dir = html_trainers_dir_match.group(1).lower()
        assert html_trainers_dir == 'ltr', f"English trainers page 'dir' attribute expected 'ltr', got '{html_trainers_dir}'"

        # Validate site shell on trainers page
        navbar_trainers_found = bool(re.search(r'<nav|id=["\']navbar["\']', content_trainers, re.IGNORECASE))
        footer_trainers_found = bool(re.search(r'<footer|id=["\']footer["\']', content_trainers, re.IGNORECASE))
        assert navbar_trainers_found, "Navbar not found on English trainers page"
        assert footer_trainers_found, "Footer not found on English trainers page"

    finally:
        session.close()


test_unsupported_locale_redirects_to_english_home_with_working_navigation()
