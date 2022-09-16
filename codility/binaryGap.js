
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const binNum = N.toString(2).split('');
    let palArray = []
    let count = 0;
    let oneExists = false;
    // console.log(binNum)

    if(!binNum.includes('0')) return 0;


    for (let i = 0; i < binNum.length; i++) {
        const ele = binNum[i];
        const nextEle = binNum[i+1]
        
        if(!oneExists && ele == '1' && nextEle == '0' ) {
            oneExists = !oneExists;
            continue;
        }

        if(oneExists){
            if(ele == '0') count = count + 1;

            if(nextEle == '1' && ele == '0' ) {
                palArray.push(count)
                count = 0
            }
        }
    }
    palArray.sort((a,b)=> b-a)
    // console.log("new answer arr ", palArray)

    return palArray[0]
}

console.log(solution(328))