const load = document.querySelector(".load");
const form = document.forms["requestCont"]

load.addEventListener ('click',(e) =>{
    e.preventDefault()

    let box = form.querySelectorAll("#case")
    let value = form.querySelector(".input").value;
    let screen = form.querySelector(".display");

    let isAlphabeth = false;
    let isNumber = false;
    let isSymbol = false

    for(const checkbox in box){
        if (box[checkbox].checked && box[checkbox].value == "alphabeths"){
                isAlphabeth = true;   
    }
    if (box[checkbox].checked && box[checkbox].value == "numbers"){
        isNumber = true;
    }
     if(box[checkbox].checked && box[checkbox].value == "symbol"){
        isSymbol = true;
    }

}

if(isAlphabeth && isNumber && isSymbol){
    alert("all characters")
}

else if (isAlphabeth && isNumber){
    alert("both numlet")
}

else if (isAlphabeth && isSymbol){
    alert("both letsym")
}

else if (isNumber && isSymbol){
    alert("numsym")
}
else if  (isAlphabeth){
    alert("it is alphabeth")
}

 else if (isNumber){
    alert("it is a number")
}


    screen.textContent = value;
    console.log(value)
})


