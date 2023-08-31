const repeatString = function(outputString, count) {
    if(count < 0)
    {
        return "ERROR";
    }
    if(count == 0)
    {
        return "";
    }

    return outputString + repeatString(outputString, count - 1);
};

// Do not edit below this line
module.exports = repeatString;
