let inputs = require('../spec/main-spec.js')
function main() {
    let arr=[2,7,5,1];
    let string=checknum(inputs.inputs,arr);
    return string;
}

function checknum(input,arr) {
    let j=0,k=0;
    for(let i=0;i<input.length;i++){
        if(arr.indexOf(input[i])==i){
            j++;
        }
        else{
            for(let n=0;n<input.length;n++){
                if(input[n]===arr[i]){
                    k++;
                }
            }
        }
    }
    let string=j.toString()+'A'+k.toString()+'B';
    console.log(string);
    return string;
}
module.exports = main;