//I am really surprised how few code can solve the fib with using recursion 
//Thus I want to see how it differs with a more traditional solution if I can figure out some
//25 min is the time limit, if exceeded I won't continue 


function fib(nth) {
    const fibList = [1, 1];
    if (nth === 1) return 1;
    for (let i = 2; i < nth; i++) {
        const newNumber = fibList[fibList.length - 1] + fibList[fibList.length - 2];
        fibList.push(newNumber);
    }
    return fibList[nth - 1];
}

console.log(fib(4) )// 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465


//failed to solve the problem in time, resolve with 
//AI help correcting the bug introduced in implementation