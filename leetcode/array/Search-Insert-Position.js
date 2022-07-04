//https://leetcode.com/problems/search-insert-position/
var searchInsert = function (nums, target) {
    if (nums.find(x => x === target)) {
        nums.indexOf(target);
        return nums.indexOf(target);
    }
    else if (nums[0] > target) {
        nums.splice(0, 0, target);
        return nums.indexOf(target);
    }
    else if (nums[nums.length - 1] < target) {
        nums.splice(nums.length, 0, target);
        return nums.indexOf(target);
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < target && nums[i + 1] > target) {
                nums.splice(i+1, 0, target);
                console.log(nums);
                return nums.indexOf(target);
            }
        }
    }

};

//console.log([1, 3, 5, 6].sort(function(a, b){return a - b;}));

function tt(arr,num){
    let k=0;
    let j = 0;
    arr.sort(function(a, b){return a - b;});
    for (var i= 0; i < arr.length; i++){
        if ( arr[i] < num ) {
          k++;      
          console.log("k =",k);
          if (arr[i] > num) {
            j++;
            console.log("j =",j);
          }
        }
      }
      return j+k;
}

console.log(tt([10,20,30,40,50],35));
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 2));