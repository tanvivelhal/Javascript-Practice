
class Student{
    constructor (name , age , email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    sayhello(){
        console.log(`my email id is ${this.email}`);
        
    }
}
const studentOne = new Student ("suvesh", 5 , "suvesh@gmail.com")
studentOne.sayhello()