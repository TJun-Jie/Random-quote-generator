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
  year: '2016'}
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
  }
);

quotes.push(
  {quote: "Learning never exhausts the mind.",
  source: "Leonardo da Vinci",
  }
)







/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  //random index of quotes array
 let index = Math.floor( Math.random() * quotes.length);

 return quotes[index];
};


/***
 * `printQuote` function
***/

const printQuote = () => {
  //Calling getRandomQuote() function
  let selectedQuote = getRandomQuote();

  //declaring html variable
  let html = ``;


  //If object doesn't have citation and year
  if (!selectedQuote.citation && !selectedQuote.year) {
    html = 
      `
      <p class="quote">${selectedQuote['quote']}</p>
      <p class="source">${selectedQuote['source']}</p>
      `
  // If object doesnt have citation
  } else if (!selectedQuote.citation) {
    html = 
    `
    <p class="quote">${selectedQuote['quote']}</p>
    <p class="source">${selectedQuote['source']}<span class="year">${selectedQuote['year']}</span></p>
    ` 

  // If object doesn't have year
  } else if (!selectedQuote.year) {
    html = 
    `
    <p class="quote">${selectedQuote['quote']}</p>
    <p class="source">${selectedQuote['source']}<span class="citation">${selectedQuote['citation']}</span></p>
    `
  //If object has all the required values, [quote,source,citation,year]
  } else {
     html = 
      `
      <p class="quote">${selectedQuote['quote']}</p>
      <p class="source">${selectedQuote['source']}<span class="citation">${selectedQuote['citation']}</span><span class="year">${selectedQuote['year']}</span></p>
      `
  }
 
  document.querySelector('div.quote-box').innerHTML = html
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);