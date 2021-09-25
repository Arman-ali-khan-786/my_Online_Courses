const arr = [ -1,-2,-3,-4,-5,5,4,3,2,1]
const res = arr.find((item)=>{
    return (item % 2 === 0 && item > 0)
})
console.log(res)
const res2 =  arr.findIndex(item =>{
    //console.log(item)
    return (item%2 !==0 && item > 0)
})
console.log(res2)

console.log(10<20<30)
console.log(30>20>10)