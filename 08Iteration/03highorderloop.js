const gameName = ["cricket", "football", "volleyball"]
for (const element of gameName) {
    console.log(element);
}


for (const key in gameName) {
    console.log(`${key} : ${gameName[key]}`)
    
}


const gameObject = {
    ck : "cricket",
    fb : "football",
    vb : "volleyball"
}
for (const key in gameObject) {
    console.log(`${key} : ${gameObject[key]}`);
    
}

const gameName = ["cricket", "football", "volleyball"]

gameName.forEach((element)=>{
    console.log(element);

})
    

const nameArray = [
    {
    studentName : "tanvi",
    rollNo : 50
    },

    {
    studentName : "suvesh",
    rollNo : 90
    }
]

nameArray.forEach((element)=>{
    console.log(element.studentName);
    
})

