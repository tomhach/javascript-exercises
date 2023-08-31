const sumAll = function(value1, value2) {
    if(value1 < 0 || value2 < 0)
    {
        return "ERROR";
    }
    if(!Number.isInteger(value1) || !Number.isInteger(value2))
    {
        return "ERROR";
    }



    let newValue = 0;
    if(value1 < value2)
    {
        for(value1; value1 <= value2; value1++)
        {
            newValue += value1;        
        }
    }
    else
    {
        for(value2; value2 <= value1; value2++)
        {
            newValue += value2;        
        }
    }
    return newValue;
};

// Do not edit below this line
module.exports = sumAll;
