function changeColor(){
    const element = document.getElementById("colorBox");
    if(element.style.backgroundColor === "red"){
        element.style.backgroundColor = "green";
    } else {
        element.style.backgroundColor = "red";
    }
}
