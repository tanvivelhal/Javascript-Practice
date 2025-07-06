
const promiseOne = new Promise((resolve, reject) => {
    let error = false
    if(error == true){
        reject()
    }else{
        resolve()
    }
    
})
.then(()=>{
    console.log("promise resolved"); 
}).catch(()=>{
    console.log("promise is reject");
    
})



// ********************************************************************************************************************************************




//Promise method

fetch("https://api.github.com/users/suvesh0707")

.then((value)=>{
    return value.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error,"error while fetching api");
})


// async await

async function apifunction(){
    try{
        const val = await fetch("https://api.github.com/users/suvesh0707")
        const data = await val.json()
        console.log(data.name)

    }catch(error) {
        console.log(error,"error while fetching api");
    }
}
apifunction()