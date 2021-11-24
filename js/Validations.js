

function Names() {

    const first = document.getElementById("firstName").value
    const last = document.getElementById("lastName").value

    //trim to get rid of leading and trailing white spaces that user accidentally typed
    const fullName = (first + last).trim()
    const characterLimit = 40

    let validate = document.getElementById("validateName")
    //default error color
    validate.style = "color: red"


    if (fullName === "") {
        validate.innerHTML = "Your name must not be empty"
    } else if (first === "") {
        validate.innerHTML = "Your first name must not be empty"
    } else if (last === "") {
        validate.innerHTML = "Your last name must not be empty"
    } else if (!validateAllLetters(fullName)) {
        validate.innerHTML = "Your name contains non-letters"
    } else if ((first.length > characterLimit || last.length > characterLimit)) {
        validate.innerHTML = `Your name exceeded limit count, please refer to only ${characterLimit} chars each for first and last names`
    }
    else {
        validate.innerHTML = "Valid name"
        validate.style = "color: green"
        surveyInfo.firstName= first
        surveyInfo.lastName= last
        return true
    }

    return false
}

function Heights() {

    const fts = document.getElementById("fts").value
    const inches = document.getElementById("inches").value

    //trim to get rid of leading and trailing white spaces that user accidentally typed
    const height= (fts+inches).trim()

    let validate = document.getElementById("validateHeight")
    //default error color
    validate.style = "color: red"

    if(!validateAllNumbers(height)){
        validate.innerHTML= "Your height input isn't a number"
    }else if(fts === "" || inches === ""){
        validate.style= "color: grey"
        return true
    }else{
        validate.innerHTML= "Valid height"
        validate.style= "color: green"
        surveyInfo.fts= fts + " ft."
        surveyInfo.inches= inches + " in."
        return true
    }
    return false
}

function Phones(){

    const phone=  document.getElementById("phone").value
    const phoneLimit= 10 + 2 //2 for spaces

    let validate= document.getElementById("validatePhone")
    //default error color
    validate.style = "color: red"

    if(!validateAllNumbers(phone)){
        validate.innerHTML= "Your phone contains non-numbers"
    }else if(phone.length != phoneLimit){
        validate.innerHTML= `Your phone number isn't ${phoneLimit-2} digits`
    }else{
        validate.innerHTML= "Valid phone number"
        validate.style= "color: green"
        surveyInfo.phone= phone
        return true
    }
    return false
}

function Emails(){

    //trim to get rid of leading and trailing white spaces that user accidentally typed
    const email = document.getElementById("emails").value.trim()

    const characterLimit = 40

    let validate = document.getElementById("validateEmail")
    //default error color
    validate.style = "color: red"

    if (email === "") {
        validate.innerHTML = "Your email must not be empty"
    } else if (!email.includes("@")) {
        validate.innerHTML = "Your email has to include @"
    } else if (!validateEmails(email)) {
        validate.innerHTML = "Your email contains non-letters and non-numbers"
    } else if ((email.length > characterLimit)) {
        validate.innerHTML = `Your email exceeded limit count, please refer to only ${characterLimit} chars each for first and last names`
    }
    else {
        validate.innerHTML = "Valid email"
        validate.style = "color: green"
        surveyInfo.email= email
        return true
    }

    return false
}

function Titles(){

    const title= document.getElementById("title").value
    let validate = document.getElementById("validateTitle")
    //default error color
    validate.style = "color: red"

    if(title === ""){
        validate.innerHTML = "You must choose a title"
    }else{
        validate.style = "color: green"
        validate.innerHTML = "Valid title"
        surveyInfo.title= title
        return true
    }

    return false
}

function TermsOfService() {

    const terms= document.getElementById("termsOfService").checked
    let validate = document.getElementById("validateTerms")
    //default error color
    validate.style = "color: red"

    if(!terms){
        validate.innerHTML= "You didn't checkbox the terms, please do so to submit"
    }else{
        validate.style = "color: green"
        validate.innerHTML= "You agreed to our terms of service"
        return true
    }

    return false
}


//address validations

function Address(){

    const address= document.getElementById("address").value.trim()

    let validate= document.getElementById("validateAddress")

    //default error color
    validate.style = "color: red"

    if(address === ""){
        validate.innerHTML= "Your address can't be empty"
    }else if(!validateBoth(address)){
        validate.innerHTML= "Your address contains invalid characters"
    }else if(!validateIfMix(address)){
        validate.innerHTML= "Your address should be similiar to (e.g. 340 bayshore hwy)" 
    }else if(address.length> 40){
        validate.innerHTML= "Your address exceeded 40 characters"
    }else{
        validate.innerHTML= "Valid street name"
        validate.style= "color: green"
        surveyInfo.address= address
        return true
    }
    return false
}

function Cities(){

    const city= document.getElementById("city").value.trim()

    let validate= document.getElementById("validateCity")

    //default error color
    validate.style = "color: red"

    if(!validateAllLetters(city)){
        validate.innerHTML= "Your city contains non-letters"
    }else if(city === ""){
        validate.innerHTML= "Your city can't be empty"
    }else if(city.length> 40){
        validate.innerHTML= "Your city exceeded 40 characters"
    }else{
        validate.innerHTML= "Valid city"
        validate.style= "color: green"
        surveyInfo.city= city
        return true
    }
    return false
}

function States(){

    const state= document.getElementById("state").value.trim()

    let validate= document.getElementById("validateState")

    //default error color
    validate.style = "color: red"

    if(!validateAllLetters(state)){
        validate.innerHTML= "Your state contains non-letters"
    }else if(state === ""){
        validate.innerHTML= "Your state can't be empty"
    }else if(state.length> 40){
        validate.innerHTML= "Your state exceeded 40 characters"
    }else if(!validateStates(state)){
        validate.innerHTML= "This state doesn't exist in U.S"
    }else{
        validate.innerHTML= "Valid state"
        validate.style= "color: green"
        surveyInfo.state= state
        return true
    }
    return false
}

function Zips(){

    const zip=  document.getElementById("zip").value
    const zipLimit= 5

    let validate= document.getElementById("validateZip")
    //default error color
    validate.style = "color: red"

    if(!validateAllNumbers(zip)){
        validate.innerHTML= "Your zip contains non-numbers"
    }else if(zip.length != zipLimit){
        validate.innerHTML= `Your zip code isn't ${zipLimit} digits`
    }else{
        validate.innerHTML= "Valid zip code"
        validate.style= "color: green"
        surveyInfo.zip= zip
        return true
    }
    return false
}