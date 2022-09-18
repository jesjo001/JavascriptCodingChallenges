// [ 'I', 'Woke', 'Up', 'Early', 'Today' ]
// [ 'I', 'Went', 'Straight', 'To', 'The', 'Beach' ]

const transformToWords = (str) => {
    const words = []
    let leftPos = 0

    for (let i = 0; i < str.length; i++) {
        const ele = str[i];
        let word = ""

        if(ele === str[i].toUpperCase()){
            word = str.slice(leftPos, i)
            leftPos = i
        }

        if(i === str.length -1) word = str.slice(leftPos, str.length)

        if(word.length > 0) words.push(word)
    }

    return words
}

//no space seperation
console.log(transformToWords("IWokeUpEarlyToday"))
console.log(transformToWords("IWentStraightToTheBeach"))

