
function DisplayResults(){

    const surveyResults = JSON.parse(sessionStorage.getItem("surveyObject"))

    for (let key in surveyResults){
        if(surveyResults[key] != ""){
            document.getElementById(key).innerHTML= surveyResults[key]
        }
    }

}