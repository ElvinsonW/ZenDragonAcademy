
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
        firstname_error.innerText = "*First name must only contain alphabetical characters and spaces"
        firstname_error.style.display = "block"
    }
    else if(!validateCapital(firstname.value)){
        firstname_error.innerText = "*The first character must be capitalized and the rest uncapitalized"
        firstname_error.style.display = "block"
    }
    else if(!validateAlphabetical(lastname.value)){
        lastname_error.innerText = "*Last name must only contain alphabetical characters and spaces"
        lastname_error.style.display = "block"
    }
    else if(!validateCapital(lastname.value)){
        lastname_error.innerText = "*The first character must be capitalized and the rest uncapitalized"
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
    else if(!validateAlphaNum(address.value)){
        address_error.innerText = "*Address must only contain alphabetical characters, numbers, spaces and commas"
        address_error.style.display = "block"
    }
    else if(email.value == "" || email.value == undefined){
        email_error.innerText = "*Email must be filled"
        email_error.style.display = "block"
    }
    else if(!(email.value.endsWith("@gmail.com"))){
        email_error.innerText = "*Email must end with @gmail.com"
        email_error.style.display = "block"
    }
    else if(email.value.length <= 10){
        email_error.innerText = "*Email can't only contain @gmail.com"
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
        window.location.href = "../Home/home.html"
    }

    function validateAlphabetical(input){
        for (let i = 0; i < input.length; i++) {
            let character = input[i]
            if ((character < 'a' || character > 'z') && (character < 'A' || character > 'Z') && character != ' ') {
                return false;
            }
        }
        return true
    }

    function validateAlphaNum(input){
        for (let i = 0; i < input.length; i++) {
            let character = input[i]
            if ((character < 'a' || character > 'z') && (character < 'A' || character > 'Z') && (character < '0' || character > '9')  && character != ' ' && character != ',' ) {
                return false;
            }
        }
        return true
    }

    function validateCapital(input){
        if(input[0] < 'A' || input[0] > 'Z'){
            return false
        }
        let words = input.split(' ');

        for (let i = 0; i < words.length; i++) {
            let word = words[i];

            if (word[0] < 'A' || word[0] > 'Z') {
                return false;
            }
            else{
                for(let j = 1 ; j < word.length ; j++){
                    if(word[j] < 'a' || word[j] > 'z'){
                        return false
                    }
                }
            }
        }
        return true
    }
})