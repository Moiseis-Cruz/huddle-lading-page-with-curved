const form = document.getElementById("form");
const inputEmail = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})


function checkInputs() {
    const inputEmailValue = inputEmail.value.trim()

    if(inputEmailValue === "") {
        errorValidation(inputEmail, "Check your email please")
    }else{
        successValidation(inputEmail)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "form-control error"
}

function successValidation(){
    alert("You're subscribed!")
}