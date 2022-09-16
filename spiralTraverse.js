function spiralTraverse(array){

    if(array.length < 1) return false;

    if(array.length === 1){
        if(typeof array[0] === 'object'){
            return array[0].sort((a,b) => a-b) 
        }
    };
    
    let finalArray = []
    for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                const element = array[i][j];
                finalArray.push(element)
            }
    }

 return  finalArray.sort((a,b)=> a - b)
}

let arr = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
]

// let arr = [
//     [1,5,2,3,4]
// ]
console.log(spiralTraverse(arr))
