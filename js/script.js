/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//use strict mode to make code less error-prone
"use strict";


/*** 
 * `quotes` array 
***/
//Created empty quotes array to store Quotes(object)
let quotes = [];




//Adding quotes
quotes.push(
  {quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
  source: 'Patrick McKenzie',
  citation: 'Twitter',
  year: '2016',
  tags: 'Technology'}
);

quotes.push(
  {quote: "Ignorance is the curse of God; knowledge is the wing wherewith we fly to heaven.",
  source: "William Shakespeare",
  citation: "Henri VI, Part 2",
  year: "1591"}
);

quotes.push(
  {quote: "You cannot shake hands with a clenched fist.",
  source: "Indira Gandhi",
  tags: "Peace"
  }
);

quotes.push(
  {quote: "Learning never exhausts the mind.",
  source: "Leonardo da Vinci",
  }
)

quotes.push(
  {quote: "The supreme art of war is to subdue the enemy without fighting.",
  source: "Sun Tzu",
  }
)


quotes.push(
  {quote: "It is during our darkest moments that we must focus to see the light.",
  source: "Aristotle",
  tags: "Motivational"
  }
)

quotes.push(
  {quote: "It is during our darkest moments that we must focus to see the light.",
  source: "Aristotle",
  }
)

quotes.push(
  {quote: "Diplomacy is a continuation of war by other means.",
  source: "Zhou En Lai",
  year: "1898-1976"
  }
)
quotes.push(
  {quote: "War is a cowardly escape from the problems of peace.",
  source: "Thomas Mann",
  year: "1875-1955",
  tags: "War"
  }
)
quotes.push(
  {quote: "Change has a considerable psychological impact on the human mind. To the fearful it is threatening because it means that things may get worse. To the hopeful it is encouraging because things may get better. To the confident it is inspiring because the challenge exists to make things better.",
  source: "King Whitney Jr.",
  tags: "Change"
  }
)

//Random color function
const getRandomColor  = () => {
  let red = Math.random() * 256;
  let blue = Math.random() * 256;
  let green = Math.random() * 256;
  
  let color = `rgb(${red}, ${blue}, ${green})`
  return color;
  
}



/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  //random index of quotes array
 let index = Math.floor( Math.random() * quotes.length);

 return quotes[index];
};


let interval = setInterval( () => {
  printQuote()
}, 20000) 


/***
 * `printQuote` function
***/

const printQuote = () => {
  //Calling getRandomQuote() function
  let selectedQuote = getRandomQuote();

  //declaring html variable and adding the required fileds
  let html =  
  `
  <p class="quote">${selectedQuote['quote']}</p>
  <p class="source">${selectedQuote['source']}
  `

// If object doesnt have citation and quote
  if (!selectedQuote.citation && !selectedQuote.year) {

  } 


//If object doesnt have citation but has a year
  else if (!selectedQuote.citation && selectedQuote.year){
    html += 
    `
      <span class="year">${selectedQuote['year']}</span></p>
    ` 
  } 

  // If object doesn't have year but has a citation
  else if (!selectedQuote.year && selectedQuote.citation) {
    html += 
    `
      <span class="citation">${selectedQuote['citation']}</span></p>
    `
  }


  //If object has all the required values, [quote,source,citation,year]
  else {
     html += 
      `
        <span class="citation">${selectedQuote['citation']}</span><span class="year">${selectedQuote['year']}</span></p>
      `
  }
  let color = getRandomColor();
  console.log(color)
  document.querySelector('body').style.backgroundColor = getRandomColor();
 
  document.querySelector('div.quote-box').innerHTML = html

  // clearing interval if there is any ongoing intervals, if not there will be multiple intervals being set up everytime changeQuote button is click
  clearInterval(interval);

  //setting new interval when the button is clicked 
  interval = setInterval( () => {
    printQuote()
  }, 20000) 
  

}










/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);