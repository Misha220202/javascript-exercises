const palindromes = function (str) {
    const arr = str.toUpperCase().split('');
    const filtered = arr.filter(value => ('A' <= value && value <= 'Z' || '0' <= value && value <= '9'));
    if (filtered.toString() == filtered.toReversed().toString()) return (true);
    else return (false);
};

// Do not edit below this line
module.exports = palindromes;
