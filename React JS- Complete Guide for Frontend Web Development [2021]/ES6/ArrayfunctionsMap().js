const mArr = [1,2,3,4,5]
console.log(mArr)
const mArr1 = mArr.map((item)=>{ // map() method
    return item*2;
})
console.log(mArr1)

const mArr2 = mArr1.map((data , pos) => {
    return `Value at ${pos} index is ${data*3}`

})
console.log(mArr2)

const players = [{
    name : "Arman",
    number : 786,
    position : "DM"
},
{
    name : "Ratneshwar",
    number : 7,
    position : "BWF"
},
{
    name : "Ayush",
    number : 10,
    position : "CF"
}]

console.log(players)
const sortP = players.map((data) => {
    return {
        name:data.name,
        position : data.position
    }
})

console.log(sortP)