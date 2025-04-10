// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    //base case 
    if(arr.length ===1)return arr[0]
    const lastItem = arr.pop()
    return  lastItem * productOfArray(arr)
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60


//solved completely on my own