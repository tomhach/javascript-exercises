const reverseString = function(stringToReverse) {
    let reversedString = "";
    for(let s = stringToReverse.length - 1; s >= 0; s--)
    {
        reversedString += stringToReverse[s];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
