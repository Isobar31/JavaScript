function sameFrequency(arg1, arg2){
    
    if (arg1.toString().length !== arg2.toString().length) return false;
    
    let countObj = {};
    
    for (let num of arg1.toString()) 
    {
        if (countObj[num]) 
        {
            countObj[num]++;
        }
        else 
        {
            countObj[num] = 1;
        }
    }
    
    for (let item of arg2.toString()) {
        if (!countObj[item]) 
        {
            return false;
        }
        else 
        {
            countObj[item]--;
        }
    }
    
    for (let item in countObj) {
        if (countObj[item] > 0) 
        {
            return false;
        }
    }
    return true;
}



// Another approach
function sameFrequency(first, second) {

    if (first.toString().length !== second.toString().length) return false;

    let frequencies = {};
 
    let digit;
    while (first) {
        digit = first % 10;
        frequencies[digit] = ++frequencies[digit] || 1;
        first = Math.floor(first / 10);
    }
 
    while (second) {
        digit = second % 10;
        if (!frequencies[digit]--) {
            return false;
        }
        second = Math.floor(second / 10);
    }
    return true;
}



// The 3rd approach
function sameFrequency(first, second) {
 
    // get the number of their digits
    const firstLen = Math.floor(Math.log10(first)) + 1;
    const secondLen = Math.floor(Math.log10(second)) + 1;
     
    if (firstLen !== secondLen) {
        return false;
    }
     
    let freqCounter = {};
    for (let digitPos = 0; digitPos < firstLen; ++digitPos) {
        let digit = Math.floor(first / Math.pow(10, digitPos)) % 10;
        freqCounter[digit] = freqCounter[digit] + 1 || 1;
    }
    for (let digitPos = 0; digitPos < secondLen; ++digitPos) {
        let digit = Math.floor(second / Math.pow(10, digitPos)) % 10;
        if (!freqCounter[digit]) {
            return false;
        }
        freqCounter[digit]--;
    }
    return true;
     
    }