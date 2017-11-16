(function(){
        var app = {
            init: function () { 
                this.domElements(); 
                this.addEventListeners();  
                this.basicConfig();
            },
            domElements: function() {
               this.broadMatch = document.querySelector("#Broad"),  
               this.exactMatch = document.querySelector("#Exact"),
               this.button = document.querySelector("button"),
               this.broadMatchModifier = document.querySelector("#BroadM"),  
               this.phraseMatch = document.querySelector("#Commas"),        
               this.textOutput = document.querySelector(".block4"),
               this.checkBoxes = document.querySelectorAll("input"),   
               this.textArea1 = document.querySelector("#textarea1"),     
               this.textArea2 = document.querySelector("#textarea2"),    
               this.textArea3 = document.querySelector("#textarea3"),  
               this.arrTextAreas = document.querySelectorAll("textarea"),   
               this.displayCombinations = document.querySelector("h2") 
            },
            addEventListeners: function() {
                this.checkBoxes.forEach((checkbox) => {
                    checkbox.addEventListener("change", this.uncheckOtherBoxes.bind(this));   
                });              
                this.arrTextAreas.forEach((textarea) => {
                    textarea.addEventListener("input", this.combinationsCounter.bind(this));   
                });
                this.button.addEventListener("click", this.mergeWords.bind(this)); 
            },
            // When 1 checkbox clicked, uncheck the others. 
            uncheckOtherBoxes: function() {
                this.checkBoxes.forEach((checkbox) => { 
                     checkbox !== event.target ? checkbox.checked = false : true;  
                });
            },
            // Counter of all the combinations possible
            combinationsCounter: function() {
                this.arrTextArea1 = this.textArea1.value.split('\n'); 
                this.arrTextArea2 = this.textArea2.value.split('\n'); 
                this.arrTextArea3 = this.textArea3.value.split('\n'); 
                this.totalCombinations = this.arrTextArea1.length * this.arrTextArea2.length * this.arrTextArea3.length; 
                this.displayCombinations.innerHTML = "<b>" + this.totalCombinations + "</b>" + " possible combinations"; //MOVE it to Render, or Dont, Speed and this thigns.
            },
            // Create a new arraw with combined strings from the 3 arrays 
            mergeWords: function() {
                this.mergedArr = []; 
                this.arrTextArea1.map( x => {
                    this.arrTextArea2.map( y => {
                        this.arrTextArea3.map( z => {
                            this.mergedArr.push(`${x} ${y} ${z}`); 
                        })
                    })
                })
                this.eliminateWhiteSpace(); 
                this.optionChecked();
                this.render()
            },
            // Eliminate whitespaces created when one of the text areas is empty
            eliminateWhiteSpace: function() {
                this.mergedArr.forEach((element, index, array) => {
                    array[index] = element.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s{2}/g, " "); 
                 }); 
            },
            // What to render depending on the checkbox checked by the user. 
            optionChecked: function() { 
                if(this.exactMatch.checked) {
                    this.mergedArr.forEach((element, index, array) => {
                        array[index] = `[${element}]`; 
                    }); 
                } else if (this.phraseMatch.checked) {
                    this.mergedArr.forEach((element, index, array) => {
                        array[index] = `"${element}"`; 
                    }); 
                } else if (this.broadMatchModifier.checked) {
                    this.mergedArr.forEach((element, index, array) => {
                        array[index] = element.replace(/^/g,'+').replace(/\s/g, " +");
                    }); 
                }
            },
            // Default checkbox checked the Broad Match Type. 
            basicConfig: function(){
                this.broadMatch.checked = true; 
            },
            // first Re-set output to blank and then Create elements to the DOM.
            render: function() {
                    this.textOutput.textContent = ""; 
                    this.mergedArr.forEach(function(x) {   
                        this.p = document.createElement('p');
                        this.p.textContent = x;  
                        this.textOutput.appendChild(this.p); 
                    }.bind(this))      
            },
        }

        app.init(); 

    })(); 
    

    
    