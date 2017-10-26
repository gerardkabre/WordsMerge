//Trying OOJS Branch
//Refactor everything to object 

//Selecting form the DOM 

var doc = {
    button: document.querySelector("button"),          
    textOutput: document.querySelector(".block4"),
    textarea1: document.querySelector("#textarea1"),     
    textarea2: document.querySelector("#textarea2"),    
    textarea3: document.querySelector("#textarea3"),     // textarea3
    displayCombinations: document.querySelector("h2"),   // mostrar número posibles combinaciones
    curlBraces: document.querySelector("#CurlBraces"),   // CheckBox exact match 
    Commas: document.querySelector("#Commas"),           // Checkbox Phrase match
    Broad: document.querySelector("#Broad"),             // Checkbox broad match
    BroadM: document.querySelector("#BroadM"),           // checkbox Broad modifier 
    checkboxes: document.querySelectorAll("input"),      // ---> ALL checkboxes
    textareas: document.querySelectorAll("textarea"),    // ---> ALL textaras    
}

//Add events to textareas with a function for the live "possible combinations" counter.
addEvents(textarea1);       
addEvents(textarea2);
addEvents(textarea3);

var actions = {
    addEventsTextArea: function(area) {
        area.addEventListener("input", function(){
            var area1arr = textarea1.value.split('\n'); 
            var area2arr = textarea2.value.split('\n'); 
            var area3arr = textarea3.value.split('\n'); 
            var totalCombinations = area1arr.length * area2arr.length * area3arr.length;
            displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
        });   
    } 



    }

function addEvents(area) 

//Checkboxes |  Adding event listeners to only have one checkbox selected at a time. 

Broad.checked = true; // Checked by default when page loads

curlBraces.addEventListener("change", function() {
    if (curlBraces.checked === true) { 
        Commas.checked = false;
        Broad.checked = false;
        BroadM.checked = false;
    }});

Commas.addEventListener("change", function (){
    if (Commas.checked === true) { 
        curlBraces.checked = false;
        Broad.checked = false;
        BroadM.checked = false;
    }});

Broad.addEventListener("change", function (){
    if (Broad.checked === true) { 
        curlBraces.checked = false;
        Commas.checked = false;
        BroadM.checked = false;
    }});    

BroadM.addEventListener("change", function (){
    if (BroadM.checked === true) { 
        curlBraces.checked = false;
        Commas.checked = false;
        Broad.checked = false;
    }});      

// When Merge button clicled, get arrays with the strings in the textareas and init Word Merge. 

button.addEventListener("click", function() {
    
    var area1arr = textarea1.value.split('\n');  
    var area2arr = textarea2.value.split('\n'); 
    var area3arr =  textarea3.value.split('\n'); 
    
    wordMerge(area1arr,area2arr,area3arr); 

    function wordMerge(text1,text2,text3) {  
        textOutput.textContent = ""; //re-set result to blank. 

        for (var i = 0; i < area1arr.length; i++) {
            for (var i2 = 0; i2 < area2arr.length; i2++) {
                for (var i3 = 0; i3 < area3arr.length; i3++) {
                    if (curlBraces.checked) {
                        //inside Curl Braces
                        if (area1arr[i] === "" && area2arr[i] === "") { var p = document.createTextNode("[" + area3arr[i3] + "]");}
                        else if (area1arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode("[" + area2arr[i2] + "]");}
                        else if (area2arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode("[" + area1arr[i] + "]");}
                        else if (area1arr[i] === "" ) { var p = document.createTextNode("[" + area2arr[i2] + " " + area3arr[i3] + "]");}
                        else if (area3arr[i] === "" ) { var p = document.createTextNode("[" + area1arr[i] + " " + area2arr[i2] + "]");}
                        else { var p = document.createTextNode("[" + area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3] + "]"); } 
                        
                    } else if (Commas.checked) { 
                        //inside Commas 
                        if (area1arr[i] === "" && area2arr[i] === "") { var p = document.createTextNode('"' + area3arr[i3] + '"');}
                        else if (area1arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode('"' + area2arr[i2] + '"');}
                        else if (area2arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode('"' + area1arr[i] + '"');}                        
                        else if (area1arr[i] === "" ) { var p = document.createTextNode('"' + area2arr[i2] + " " + area3arr[i3] + '"');}
                        else if (area3arr[i] === "" ) { var p = document.createTextNode('"' + area1arr[i] + " " + area2arr[i2] + '"');}
                        else { var p = document.createTextNode('"' + area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3] + '"');} 

                    } else if (BroadM.checked) { 
                        //inside Broad Modified Match
                        if (area1arr[i] === "" && area2arr[i] === "") { var p = document.createTextNode('+' + area3arr[i3]);}
                        else if (area1arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode('+' + area2arr[i2]);}
                        else if (area2arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode('+' + area1arr[i]);}                        
                        else if (area1arr[i] === "" ) { var p = document.createTextNode('+' + area2arr[i2] + " +" + area3arr[i3]);}
                        else if (area3arr[i] === "" ) { var p = document.createTextNode('+' + area1arr[i] + " +" + area2arr[i2]);}
                        else { var p = document.createTextNode('+' + area1arr[i] + " +" + area2arr[i2] + " +" + area3arr[i3]);} 

                    }  else { 
                        //Broad
                         var p = document.createTextNode(area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3]);
                    };    
                    textOutput.appendChild(p);   //añadir lo anterior al output
                    textOutput.appendChild(document.createElement("br"));   //salto de linea despues de cada palabra. 
                }
            }
        }
    }
}); 


 
// pasar a for loop para añadir eventos de textAreas y CheckBoxes


// for loop para eventos de los checkboxes, misma funcion que los eventlisteners de abajo. 
/*
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function() {
        //si this checkbox es igual a True -> los otros checkboxes igual a false. 
       if (checkboxes[i] === true) {
           
       }
        }
    )}
*/
