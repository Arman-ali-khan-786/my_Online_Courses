class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    getDetails = () => {
        return `Name : ${this.name} and Age : ${this.age}`
    }
}
class Player extends Person{
    constructor(name , age , club , pos){
        super(name ,age);  // 1st this statements is important bcz it calls the constructor of the parent class
        this.club = club;
        this.pos = pos;
    }
    getData = () => {
        return `${this.getDetails()} \nPlays for ${this.club} in ${this.pos} position.`
    }
}
let Messi = new Player("Lionel Messi", 34 , "PSG" ,"RWF");
console.log(Messi.getData())