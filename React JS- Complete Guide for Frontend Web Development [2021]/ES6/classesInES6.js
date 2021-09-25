 // OLD way
    function Person(name , BOY){
        this.name = name;
        this.BOY = BOY;
        this.getDetails = function(){
            return "Name : "+this.name+" and Age :"+(2021-this.BOY)
        }
    }
    var John = new Person("John" , 1978);
    console.log(John.getDetails())

// New ES6 way
   class Person2 {
       constructor(name , age){
           this.name = name;
           this.age = age;
       }
       getInfo = () => {
           return `My name is ${this.name} and i'm ${this.age} years old.`
       }
   }
   let Wick = new Person2("John Wick", 34);
   console.log(Wick.getInfo())
   