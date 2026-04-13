import requests
from bs4 import BeautifulSoup

BASE_URL = "http://localhost:3000/3002"
TIMEOUT = 30

def test_english_programs_listing_and_return_home_locale():
    try:
        # Step 1: Request English programs page
        programs_url = f"{BASE_URL}/en/programs"
        response_programs = requests.get(programs_url, timeout=TIMEOUT)
        assert response_programs.status_code == 200, f"Expected 200 for {programs_url}, got {response_programs.status_code}"

        # Parse HTML content
        soup_programs = BeautifulSoup(response_programs.text, "html.parser")

        # Verify the page direction is LTR for English locale
        html_tag = soup_programs.find("html")
        assert html_tag is not None, "<html> tag not found in programs page"
        dir_attr = html_tag.get("dir", "").lower()
        assert dir_attr == "ltr", f"Expected dir='ltr' for English locale, got '{dir_attr}'"

        # Verify that page contains a list of programs
        # Heuristic: Look for elements with role=list or class including 'program' or similar
        program_list = None
        # Try common selectors for list of programs
        for selector in ["ul.programs", "div.program-list", "section.programs", "main"]:
            program_list = soup_programs.select_one(selector)
            if program_list:
                break
        if not program_list:
            # fallback: try to find an element with role="list" or containing multiple program entries
            program_list = soup_programs.find(attrs={"role": "list"})

        assert program_list is not None, "Programs list element not found on English programs page"

        # Check there is at least one program item
        program_items = program_list.find_all("li") if program_list.name in ["ul", "ol"] else program_list.find_all(recursive=False)
        assert len(program_items) > 0, "No program items found in the programs list"

        # Step 2: From programs page, navigate "back to English home" via simulated site shell link
        # Find link to /en (home)
        home_link = soup_programs.find("a", href="/en")
        assert home_link is not None, "Link back to English home (/en) not found in programs page"

        # Request the English home page
        home_url = f"{BASE_URL}/en"
        response_home = requests.get(home_url, timeout=TIMEOUT)
        assert response_home.status_code == 200, f"Expected 200 for {home_url}, got {response_home.status_code}"

        # Parse English home HTML content
        soup_home = BeautifulSoup(response_home.text, "html.parser")

        # Confirm English locale and LTR direction on home page
        html_tag_home = soup_home.find("html")
        assert html_tag_home is not None, "<html> tag not found in English home page"
        dir_attr_home = html_tag_home.get("dir", "").lower()
        assert dir_attr_home == "ltr", f"Expected dir='ltr' on English home, got '{dir_attr_home}'"

        # Verify presence of localized English content, e.g., known English text in header or footer
        # Check for site shell Navbar and Footer presence by common tags or IDs/classes
        navbar = soup_home.find(attrs={"role": "navigation"})
        footer = soup_home.find("footer")
        assert navbar is not None, "Navbar section not found on English home page"
        assert footer is not None, "Footer section not found on English home page"

        # Optional: check text in navbar or footer indicating English locale, e.g. "Home" or "Programs" text
        navbar_text = navbar.get_text(separator=" ").lower()
        footer_text = footer.get_text(separator=" ").lower()
        assert "home" in navbar_text or "program" in navbar_text, "English navbar expected text not found"
        assert len(footer_text) > 0, "English footer is empty"

    except requests.RequestException as e:
        assert False, f"HTTP request failed: {e}"

test_english_programs_listing_and_return_home_locale()