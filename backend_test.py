
import requests
import sys
import json
from datetime import datetime

class GrowwAPITester:
    def __init__(self, base_url="https://dda6fd57-bbf5-4c72-a43e-03ea3f3be078.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except json.JSONDecodeError:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.text}")
                except:
                    pass
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "/api",
            200
        )

    def test_status_check(self):
        """Test creating a status check"""
        data = {"client_name": f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"}
        return self.run_test(
            "Create Status Check",
            "POST",
            "/api/status",
            200,
            data=data
        )

    def test_get_status_checks(self):
        """Test getting all status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "/api/status",
            200
        )

def main():
    # Setup
    tester = GrowwAPITester()
    
    # Run tests
    root_success, _ = tester.test_root_endpoint()
    status_success, status_response = tester.test_status_check()
    get_status_success, get_status_response = tester.test_get_status_checks()
    
    # Print results
    print(f"\n📊 Tests Summary:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All backend API tests passed!")
        return 0
    else:
        print("❌ Some backend API tests failed.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
