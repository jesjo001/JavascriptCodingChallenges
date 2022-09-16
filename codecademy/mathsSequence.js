//Arithemethic, Geometric or No pattern
//no negative values

const mathSequence = (arr) => {
    let typeArray = []

    for (let i = 0; i < arr.length; i++) {
        if(i === arr.length -1) break;
        const ele = arr[i];
        const next = arr[i+1] 
        
        if(next === arr[0] + ele ){ 
            typeArray.push('Arithemetic')
            continue;
        }
        
        if(next === arr[0] * ele ){ 
            typeArray.push('Geometric')
            continue;
        }
        else typeArray.push(-1)
    }

    return typeArray
}

console.log(mathSequence([2,4,6,8])) //return Arithemetic
console.log(mathSequence([3,9,27])) //return Geometric
console.log(mathSequence([2,5,14,89])) //return -1