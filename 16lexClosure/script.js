//closure
function outer(){
    let name = "suvesh"
    function inner(){
        console.log(name)
    }
    return inner
}

const myFunc = outer()
myFunc()