const authorEl = document.getElementById("author");
const quoteEl = document.getElementById("quote");
const newQuoteEl = document.getElementById("quote-gen");

async function getQuote() {
    const resp = await fetch("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en");
    const respData = await resp.json();
    
    authorEl.innerText = respData.author + ":";
    quoteEl.innerText = respData.en;

}

// Listen for button clicks
newQuoteEl.addEventListener("click", getQuote);

// Grab the initial quote.
getQuote();
