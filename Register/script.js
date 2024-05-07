
let form = document.getElementById("form-box")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let firstname = document.getElementById("first-name")
    let lastname = document.getElementById("last-name")
    let address = document.getElementById("address")
    let email = document.getElementById("email")
    let termsconditions = document.getElementById("agree-terms")
    let male = document.getElementById("male")
    let female = document.getElementById("female")

    let firstname_error = document.getElementById("first-name-error")
    let lastname_error = document.getElementById("last-name-error")
    let gender_error = document.getElementById("gender-error")
    let address_error = document.getElementById("address-error")
    let email_error = document.getElementById("email-error")

    firstname_error.style.display = "none"
    lastname_error.style.display = "none"
    gender_error.style.display = "none"
    address_error.style.display = "none"
    email_error.style.display = "none"

    if(firstname.value == "" || firstname.value == undefined){
        firstname_error.innerText = "*First name must be filled"
        firstname_error.style.display = "block"
    }
    else if(!validateAlphabetical(firstname.value)){
        firstname_error.innerText = "*First name must only contain alphabetical characters"
        firstname_error.style.display = "block"
    }
    else if(!validateCapital(firstname.value)){
        firstname_error.innerText = "*The first character must be capitalized and the rest uncapitalized"
        firstname_error.style.display = "block"
    }
    else if(!validateAlphabetical(lastname.value)){
        lastname_error.innerText = "*Last name must only contain alphabetical characters"
        lastname_error.style.display = "block"
    }
    else if(!female.checked && !male.checked){
        gender_error.innerText = "*Gender must be selected"
        gender_error.style.display = "block"
    }
    else if(address.value == "" || address.value == undefined){
        address_error.innerText = "*Address must be filled"
        address_error.style.display = "block"
    }
    else if(address.value.length > 50){
        address_error.innerText = "*Address mustn't exceed 50 characters"
        address_error.style.display = "block"
    }
    else if(email.value == "" || email.value == undefined){
        email_error.innerText = "*Email must be filled"
        email_error.style.display = "block"
    }
    else if(!(email.value.includes("@") && email.value.endsWith(".com"))){
        email_error.innerText = "*Email must include @ or end with .com"
        email_error.style.display = "block"
    }
    else if(!termsconditions.checked){
        let label = document.getElementById("terms-conditions")
        label.classList.add('shake')

        setTimeout(function() {
            label.classList.remove('shake');
        }, 1000);
    }
    else{
        window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
    }

    function validateAlphabetical(input){
        for (let i = 0; i < input.length; i++) {
            let character = input[i]
            if (((character < 'a' || character > 'z') && (character < 'A' || character > 'Z') && character != ' ')) {
                return false;
            }
        }
        return true
    }

    function validateCapital(input){
        if(input[0] < 'A' || input[0] > 'Z'){
            return false
        }
        for (let i = 1; i < input.length; i++) {
            let prev = input[i-1]
            let character = input[i]
            if ((character < 'a' || character >'z') || (prev == ' ' && (character >= 'a' && character <='z'))) {
                return false;
            }
        }
        return true
    }
})