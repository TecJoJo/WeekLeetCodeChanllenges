function countZeroes_On(arr){
    let count = 0
    for(let i=0; i<arr.length;i++){
        if(arr[i] ===0) count ++
    }
    return count 
}

module.exports = {countZeroes_On}


//solved by myself 