/**
 * @param {number} num
 * @return {string}
 */

 var intToRoman = function(num){
    const romanUnits = {
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    }
    const romanTens = {
        '1': 'X',
        '2': 'XX',
        '3': 'XXX',
        '4': 'XL',
        '5': 'L',
        '6': 'LX',
        '7': 'LXX',
        '8': 'LXXX',
        '9': 'XC'
    }
    const romanHundreds = {
        '1': 'C',
        '2': 'CC',
        '3': 'CCC',
        '4': 'CD',
        '5': 'D',
        '6': 'DC',
        '7': 'DCC',
        '8': 'DCCC',
        '9': 'CM'
    }
    const romanThousands = {
        '1': 'M',
        '2': 'MM',
        '3': 'MMM'
    }
    const str = [];
    num = num.toString();
    for(i=num.length - 1; i>=0; i--){
        if(i===num.length -1){
                str.unshift(romanUnits[num[i]])
        }else if(i===num.length - 2){
                str.unshift(romanTens[num[i]])
        }else if(i===num.length - 3){

                str.unshift(romanHundreds[num[i]])
        }else if(i===num.length - 4){
                str.unshift(romanThousands[num[i]])
        }
    }
    return str.toString().replace(/,/g, '');


}

// var romanToInt = function(num) {
//     const numbers = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     let total = 0;
//     for(let i=0; i< num.length; i++){
//         if(num[i] === 'I' && num[i+1] && (num[i+1]==='V' || num[i+1]==='X')){
//                 total -= numbers['I'];
//         }else if(num[i] === 'X' && num[i+1] && (num[i+1]==='L' || num[i+1]==='C')){
//             if(num[i+1] && (num[i+1]==='L' || num[i+1]==='C')){
//                 total -= numbers['X'];
//         }
//         }else if(num[i] === 'C' && num[i+1] && (num[i+1]==='D' || num[i+1]==='M')){
//                 total -= numbers['C'];
//         }else{
//             total += numbers[num[i]]
//         }
//     } 
//     return total;  
// };