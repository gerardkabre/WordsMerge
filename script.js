var button = document.querySelector("button");            // botón de merge
var textOutput = document.querySelector(".block4");       // donde saldrá el texto
var textarea1 = document.querySelector("#textarea1");     // textarea1
var textarea2 = document.querySelector("#textarea2");     // textarea3
var textarea3 = document.querySelector("#textarea3");     // textarea3
var displayCombinations = document.querySelector("h2");   // mostrar número posibles combinaciones
var curlBraces = document.querySelector("#CurlBraces");   // CheckBox []
var Commas = document.querySelector("#Commas");           // Checkbox " "
var Broad = document.querySelector("#Broad");   // 
var BroadM = document.querySelector("#BroadM");           // 
var checkboxes = document.querySelectorAll("input"); 
var textareas = document.querySelectorAll("textarea");

/* ---------------------------------------------------------------

Añadir eventos a textareas para el contador de combinaciones posibles con una funcion:  

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
----------------------------------------------------------------------*/ 

/* --------------------------------------------------------------- */

// for loop para ventos de las textareas, misma función que la funcion de arriba. 
for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener("input", function(){
        var area1arr = textareas[i].value.split('\n'); 
        var area2arr = textareas[i].value.split('\n'); 
        var area3arr = textareas[i].value.split('\n'); 
        var totalCombinations = area1arr.length * area2arr.length * area3arr.length;
        displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
    });   
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- 

// for loop para eventos de los checkboxes, misma funcion que los eventlisteners de abajo. 

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function() {
        //si this checkbox es igual a True -> los otros checkboxes igual a false. 
       
        }
    })
}

 --------------------------------------------------------------- */


//Checkboxes, Si una check la otra uncheck. 
curlBraces.addEventListener("change", function() {
    if (curlBraces.checked === true) { 
        Commas.checked = false;
        Broad.checked = false;
        BoradM.checked = false;
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

//Funcion Merge al pulsar el botón

button.addEventListener("click", function() {
    //obtener arrays con las palabras de las textareas
    var area1arr = textarea1.value.split('\n');  
    var area2arr = textarea2.value.split('\n'); 
    var area3arr =  textarea3.value.split('\n'); 

    //funcion merge
    wordMerge(area1arr,area2arr,area3arr); 

    function wordMerge(text1,text2,text3) {  
        textOutput.textContent = ""; //re-set result to blank. 

        for (var i = 0; i < area1arr.length; i++) {
            for (var i2 = 0; i2 < area2arr.length; i2++) {
                for (var i3 = 0; i3 < area3arr.length; i3++) {
                    //Check if Wrapper Selected
                    if (curlBraces.checked) {
                        var p = document.createTextNode("[" + area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3] + "]");
                    } else if (Commas.checked) { 
                        var p = document.createTextNode('"' + area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3] + '"');
                    }  else { 
                         var p = document.createTextNode(area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3]);
                    };    
                    textOutput.appendChild(p);   //añadir lo anterior al output
                    textOutput.appendChild(document.createElement("br"));   //salto de linea despues de cada palabra. 
                }
            }
        }
    }
}); 


 
//añadir checkboxes events, con un for loop y no repetir 4 ceces |||||||||||||||||||||
//solo el ultimo checkbox se marca de momento                    ||||||||||||||
//espacio al no poner palabra textarea 1 y usar [ o ""           |||||||||||||||

