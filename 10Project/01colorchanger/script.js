const buttons = document.querySelectorAll(".button")
// console.log(buttons);
const body = document.querySelector("body")

buttons.forEach((color) => {
    // console.log(color);
    color.addEventListener('click', (value) => {
        // console.log(value.target.id);

        if (value.target.id == "red") {
            body.style.backgroundColor = "red"
        }
        else if (value.target.id == "orange") {
            body.style.backgroundColor = "orange"
        }
        else if (value.target.id == "yellow") {
            body.style.backgroundColor = "yellow"
        }
        else if (value.target.id == "blue") {
            body.style.backgroundColor = "blue"
        }
        else if (value.target.id == "purple") {
            body.style.backgroundColor = "purple"
        }

    })

}
)
