// function to display content
function displayContent(content){
    result.value+=content
}

//clear
function displayClear(){
    result.value = ""
}
//output
function displayresult(){
    result.value =eval(result.value)
}
//backspace
function removeLastdigit(){
    result.value =result.value.slice(0,-1)
}