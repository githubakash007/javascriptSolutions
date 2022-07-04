// https://leetcode.com/problems/majority-element/solution/

var majorityElement = function(nums) {

     
    let result = {};
    for(let i=0; i < nums.length;i ++){

        result[nums[i]] = result[nums[i]] === undefined ? 1:result[nums[i]] + 1;
        //console.log(result);      
    }

    let majorityNumberVal = Math.ceil(nums.length/2);
    //console.log(majorityNumberVal);
    //console.log(result);

    for(let [key,value] of Object.entries(result)){
        if(value >= majorityNumberVal){
            return key;
        }
    }
};

var majorityElementWithMap = function(nums) {
  let result = new Map();
  for(let num of nums){

    if(result.has(num)){
        result.set(num, result.get(num) + 1);
    }
    else{
        result.set(num,1);
    }
    
    if(result.get(num) > nums.length/2)
     return num;
}

// let majorityNumberVal = Math.ceil(nums.length/2);
//        for(let [key,value] of result){
//            if(value >= majorityNumberVal)
//             return key;
//        }          

}
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElementWithMap([3,2,3]));
console.log(majorityElementWithMap([2,2,1,1,1,2,2]));