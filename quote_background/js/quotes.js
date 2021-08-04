/********** #6.0 **********/

const quotes = [
	{
		quote: "01",
		author: "me"
	},
	{
		quote: "02",
		author: "me"
	},
	{
		quote: "03",
		author: "me"
	},
	{
		quote: "04",
		author: "me"
	},
	{
		quote: "05",
		author: "me"
	},
	{
		quote: "06",
		author: "me"
	},
	{
		quote: "07",
		author: "me"
	},
	{
		quote: "08",
		author: "me"
	},
	{
		quote: "09",
		author: "me"
	},
	{
		quote: "10",
		author: "me"
	}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;