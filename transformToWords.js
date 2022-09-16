 const transform = (word) => {

    const reg = /([A-Z][a-z]+)*[A-Z][a-z]*/;

    //if first char is caps, cut out
    // if current and next is uppercase cut out current
    // if current is upper and next is not cut out current 
    //if current is lower case cut out 
    //if current is lower case and next is upper cut out current and add to array
 
    let wordArray = []
    let newWord = ''
    let wordLength = word.length
    for (let i = 0; i < wordLength; i++) {
        const ele = word[i];
        const next = word[i+1]
        const nextClone = word[i+1]
        const firstItem = i==0? true: false

        if(next === nextClone.toUpperCase()){
            const newWord = word.split(0, i+1)
            console.log(newWord);
        }
    }

    // return wordArray
}


 console.log(transform('IAmABoy'))
 console.log(transform('GodIsGood'))
 console.log(transform('WeAreGoing'))