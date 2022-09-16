const longestWord = (str) => {
    let wordArray = str.split(" ")
    return wordArray.sort((a,b) => a.length - b.length)[wordArray.length -1]
}
//each word is seperated by a space
console.log(longestWord("I woke up early today"))
console.log(longestWord("I went straight to the beach"))




const longestWord2 = (str) => {

    let wordArray = []
    let left = 0
    let longWord = ""

    for (let i = 0; i < str.length; i++) {
        const ele = str[i];
        let word = ""
        if(ele === str[i].toUpperCase()){
            word  = str.slice(left, i);
            left = i;
        }

        if(i == str.length-1) word = str.slice(left, str.length)

        if(word.length > 0) {
            if( word.length > longWord.length) longWord = word
            wordArray.push(word)
        }
    }
    return longWord
}

//no space seperation
console.log(longestWord2("IWokeUpEarlyToday"))
console.log(longestWord2("IwentStraightToTheBeach"))