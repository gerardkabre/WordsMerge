//------------- DOM elemenents Object -----------//
var doc = {
    button: document.querySelector("button"),          
    textOutput: document.querySelector(".block4"),
    textarea1: document.querySelector("#textarea1"),     
    textarea2: document.querySelector("#textarea2"),    
    textarea3: document.querySelector("#textarea3"),     
    displayCombinations: document.querySelector("h2"),   
    curlBraces: document.querySelector("#CurlBraces"),   
    Commas: document.querySelector("#Commas"),           
    Broad: document.querySelector("#Broad"),             
    BroadM: document.querySelector("#BroadM"),           
    checkboxes: document.querySelectorAll("input"),      
    textareas: document.querySelectorAll("textarea"),    
}
//------------- Actions, Methods Object-----------//
var actions = {
   textAreasFunction: function(area) {
            area.addEventListener("input", function(){ 
            var area1arr = doc.textarea1.value.split('\n'); 
            var area2arr = doc.textarea2.value.split('\n'); 
            var area3arr = doc.textarea3.value.split('\n'); 
            var totalCombinations = area1arr.length * area2arr.length * area3arr.length;
            doc.displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
        }    
    )},  
    checkboxFunction: function(){
        for (let i = 0; i < doc.checkboxes.length; i++){
            doc.checkboxes[i].addEventListener("change", function() {       
                if (this.checked) {
                    for (var i = 0; i < doc.checkboxes.length; i++) {          
                        if (doc.checkboxes[i] !== this) { doc.checkboxes[i].checked = false; } 
                    }  
                }  
            })  
        }     
    },
    buttonFunction: function() {
        doc.button.addEventListener("click", function() { 
        var area1arr = doc.textarea1.value.split('\n');  
        var area2arr = doc.textarea2.value.split('\n'); 
        var area3arr =  doc.textarea3.value.split('\n'); 
        
        wordMerge(area1arr,area2arr,area3arr); 
 
        function wordMerge(text1,text2,text3) {  
            doc.textOutput.textContent = ""; //re-set result to blank. 
    
            for (var i = 0; i < area1arr.length; i++) {
                for (var i2 = 0; i2 < area2arr.length; i2++) {
                    for (var i3 = 0; i3 < area3arr.length; i3++) {
                        if (doc.curlBraces.checked) {
                            //inside Curl Braces
                            if (area1arr[i] === "" && area2arr[i] === "") { var p = document.createTextNode("[" + area3arr[i3] + "]");}
                            else if (area1arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode("[" + area2arr[i2] + "]");}
                            else if (area2arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode("[" + area1arr[i] + "]");}
                            else if (area1arr[i] === "" ) { var p = document.createTextNode("[" + area2arr[i2] + " " + area3arr[i3] + "]");}
                            else if (area3arr[i] === "" ) { var p = document.createTextNode("[" + area1arr[i] + " " + area2arr[i2] + "]");}
                            else { var p = document.createTextNode("[" + area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3] + "]"); } 
                            
                        } else if (doc.Commas.checked) { 
                            //inside Commas 
                            if (area1arr[i] === "" && area2arr[i] === "") { var p = document.createTextNode('"' + area3arr[i3] + '"');}
                            else if (area1arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode('"' + area2arr[i2] + '"');}
                            else if (area2arr[i] === "" && area3arr[i] === "") { var p = document.createTextNode('"' + area1arr[i] + '"');}                        
                            else if (area1arr[i] === "" ) { var p = document.createTextNode('"' + area2arr[i2] + " " + area3arr[i3] + '"');}
                            else if (area3arr[i] === "" ) { var p = document.createTextNode('"' + area1arr[i] + " " + area2arr[i2] + '"');}
                            else { var p = document.createTextNode('"' + area1arr[i] + " " + area2arr[i2] + " " + area3arr[i3] + '"');} 
    
                        } else if (doc.BroadM.checked) { 
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
                        doc.textOutput.appendChild(p);   //añadir lo anterior al output
                        doc.textOutput.appendChild(document.createElement("br"));   //salto de linea despues de cada palabra. 
                        }
                    }
                }
            }
        });
    } 
}  
//------------- Initialization, addEventListeners -----------//
function init() { 
    doc.Broad.checked = true; 
    actions.textAreasFunction(doc.textarea1);       
    actions.textAreasFunction(doc.textarea2);
    actions.textAreasFunction(doc.textarea3);
    actions.checkboxFunction();  
    actions.buttonFunction();
};
init();