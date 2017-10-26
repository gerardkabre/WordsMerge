//Selecting from the DOM 
var button = document.querySelector("button");            // botón de merge
var textOutput = document.querySelector(".block4");       // donde saldrá el texto
var textarea1 = document.querySelector("#textarea1");     // textarea1
var textarea2 = document.querySelector("#textarea2");     // textarea3
var textarea3 = document.querySelector("#textarea3");     // textarea3
var displayCombinations = document.querySelector("h2");   // mostrar número posibles combinaciones
var curlBraces = document.querySelector("#CurlBraces");   // CheckBox exact match 
var Commas = document.querySelector("#Commas");           // Checkbox Phrase match
var Broad = document.querySelector("#Broad");             // Checkbox broad match
var BroadM = document.querySelector("#BroadM");           // checkbox Broad modifier 
var checkboxes = document.querySelectorAll("input");      // ---> ALL checkboxes
var textareas = document.querySelectorAll("textarea");    // ---> ALL textaras    

//Add events to textareas with a function for the live "possible combinations" counter.
addEvents(textarea1);       
addEvents(textarea2);
addEvents(textarea3);

function addEvents(area) {
    area.addEventListener("input", function(){
        var area1arr = textarea1.value.split('\n'); 
        var area2arr = textarea2.value.split('\n'); 
        var area3arr = textarea3.value.split('\n'); 
        var totalCombinations = area1arr.length * area2arr.length * area3arr.length;
        displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
    });   
} 

//Checkboxes |  Adding event listeners to only have one checkbox selected at a time. 

Broad.checked = true; // Checked by default when page loads

for (let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("change", function() {       
        if (this.checked) {
            for (var i = 0; i < checkboxes.length; i++) {          
                if (checkboxes[i] !== this) { checkboxes[i].checked = false; } 
             }  
        }  
    })  
} 

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
