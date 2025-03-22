/**
 * one or one and half years ago, I had the first glance of concept of Recursion,
 * By that time, I could yet understand well how it work 
 * but only mimic with the solution
 * after being a SW trainee for near two years and got some sort of 
 * Algorithm training I want to re-visit the fibonacci problem
 * with some variants on the question itself.
 * 
 * Questions are made up by myself and some of them reflect the problem I encountered before 
 * Some of them may be just made up. 
 * 
 * 
 * Question 1, giving n of number and generate n amount of numbers forming 
 * the fibonacci sequence starting from 0,1
 */
function generateFibonacci(n){
    //base case 
    if(n <= 2){
        if (n <=0) return []
        switch(n){
            case 2:
                return [0,1]
            case 1:
                return [0]
        }
    }
    const subSequence =  generateFibonacci(n-1)
    return [...subSequence,subSequence[n-2]+subSequence[n-3]]
}

module.exports = { generateFibonacci };