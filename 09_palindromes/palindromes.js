const palindromes = function (str) {
    let cleanstring = str.replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"");
    let reversecleanstring = str.replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"").split("").reverse().join("");
 
    if(cleanstring.toLowerCase() === reversecleanstring.replace(/ /g,"").toLowerCase())
    {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
