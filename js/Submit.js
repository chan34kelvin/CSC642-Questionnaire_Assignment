
function Submit() {

    const required= [
        ValidAddress(),
        Names(),
        Emails(),
        Phones(),
        TermsOfService(),
        Heights(),
        Titles()
    ]

    if (RunThruAllRequired(required)) {
        getRemainingValues()
        sessionStorage.setItem("surveyObject", JSON.stringify(surveyInfo))
        return true
    } else {
        alert("Checkout and fix the red errors correctly to submit")
    }

    return false
}

function RunThruAllRequired(required){

    let result= true
    for(let i=0; i< required.length; i+=1){
        result= result && required[i]
    }
    return result
}

function ValidAddress() {
    return (
        Address() &&
        Cities() &&
        States() &&
        Zips()
    )
}

function RunThruAllInputs() {
    Address()
    Cities()
    States()
    Zips()
    Names()
    Heights()
    Emails()
    Phones()
    TermsOfService()
    Titles()
}

function getRemainingValues() {

    const services = document.getElementById("services")
    let result = ""
    for (let i = 0; i < services.children.length; i += 1) {
        let current = services.children[i].children[1]
        if (current.checked) {
            result += current.value + " , "
        }
    }

    //remove the tail ,
    if (result.includes(",")) {
        result = result.substr(0, result.length - 2)
    }

    surveyInfo.services = result
    surveyInfo.budget = document.getElementById("budget").value
}