

InitSelects(titleOptions, "title")
InitSelects(budgetOptions, "budget")
InitHeights()
InitDataLists(statesOptions, "states")

function InitHeights(){

    let arr= new Array()
    let arr1= new Array()

    console.log("test")

    arr[0] = document.createElement("option")
    arr[0].value= ""
    arr[0].appendChild(document.createTextNode(""))
    document.getElementById("fts").appendChild(arr[0])

    //fts
    for(let i=0; i< 12;i+=1){
        console.log("test1")
        arr[i+1] = document.createElement("option")
        arr[i+1].value= `${i}`
        arr[i+1].appendChild(document.createTextNode(`${i}`))
        document.getElementById("fts").appendChild(arr[i+1])        
    }

    arr1[0] = document.createElement("option")
    arr1[0].value= ""
    arr1[0].appendChild(document.createTextNode(""))
    document.getElementById("inches").appendChild(arr1[0])

    //inches
    for(let i=0; i< 12;i+=1){
        arr1[i+1] = document.createElement("option")
        arr1[i+1].value= `${i}`
        arr1[i+1].appendChild(document.createTextNode(`${i}`))
        document.getElementById("inches").appendChild(arr1[i+1])      
    }
}

//makes dropdown options for select
function InitSelects(options, id) {

    let arr = new Array()

    arr[0] = document.createElement("option")
    arr[0].value = ""
    arr[0].appendChild(document.createTextNode("Choose"))
    document.getElementById(id).appendChild(arr[0])

    for (let i = 1; i < options.length+1; i += 1) {
        arr[i] = document.createElement("option")
        arr[i].value = options[i-1]
        arr[i].appendChild(document.createTextNode(options[i-1]))
        document.getElementById(id).appendChild(arr[i])
    }
}

//makes dropdown options for datalist
function InitDataLists(options, id) {

    let arr = new Array()

    for (let i = 0; i < options.length; i += 1) {
        arr[i] = document.createElement("option")
        arr[i].class= "p-2"
        arr[i].value = options[i]
        arr[i].appendChild(document.createTextNode(options[i]))
        document.getElementById(id).appendChild(arr[i])
    }
}