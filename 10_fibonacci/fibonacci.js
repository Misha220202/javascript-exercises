const fibonacci = function (x) {
    x = Number(x);
    const arr = [1, 1];
    if (x < 0) return ('OOPS');
    else if (x == 0) return (0);
    else if (x <= 2) return (1);
    else {
        for (let i = 2; i < x; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr[x - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
