# FAQ-accordion-card
This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/screenshot%204.png)

### Links


- Live Site URL: [Add live site URL here](https://kimanthigregory.github.io/FAQ-accordion-card/)



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javascript


### What I learned
i learned that you can loop through a alist of items using forEach()

```js
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

```



### Continued development
I want to deepen my understanding of javascript which I sruggled with in this project.

### Useful resources
- google
- youtube

## Author

- Website - [gregory kimanthi](https://kimanthigregory.github.io/portfolio-website/)

