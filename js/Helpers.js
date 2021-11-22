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
            return false
        }
    }
    return true
}

function validateBoth(text){
    for(let i=0; i< text.length; i+=1){
        let character= text[i]
        if(!(/[a-zA-z\d\s.]/).test(character)){
            return false
        }
    }
    return true
}

function validateIfMix(text){
    let testNum= false
    let testLetter= false

    for(let i=0; i< text.length; i+=1){
        let character= text[i]
        if(testNum && testLetter){
            return true
        }else if(validateAllNumbers(character)){
            testNum= true
        }else if(validateAllLetters(character)){
            testLetter= true
        }
    }
    return testNum && testLetter
}