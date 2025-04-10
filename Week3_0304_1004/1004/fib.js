// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


//I will try to use as less parameters as possible, ideally only one
function fib(nth){
    //base case 
    if(nth ===3)return 2
    if(nth ===2)return 1
    return fib(nth-1) + fib(nth-2)
  }

console.log(fib(35));



//solved completely by myself!!! Yeah!!!