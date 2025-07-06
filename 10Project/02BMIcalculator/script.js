const form = document.querySelector('form')

form.addEventListener('submit', (value) => {
    value.preventDefault()

    const height = parseInt(document.querySelector("#Height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector(".result")
    //console.log(typeof height);


    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please enter a valid height"
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please enter a valid weight"
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `${BMI}`
    }






})