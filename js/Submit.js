function Submit() {

    const ifRequiredFit = (
        ValidAddress() &&
        Names() &&
        Emails() &&
        Phones() &&
        TermsOfService() &&
        Heights() &&
        Titles()
    )

    RunThruAllInputs()

    if (ifRequiredFit) {
        getRemainingValues()
        sessionStorage.setItem("surveyObject", JSON.stringify(surveyInfo))
        return true
    } else {
        alert("Checkout any reds and fix them correctly to submit")
    }

    return false
}

function StoreAllData(){
    localStorage.setItem("surveyObject", surveyInfo)
}

function ValidAddress() {
    return (
        StreetNames() &&
        StreetNumbers() &&
        Cities() &&
        States() &&
        Zips()
    )
}

function RunThruAllInputs() {
    StreetNames()
    StreetNumbers()
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
            result += current.value + " "
        }
    }

    surveyInfo.services = result
    surveyInfo.budget = document.getElementById("budget").value
}