// Given an array of integers and a target number, return two ints from the array that add up to the target number

// INCOMPLETE because C++ syntax

#include <iostream>
#include <vector>
#include <map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target);

int main() {
  vector<int> nums;
  nums.push_back(3);
  nums.push_back(3);
  // nums.push_back(4);
  twoSum(nums, 6);
  return 0;
}

vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> solutionIndexes(2);

    int diff = 0;
    map<int, int> tried; // number, index in vector

    for(int i=0; i<nums.size(); i++) {
        diff = target - nums[i];
        cout << "current number: " << nums[i] << endl;
        cout << "diff: " << diff << endl;
        cout << "tried[diff]= " << tried[diff] << endl;
        if(tried[diff]) { // problem here is that 0 == false, so if you find a number at index 0, it will not pass this test.
          cout << "found" << endl;
          cout << "tried[diff]=" << tried[diff] << endl;
          cout << "i=" << i << endl;
          solutionIndexes[0] = tried[diff];
          solutionIndexes[1] = i;
          return solutionIndexes;
        } else {
          cout << "adding to map: " << nums[i] << " : " << i << endl;
          tried[nums[i]] = i;
        }
    }
    return solutionIndexes;
}
