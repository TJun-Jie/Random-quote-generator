/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Created empty quotes array to store Quotes(object)
quotes = [];

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






/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);