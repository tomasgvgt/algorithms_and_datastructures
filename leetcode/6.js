/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let str2 = '';
    if(numRows === 1){
        return s;
    }else{
        let matrix = createMatrix(s, numRows);
        for(i = 0; i < numRows; i++){
            for(j = 0; j < s.length; j++){
                if(matrix[i][j] != ''){
                    str2 += matrix[i][j];
                }
            }
        }

        console.log(str2)
    }
};

function createMatrix(str, nRows){
    let i = 0;
    let j = 0;
    let c = 0;
    let down = true;
    let matrix = [];
    let downN = 0;
    let diagN = 0;
    while(c < nRows){
        matrix.push(new Array(str.length).fill(''));
        c++;
    }
    c = 0
    while(c < str.length){
        if(down){
            if(downN === nRows){
                downN = 0;
                down = false;
                i = i - 2;
                j++;
            }else{
                matrix[i][j] = str[c];
                i++;
                downN++;
                c++;
            }
        }else{
            if(diagN === nRows - 2){
                diagN = 0;
                down = true;
            }else{
                matrix[i][j] = str[c];
                i--;
                j++;
                diagN++;//
                c++;
            }
        }
    }
    return(matrix);
}

convert("howareyouman", 8);