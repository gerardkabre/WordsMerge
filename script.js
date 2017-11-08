//------------- DOM elemenents Object -----------//
var doc = {
    button: document.querySelector("button"),          
    textOutput: document.querySelector(".block4"),
    textarea1: document.querySelector("#textarea1"),     
    textarea2: document.querySelector("#textarea2"),    
    textarea3: document.querySelector("#textarea3"),     
    displayCombinations: document.querySelector("h2"),   
    Exact: document.querySelector("#Exact"),   
    Commas: document.querySelector("#Commas"),           
    Broad: document.querySelector("#Broad"),             
    BroadM: document.querySelector("#BroadM"),           
    checkboxes: document.querySelectorAll("input"),      
    textareas: document.querySelectorAll("textarea")
}
//------------- Actions, Methods Object-----------//
var actions = {
   textAreasEvents: function(area) {
            area.addEventListener("input", function(){ 
            var area1arr = doc.textarea1.value.split('\n'); 
            var area2arr = doc.textarea2.value.split('\n'); 
            var area3arr = doc.textarea3.value.split('\n'); 
            var totalCombinations = area1arr.length * area2arr.length * area3arr.length;
            doc.displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
        }    
    )},  
    checkboxEvents: function(){
        for (let i = 0; i < doc.checkboxes.length; i++){
            doc.checkboxes[i].addEventListener("change", function() {       
                    for (var i = 0; i < doc.checkboxes.length; i++) {          
                        if (doc.checkboxes[i] !== this) { 
                            doc.checkboxes[i].checked = false; 
                        } 
                    }  
            })  
        }     
    },
    buttonFunction: function() {
        doc.button.addEventListener("click", function() { 
        
        //Create 3 Array with the content of the textarea, separated by a space.
        var area1arr = doc.textarea1.value.split('\n');  
        var area2arr = doc.textarea2.value.split('\n'); 
        var area3arr =  doc.textarea3.value.split('\n'); 

        var arr1 = []; 
        var arr2 = []; 
        var arr3 = []; 
        
        //Create 3 arrays, 1 for each area, with each possible combination of word merging between them. 
     
        function wordMerge(text1,text2,text3) {  
            doc.textOutput.textContent = ""; //re-set result to blank. 
            for (var i = 0; i < area1arr.length; i++) {
                for (var i2 = 0; i2 < area2arr.length; i2++) {
                    for (var i3 = 0; i3 < area3arr.length; i3++) {    
                        arr1.push(area1arr[i])
                        arr2.push(area2arr[i2])
                        arr3.push(area3arr[i3])          
                    }               
                }
            }
        }
        wordMerge(area1arr,area2arr,area3arr);   
        
        for (var i = 0; i < arr1.length; i++) {
            arr2[0] === "" && arr3[0] === "" ? AddStrings(arr1[i]) :      //only text in first area
            arr1[0] === "" && arr3[0] === "" ? AddStrings(arr2[i]) :      //only text in second area
            arr1[0] === "" && arr2[0] === "" ? AddStrings(arr3[i]) :      //only text in third area
            arr1[0] === "" ? AddStrings(arr2[i], arr3[i]) :
            arr2[0] === "" ? AddStrings(arr1[i], arr3[i]) :
            arr3[0] === "" ? AddStrings(arr1[i], arr2[i]) : 
            AddStrings(arr1[i], arr2[i], arr3[i]);    
                        
            }
        
       
        function textAppend(raw){
            var p = document.createTextNode(raw); 
            doc.textOutput.appendChild(p);
            doc.textOutput.appendChild(document.createElement("br"));
        }
        function AddStrings(firstCol, secondCol, thirdCol){
            if(secondCol === undefined && thirdCol === undefined) {
                    Broad.checked ? textAppend( `${firstCol}` ) : 
                    BroadM.checked ? textAppend( `+${firstCol}` ) :
                    Commas.checked ? textAppend( `"${firstCol}"` ) :   
                    Exact.checked ? textAppend( `[${firstCol}]` ) : 
                    console.log("ERROR: no match type checked"); 
            } 
            else if(thirdCol === undefined) {
                    Broad.checked ? textAppend( `${firstCol} ${secondCol}` ) : 
                    BroadM.checked ? textAppend( `+${firstCol} +${secondCol}` ) :
                    Commas.checked ? textAppend( `"${firstCol} ${secondCol}"` ) :   
                    Exact.checked ? textAppend( `[${firstCol} ${secondCol}]` ) : 
                    console.log("ERROR: no match type checked"); 
                    
            }  else {
                    Broad.checked ? textAppend( `${firstCol} ${secondCol} ${thirdCol}` ) : 
                    BroadM.checked ? textAppend( `+${firstCol} +${secondCol} +${thirdCol}` ) :
                    Commas.checked ? textAppend( `"${firstCol} ${secondCol} ${thirdCol}"` ) :   
                    Exact.checked ? textAppend( `[${firstCol} ${secondCol} ${thirdCol}]` ) : 
                    console.log("ERROR: no match type checked");        
            }
        }

        }
    
) 
    }}

//------------- Initialization, addEventListeners -----------//
function init() { 
    doc.Broad.checked = true; 
    actions.textAreasEvents(doc.textarea1);       
    actions.textAreasEvents(doc.textarea2);
    actions.textAreasEvents(doc.textarea3);
    actions.checkboxEvents();  
    actions.buttonFunction();
};
init();