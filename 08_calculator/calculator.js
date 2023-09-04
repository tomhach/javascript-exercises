const add = function(v1, v2) {
    return v1 + v2;	
};

const subtract = function(v1, v2) {
    return v1 - v2;	
};

const sum = function(args) {
    let result = 0;
    for(let x = 0; x < args.length; x++)
    {
        result += args[x];
    }
    return result;
};

const multiply = function(args) {
    let result = 1;
    for(let x = 0; x < args.length; x++)
    {
        result *= args[x];
    }
    return result;

};

const power = function(args, pwr) {
    let result = 1;
    for(let x = 0; x < pwr; x++)
    {
        result *= args;
    }
    return result;
};

const factorial = function(value) {
	let result = 1;
    for(value; value > 0; value--)
    {
        result *= value;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
