function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ' : is even number');
        }
        else{
            console.log(num, ' : is odd number');
        }
    }
}

nums = [5, 12, 89, 45, 18, 8];
evenify_all(nums);

friends_age = [18, 25, 59, 26, 47, 88];
evenify_all(friends_age);