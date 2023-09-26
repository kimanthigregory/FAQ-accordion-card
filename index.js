// javascript
var arrowIcon = document.querySelectorAll(".arrow-icon");
var currentParagraph = null; 
var currentHeader = null;
arrowIcon.forEach(function(icon){
    
    icon.addEventListener("click",function (){
        var container =this.closest(".queries-container");
        var paragraph= container.querySelector(".queries-paragraph p");
        var paragraphHeader = container.querySelector(".queries-paragraph h2");
        if(currentParagraph !==null ){
            currentParagraph.style.display= "none";
            currentHeader.style.fontWeight = "400";
        }
       
        if(currentParagraph !==paragraph) {
            paragraph.style.display = "block";
            paragraphHeader.style.fontWeight = "700";
            currentParagraph= paragraph;
            currentHeader = paragraphHeader; 
        }
        else {
            paragraphHeader.style.fontWeight = "400";
            currentParagraph = null;
            currentHeader = null;
            
        }
       
        this.classList.toggle("add-rotation");
        
    })
})

   
