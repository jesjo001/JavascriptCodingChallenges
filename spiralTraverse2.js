
let arr = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
]


function spiralTraverse(array){

    //generate a new array to mutate in solution
    let newArray = [...array]
    //get length of array
    let length  = array.length;
    //get length of items
    let maxLength = length * array[0].length;
    let finalArray = []

    do {
        //remove first array into new
        let eleArr = newArray.shift()
        finalArray = [...finalArray, ...eleArr];

        //get last element in each array
        let element;
        for (let i = 0; i < newArray.length; i++) {
            finalArray.push(newArray[i].pop())
        }

        //get last item in array
        let lastEle = newArray.pop().sort((a,b) => a-b);

        finalArray = [ ...finalArray, ...lastEle]

        for (let i = newArray.length-1; i >= 0 ; i--) {
            finalArray.push(newArray[i].shift())
        }
        
    } while (finalArray.length < maxLength);
    return finalArray;
}


console.log(spiralTraverse(arr))