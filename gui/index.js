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
const data = {length : value}
if(isAlphabeth && isNumber && isSymbol){
    
    sendData = async (data) => {
        try {
            const response = await fetch("http://localhost:4500/api/v1/allCharacters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
    
            const result = await response.json();
            screen.textContent = result.res; 
        } catch (error) {
            screen.textContent = error.res;
            // screen.textContent = 'Error occurred. Please try again.'; 
        }
    };
sendData(data)    
    
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


  
})


var copy = document.querySelector(".copy");
copy.addEventListener("click", (e) => {
    e.preventDefault()

  let copyText = document.querySelector(".display");

  
  let range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
  
  if(copyText.innerHTML != ""){

  try {
    
    document.execCommand('copy');
    
    alert("Copied the text: " + copyText.innerText);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }

  
  window.getSelection().removeAllRanges();

}


});

 
