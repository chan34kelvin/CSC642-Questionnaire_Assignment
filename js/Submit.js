
function Submit() {

    const required= [
        Address(),
        Cities(),
        States(),
        Zips(),
        Names(),
        Emails(),
        Phones(),
        TermsOfService(),
        Heights(),
        Titles()
    ]

    const numberOfErrs= RunThruAllRequired(required)

    if (numberOfErrs === 0) {
        getRemainingValues()
        sessionStorage.setItem("surveyObject", JSON.stringify(surveyInfo))
        return true
    } else {
        document.getElementById("validateButton").style= "color: red"
        document.getElementById("validateButton").innerHTML= `Checkout and fix ${numberOfErrs} errors correctly to submit`
        alert("Checkout and fix the red errors correctly to submit")
    }

    return false
}

function RunThruAllRequired(required){

    let numberOfErrs= 0
    for(let i=0; i< required.length; i+=1){
        if(!required[i]){
            numberOfErrs+= 1
        }
    }
    return numberOfErrs
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