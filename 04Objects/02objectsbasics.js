let obj1 ={
    name : "suvesh",
    email : "suvesh@gmail.com"
}

obj2 = new Object()
obj2.name2 = "tanvi"

// let obj3 = {...obj1, ...obj2}     //add 2 objects in one object
// console.log(obj3);

let obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));


// ****************************************************************************************************

const {name} = obj2
// console.log(name)