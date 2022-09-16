// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length
    if(len == 0) return 1
    if(len == 1) {
        if(A[0] < 1) return 1
        return A[0] + 1
    }
    
    let numSet = new Set(A.sort((a,b) => a-b))
    let curr = A[0]

    if(A[len -1] < 1) return 1
    if(A[0] > 1) return 1
    
    for (let i = 0; i < A.length; i++) {
        if(!numSet.has(curr)) return curr
        curr = curr+1        
    }

    if(curr > 1) return curr
    return 1
}

console.log(solution([3,2,1,5]));