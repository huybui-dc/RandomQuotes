/******************************************
*****************************************/

var lastIndex = 0; // Used to ensure that random number generated isn't the same as the last one

class Quote {
    constructor(quote, source) {
        this.quote = quote;
        this.author = source;
    }
    get quote() {
        return this.quote;
    }
    get source() {
        return this.source;
    }
}

/*** 
 * `quotes` array 
***/

var quotes = [];
quotes.push({
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016
});
quotes.push({
    quote: "At some point, we all have to choose, between what the world wants you to be, and who you are.",
    source: "Natasha Romanoff",
    citation: "Black Widow",
    year: 2021
});
quotes.push({
    quote: "Part of the journey is the end.",
    source: "Tony Stark",
    citation: "Avengers: Endgame",
    year: 2019
});
quotes.push({
    quote: "Comparison is the thief of joy.",
    source: "Theodore Roosevelt"
});
quotes.push({
    quote: "The best thing about the future is that it comes one day at a time.",
    source: "Abraham Lincoln"
});
quotes.push({
    quote: "A bank is a place that will lend you money if you can prove that you don’t need it.",
    source: "Bob Hope"
});
quotes.push({
    quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    source: "Bill Gates"
});
quotes.push({
    quote: "Your time is limited, so don't waste it living someone else's life.",
    source: "Steve Jobs"
});
quotes.push({
    quote: "Innovation distinguishes between a leader and a follower.",
    source: "Steve Jobs"
});
// quotes.push(new Quote('Comparison is the thief of joy.', 'Theodore Roosevelt'));

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber == lastIndex);
    return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
    const randomQuote = getRandomQuote();
    var html = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
    `;

    // if (randomQuote.citation != null)
    //     html += `<span class="citation">${randomQuote.citation}</span>`
    // if (randomQuote.year != null)
    //     html += `<span class="year">${randomQuote.year}</span>`

    html += (randomQuote.citation == null) ? `` : `<span class="citation">${randomQuote.citation}</span>`;
    html += (randomQuote.year == null) ? `` : `<span class="year">${randomQuote.year}</span>`;
    html += `</p>`;

    document.getElementById('quote-box').innerHTML = html;

    // return html;
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);

printQuote(); // Displays random quote on page load