var removeElement = function(nums, val) {
      
    for(let i =0; i < nums.length;i++){
//        console.log(nums);
         if(nums[i] === val){
            nums.splice(i,1);
            i--;
         }
          
    }

    return nums;


};

console.log(removeElement( [0,1,2,2,3,0,4,2],2));
console.log(removeElement([3,2,2,3],3));