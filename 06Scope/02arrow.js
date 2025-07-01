function func1(){
    console.log(this);
}
// func1()


const func2 =() => {
console.log(this);
}
// func2()                                //output :  {}


const func3 =(name1,name2) => {
console.log(name1 + name2);
}
// func3(5,3)


const func4 =(name1,name2) => (name1 + name2)
console.log(func4(5,3))



