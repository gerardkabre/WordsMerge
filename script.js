var button = document.querySelector("button");            // botón de merge
var textOutput = document.querySelector(".block4");       // donde saldrá el texto
var textarea1 = document.querySelector("#textarea1");     // textarea1
var textarea2 = document.querySelector("#textarea2");     // textarea3
var textarea3 = document.querySelector("#textarea3");     // textarea3
var displayCombinations = document.querySelector("h2");   // número posibles combinaciones

//añadir eventos a textareas para el contador de combinations
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
                     //crear texto con la combinación de palabras.
                    var p = document.createTextNode(area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3]);
                     //añadir lo anterior al output
                    textOutput.appendChild(p);
                     //salto de linea despues de cada palabra. 
                    textOutput.appendChild(document.createElement("br"));       
                }
            }
        }
    }
}); 


