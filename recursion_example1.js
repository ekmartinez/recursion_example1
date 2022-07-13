function countDown(n) {
    if (n < 1) {
        return [];
    }
    const arr = countDown(n-1);
    arr.unshift(n);
    return arr;
}

console.log(countDown(10));