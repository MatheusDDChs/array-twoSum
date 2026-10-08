// Leetcode problem (Two Sum) O(n²) solution:

const nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums: number[], target: number) {
  let x = 0;
  let i = nums.length - 1;
  console.log("numeros: " + nums);

  for (let x = 0; x < i; x++) {
    for (let i = nums.length - 1; i > x; i--) {
      let res = nums[x] + nums[i];

      if (res == target) {
        console.log(`${x}, ${i}`);
        return [x, i];
      }
    }
  }
}

twoSum(nums, target);
