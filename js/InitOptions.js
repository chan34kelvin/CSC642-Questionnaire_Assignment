

InitSelects(titleOptions, "title")
InitSelects(budgetOptions, "budget")
InitDataLists(statesOptions, "states")

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