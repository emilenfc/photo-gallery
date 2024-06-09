
//Coding Challenge 1: Array Manipulation

/**Problem Statement:
Given an array of integers and a target sum, determine if there exists a contiguous
subarray within the array that sums up to the target. Return true if such a subarray exists,
otherwise return false.
 */

const checkSubarrayTarget = (arr, target) => {
    let left = 0;
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x];
        while (sum > target) {
            sum -= arr[left];
            left++;
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
};

//testing
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(checkSubarrayTarget(arr, target));
const arr2 = [4, 2, 7, 1, 9, 5];
const target2 = 10;
console.log("ckeck 2", checkSubarrayTarget(arr2, target2));