//||************** DOM Elements Object **************||//
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
    textareas: document.querySelectorAll("textarea"),
    area1arr : textarea1.value.split('\n'), 
    area2arr : textarea2.value.split('\n'), 
    area3arr : textarea3.value.split('\n')
}
//||**************** Actions Object *****************||// 
var actions = {
   textAreasArrays: function () {
        area1arr = doc.textarea1.value.split('\n'), 
        area2arr = textarea2.value.split('\n'), 
        area3arr = textarea3.value.split('\n')
   }, 
   textAreasEvents: function(area) {
            area.addEventListener("input", function(){ 
                actions.textAreasArrays(); 
                var totalCombinations = area1arr.length * area2arr.length * area3arr.length;
                doc.displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
        }
    )},  
    initialization: function(){
        
        for (let i = 0; i < doc.checkboxes.length; i++){                          // Add Checkboxes Events
            doc.checkboxes[i].addEventListener("change", function() {             // If 1 checkbox checked, uncheck the other checkboxes   
                for (var i = 0; i < doc.checkboxes.length; i++) {          
                    doc.checkboxes[i] !== this ? doc.checkboxes[i].checked = false : console.log("");
                 }
             })  
         }  
        doc.Broad.checked = true;                                                 // Set Broad Match Checked by Default 
       
        doc.button.addEventListener("click", function(){
           
            doc.textOutput.textContent = "";                                       // Re-set Output to Blank
            (function wordMerge() { 
                var arr1 = [],
                    arr2 = [],
                    arr3 = [];   
                                                                     
                for (var i = 0; i < area1arr.length; i++) {
                    for (var i2 = 0; i2 < area2arr.length; i2++) {
                        for (var i3 = 0; i3 < area3arr.length; i3++) {   
                            arr1.push(area1arr[i])
                            arr2.push(area2arr[i2])
                            arr3.push(area3arr[i3])       
                } } }
                for (var i = 0; i < arr1.length; i++) {
                    arr2[0] === "" && arr3[0] === "" ? AddStrings(arr1[i]) :      // If there's only text in the 1st area
                    arr1[0] === "" && arr3[0] === "" ? AddStrings(arr2[i]) :      // If there's only text in the 2nd area
                    arr1[0] === "" && arr2[0] === "" ? AddStrings(arr3[i]) :      // If there's only text in the 3rd area
                    arr1[0] === "" ? AddStrings(arr2[i], arr3[i]) :               // If there's only text in the 2nd and 3rd area
                    arr2[0] === "" ? AddStrings(arr1[i], arr3[i]) :               // If there's only text in the 1st and 3rd area  
                    arr3[0] === "" ? AddStrings(arr1[i], arr2[i]) :               // If there's only text in the 1st and 2nd area  
                    AddStrings(arr1[i], arr2[i], arr3[i]);                        // If there's text in all areas
                }
                function AddStrings(firstCol, secondCol, thirdCol){
                    if(secondCol === undefined && thirdCol === undefined) {
                            Broad.checked ? textAppend( `${firstCol}` ) : 
                            BroadM.checked ? textAppend( `+${firstCol}` ) :
                            Commas.checked ? textAppend( `"${firstCol}"` ) :   
                            Exact.checked ? textAppend( `[${firstCol}]` ) : Broad.checked = true; 
                    } else if(thirdCol === undefined) {
                            Broad.checked ? textAppend( `${firstCol} ${secondCol}` ) : 
                            BroadM.checked ? textAppend( `+${firstCol} +${secondCol}` ) :
                            Commas.checked ? textAppend( `"${firstCol} ${secondCol}"` ) :   
                            Exact.checked ? textAppend( `[${firstCol} ${secondCol}]` ) : Broad.checked = true;
                    }  else {
                            Broad.checked ? textAppend( `${firstCol} ${secondCol} ${thirdCol}` ) : 
                            BroadM.checked ? textAppend( `+${firstCol} +${secondCol} +${thirdCol}` ) :
                            Commas.checked ? textAppend( `"${firstCol} ${secondCol} ${thirdCol}"` ) :   
                            Exact.checked ? textAppend( `[${firstCol} ${secondCol} ${thirdCol}]` ) : Broad.checked = true;
                    }
                }
                function textAppend(raw){
                    var p = document.createTextNode(raw); 
                    doc.textOutput.appendChild(p);
                    doc.textOutput.appendChild(document.createElement("br"));
                }
            }())
        })    
    }
}     
actions.initialization()
actions.textAreasEvents(doc.textarea1);                                   // Add Events to textareas   
actions.textAreasEvents(doc.textarea2);
actions.textAreasEvents(doc.textarea3);
