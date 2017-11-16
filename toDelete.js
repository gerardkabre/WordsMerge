//************** DOM Elements Object **************//
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
    Broad: Broad.checked = true,
    area1arr : textarea1.value.split('\n'), 
    area2arr : textarea2.value.split('\n'), 
    area3arr : textarea3.value.split('\n'),
}
//**************** Textarea + Checkboxes Events *****************// 
for (var i = 0; i < doc.textareas.length; i++) {
    doc.textareas[i].addEventListener("input", function(){ 
        actions.textAreasArrays(); 

        var totalCombinations = doc.area1arr.length * doc.area2arr.length * doc.area3arr.length;
        doc.displayCombinations.innerHTML = "<b>" + totalCombinations + "</b>" + " possible combinations"; 
    })        
 }

//**************** App *****************// 
var actions = {
   textAreasArrays: function () {
             doc.area1arr = doc.textarea1.value.split('\n'), 
             doc.area2arr = doc.textarea2.value.split('\n'), 
             doc.area3arr = doc.textarea3.value.split('\n')
   },



    initialization: function(){                        

       doc.button.addEventListener("click", function(){
            

            (function wordMerge() { 

                //instead of 3 arrays for each word, 1 array with all the options. 

                var arr1 = [],
                    arr2 = [],
                    arr3 = [];                                                                        
                for (var i = 0; i < doc.area1arr.length; i++) {
                    for (var i2 = 0; i2 < doc.area2arr.length; i2++) {
                        for (var i3 = 0; i3 < doc.area3arr.length; i3++) {   
                            arr1.push(doc.area1arr[i])
                            arr2.push(doc.area2arr[i2])
                            arr3.push(doc.area3arr[i3]) 
                            
                            arrayMerged.push(doc.area1arr[i] + doc.area2arr)


        })
    })
} )
                } } }
                for (var i = 0; i < arr1.length; i++) {
                    arr2[0] === "" && arr3[0] === "" ? AddStrings(arr1[i]) :      // If there's only text in the 1st area
                    arr1[0] === "" && arr3[0] === "" ? AddStrings(arr2[i]) :      // If there's only text in the 2nd area
                    arr1[0] === "" && arr2[0] === "" ? AddStrings(arr3[i]) :      // ...
                    arr1[0] === "" ? AddStrings(arr2[i], arr3[i]) :               
                    arr2[0] === "" ? AddStrings(arr1[i], arr3[i]) :               
                    arr3[0] === "" ? AddStrings(arr1[i], arr2[i]) :               
                    AddStrings(arr1[i], arr2[i], arr3[i]);                        
                }
                function AddStrings(firstCol, secondCol, thirdCol){
                    if(secondCol === undefined && thirdCol === undefined) {                                      // 1 textarea with content
                            Broad.checked ? textAppend( `${firstCol}` ) : 
                            BroadM.checked ? textAppend( `+${firstCol}` ) :
                            Commas.checked ? textAppend( `"${firstCol}"` ) :   
                            Exact.checked ? textAppend( `[${firstCol}]` ) : Broad.checked = true; 
                    } else if(thirdCol === undefined) {                                                           //  2 textareas with content
                            Broad.checked ? textAppend( `${firstCol} ${secondCol}` ) : 
                            BroadM.checked ? textAppend( `+${firstCol} +${secondCol}` ) :
                            Commas.checked ? textAppend( `"${firstCol} ${secondCol}"` ) :   
                            Exact.checked ? textAppend( `[${firstCol} ${secondCol}]` ) : Broad.checked = true;
                    }  else {                                                                                     // 3 textareas with content
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