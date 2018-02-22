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
        // .count(key) on a map counts how many times that key is found. So if it is not found, it == 0. If it is found, it is == 1 (and >0). 
        if(tried.count(diff) > 0) {
          cout << "found" << endl;
          cout << "tried[diff]=" << tried[diff] << endl;
          cout << "i=" << i << endl;
          solutionIndexes[0] = tried[diff];
          solutionIndexes[1] = i;
          return solutionIndexes;
        } else {
          tried[nums[i]] = i;
        }
    }
    return solutionIndexes;
}
