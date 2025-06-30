let data ={
    name : "suvesh",
    age : 19,
    email :"suvesh@gmail.com"
}
console.log(data);
console.log(data.age);
// Object.freeze(data)             //freeze only objects

data.name = "tanvi"
console.log(data.name);


data.func = function(){
console.log(`hello my name is ${this.name} and i am ${this.age}year old`);
}
data.func()


