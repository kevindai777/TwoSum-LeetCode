//Objective is to find the indices of two elements in an array that 
//add exactly to a given target value.


//O(n) solution where n is the number of elements in the map
//We use a hashmap to keep track of each of the elements

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        
        throw new IllegalArgumentException("No Answer");
    }
}