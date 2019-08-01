$(document).ready(initializeApp);

var exchanges = [Binance, Bitstamp, Coinbase, Bitfinex];
var exchangeArray = [];

function initializeApp(){
  initializeExchanges();
}

function initializeExchanges(){
 for(let i = 0; i < exchanges.length; i++){
   exchangeArray.push(new exchanges[i]);
 }
 console.log(exchangeArray);
}
