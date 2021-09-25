const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.reduce((acc , item)=> {return acc+=item}, 0))
// or
console.log(arr.reduce((sum , item)=> sum+=item, 0))
