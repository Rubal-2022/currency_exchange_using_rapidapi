
let fromCurrency = document.getElementById("from-currency").value;
let toCurrency = document.getElementById("to-currency").value;

let apiKey = 'cdc7392162mshb4139bfd7bbeab2p170112jsn441b1bc62392';
let apiHost = 'currency-exchange.p.rapidapi.com';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': apiHost
	}
};

document.getElementById("fetch-button").addEventListener("click", function() {
    fromCurrency = document.getElementById("from-currency").value;
    toCurrency = document.getElementById("to-currency").value;
  fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}&q=1.0`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        document.getElementById("currencyResult").innerHTML = JSON.stringify(response);
    })
    .catch(err => console.error(err));
});

