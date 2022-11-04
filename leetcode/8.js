/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const str = x.toString();
    let revStr = '';
    let minus2 = - 2;
    for(c of str){
        revStr = c + revStr;
    }
    if(x < 0){
        revStr = '-' + revStr;
    }
    console.log(revStr)
    if(parseInt(revStr) >= (minus2 ** 31) && parseInt(revStr) <= (2 ** 31) -1){
        return parseInt(revStr);
    }
    return 0;

};
