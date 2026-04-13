import requests

def test_arabic_trainers_directory_localization_and_rtl():
    base_url = "http://localhost:3000"
    url = f"{base_url}/ar/trainers"
    timeout = 30
    headers = {
        "Accept": "text/html",
        "User-Agent": "Test-Agent"
    }
    try:
        response = requests.get(url, headers=headers, timeout=timeout)
        # Validate status code
        assert response.status_code == 200, f"Expected 200 OK but got {response.status_code}"
        content = response.text

        # Validate that page contains Arabic localized content by checking presence of common Arabic words or characters
        arabic_chars_check = any("\u0600" <= c <= "\u06FF" or "\u0750" <= c <= "\u077F" or "\u08A0" <= c <= "\u08FF" for c in content)
        assert arabic_chars_check, "Response content does not contain Arabic characters"

        # Validate RTL direction is set on the page by looking for dir="rtl"
        assert 'dir="rtl"' in content.lower(), "Page direction is not set to RTL"

        # Check presence of trainers directory content - e.g. check for common Arabic words for trainers or titles in Arabic trainers data
        # Since trainers data is from lib/data/trainers.male.ts, we expect names or titles in Arabic script.
        # A generic heuristic: look for a common Arabic word related to trainers: مدرب (trainer)
        assert "مدرب" in content or "المدربين" in content or "المدربة" in content, "Trainers directory Arabic localization keywords not found"

    except requests.RequestException as e:
        assert False, f"Request failed: {str(e)}"

test_arabic_trainers_directory_localization_and_rtl()