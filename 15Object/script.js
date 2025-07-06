
Math.PI = 9
console.log(Math.PI);


const objectName = {
    name : "tanvi"
}


Object.defineProperty(objectName, "name",{
  writable: false,
  enumerable: false,
  configurable: false

})
 const objdescriptor = Object.getOwnPropertyDescriptor(objectName, 'name')
console.log(objdescriptor)


