/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let sumParentheses = 0;
    let sumBrackets = 0;
    let sumCurly = 0;
    let lastSymbol = s[0];
    const symbols = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for(c of s){
        console.log(`c: ${c}, lastSymbol: ${lastSymbol}, symbols[lastSymbol]: ${symbols[lastSymbol]}`);
        if((c !== '(' && c !== '[' && c !== '{' ) && c !== symbols[lastSymbol]){
            return false;
        }
        if(c === '('){
            sumParentheses += 1;
        }else if(c ===')'){
            sumParentheses -= 1;
        }else if(c ==='['){
            sumBrackets += 1;
        }else if(c === ']'){
            sumBrackets -= 1;
        }else if(c ==='{'){
            sumCurly += 1;
        }else if(c ==='}'){
            sumCurly -= 1;
        }
        if(sumParentheses < 0 || sumBrackets < 0 || sumCurly < 0){
            return false;
        }
        if(c === '(' || c === '[' || c === '{' ){
            lastSymbol = c;
        }
        console.log(`Sumpar = ${sumParentheses}, sumBrack: ${sumBrackets}, sumCurl: ${sumCurly}`);
    }
    console.log(`Sumpar = ${sumParentheses}, sumBrack: ${sumBrackets}, sumCurl: ${sumCurly}`);
    if(sumParentheses === 0 && sumBrackets === 0 && sumCurly === 0){
        return true
    }else{
        return false
    }
};

let s = '{[]}';
console.log(isValid(s));