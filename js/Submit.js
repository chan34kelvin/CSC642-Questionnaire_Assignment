function Submit() {

    try {
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
    }catch(err){
        console.log(err)
    }
    return false
}

function StoreAllData() {
    localStorage.setItem("surveyObject", surveyInfo)
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

    if (result.includes(",")) {
        result = result.substr(0, result.length - 2)
    }

    surveyInfo.services = result
    surveyInfo.budget = document.getElementById("budget").value
}