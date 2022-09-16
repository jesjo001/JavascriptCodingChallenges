function statsFinder(array) {
    // Write your code here
    const mean = array.reduce((prev, cur) => prev + cur,0)
    let onjModes = {}
    let modeArray = [];
    
    for (let i = array.length -1; i >=0; i--) {
        const ele = array[i];
        createModes(ele, onjModes, modeArray)
    }

    console.log({onjModes})
    console.log("ade");
    let max = Math.max(...modeArray)

    const reversedKeys = Object.keys(onjModes).reverse()
    const mode = reversedKeys.filter(key => {
        if(onjModes[key] === max) {
            return key
        }
    })

    return mode[0]
}
  

function createModes(num, obj, modeArray){
    let ele = obj[`${num}`];
    if(ele !== undefined) obj[`${num}`] = ele+1;
    else{
        obj[`${num}`] = 1; 
    }
    modeArray.push(obj[`${num}`]) 
} 
  console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  
