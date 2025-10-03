    if (n == k) return nums;
    let temp = [];

    for (let i = n - k; i < n; i++) {
        temp.push(nums[i])
    }

    for (let i = 1; i < n - k; i++) {
        temp.push(nums[i])
    }

    return temp