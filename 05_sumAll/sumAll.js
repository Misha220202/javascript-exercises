const sumAll = function (a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && b > =0 && a >= 0) {
        const min = Math.min(a, b);
        const max = Math.max(a, b);
        let result = 0;
        for (let i = min; i <= max; i++) {
            result += i;
        }
        return (result);
    }
    return ('ERROR');
}


// Do not edit below this line
module.exports = sumAll;