//helpers
function validateAllLetters(text){
    for(let i=0; i< text.length; i+=1){
        let character= text[i]
        if(!(/[a-zA-Z\s]/).test(character)){
            return false
        }
    }
    return true
}

function validateAllNumbers(text){
    for(let i=0; i< text.length; i+=1){
        let character= text[i]
        if(!(/[\d\s]/).test(character)){
            return false
        }
    }
    return true
}

function validateEmails(text){
    for(let i=0; i< text.length; i+=1){
        let character= text[i]
        if(!(/[a-zA-z\d.@]/).test(character)){
            console.log(character)
            return false
        }
    }
    return true
}