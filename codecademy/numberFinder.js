// PRIME NUMBER FINDER
// Prime Number Finder
// Create a primeFinder() function that takes in a number, n, and returns all the prime numbers from 1 to n (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.

// For example, primeFinder(11) should return [2, 3, 5, 7, 11].

// Variations of this challenge have been reported to have been asked at interviews with Facebook. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, 
// you should be able to solve this challenge. 
// If you have trouble, try refreshing your knowledge there first.

function primeFinder(n) {
    // Write your code here
    let primeNum = []

    for (let i = 0; i < n; i++) {

        if(i >0 && i < 2) primeNum.push(i)
        if(i > 2){
            if(i % 2 !== 0) primeNum.push(i)
        }
        
    }

    return primeNum

}
  
  console.log(primeFinder(11))
  