let twoSum = function(nums, target){
    var map = new Map();
    var result = [];
    
    for (let i = 0; i < nums.length; i++){
        var complement = target - nums[i]
        if(map.has(complement)){
            result.push(map.get(complement))
            result.push(i)
        }else{
            map.set(nums[i], i)
        }
    }
    
    return result
}
console.log(twoSum([2,7,11,15], 9))