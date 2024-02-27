const reverseString = function(word) {
    let n=word.length;
    let result='';
    for (let i=n-1;i>=0;i--){
        result+=word[i];
    }
    return (result);
};

// Do not edit below this line
module.exports = reverseString;
