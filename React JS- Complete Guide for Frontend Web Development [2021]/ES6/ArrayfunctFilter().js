const arr = [ 1,2,3,4,5,6,7,8,9,10]
const res = arr.filter((item)=>{
    return item%2 === 0 ;    // it returns true and adds them, for the elements that satisfies the condition
})
console.log(res)
const res1 = arr.filter((item)=>{
    return item%2 !== 0 ;    // for odd numbers
})
console.log(res1)