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


sendData = async (data,url) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        screen.textContent = result.res; 
    } catch (error) {
        screen.textContent = error.message;
        screen.textContent = 'password length should be between 4-100'; 
    }
};


if(isAlphabeth && isNumber && isSymbol){
    
sendData(data,"http://localhost:4500/api/v1/allCharacters")    
    
}

else if (isAlphabeth && isNumber){
    sendData(data,"http://localhost:4500/api/v1/alphaNum") 
}

else if (isAlphabeth && isSymbol){
    sendData(data,"http://localhost:4500/api/v1/alphaSymbols") 
}

else if (isNumber && isSymbol){
    sendData(data,"http://localhost:4500/api/v1/numSymbols") 
}
else if  (isAlphabeth){
    sendData(data,"http://localhost:4500/api/v1/alphabeth") 
}

 else if (isNumber){
    sendData(data,"http://localhost:4500/api/v1/numbers") 
}

else if (isSymbol){
    sendData(data,"http://localhost:4500/api/v1/symbols") 
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


// let newBox = document.createElement("div");
// newBox.textContent = "copy to clipboard";
// newBox.style.position = "absolute";
// newBox.style.background = "white";
// newBox.style.border = "1px solid black";

// newBox.style.padding = "10px";
// newBox.style.top = "730px"; 
// newBox.style.left = "1200px";
// newBox.style.display = "none";


// document.body.appendChild(newBox);


// copy.addEventListener("mouseover", () => {
    
//     newBox.style.display = "block";
// });


// copy.addEventListener("mouseout", () => {
//     newBox.style.display = "none";
// });


let newBox = document.createElement("div");

newBox.textContent = "copy to clipboard";
newBox.style.position = "absolute";
newBox.style.background = "white";
newBox.style.border = "1px solid black";
newBox.style.display = "flex"

newBox.style.padding = "10px";
newBox.style.margin = "30px auto"
newBox.style.display = "none";


document.body.appendChild(newBox);


copy.addEventListener("mouseover", () => {
    
    newBox.style.display = "block";
});


copy.addEventListener("mouseout", () => {
    newBox.style.display = "none";
});
