$(document).ready(initializeApp);

var exchanges = [Binance, Bitstamp, Coinbase, Bitfinex];
var exchangeArray = [];

function initializeApp(){
  initializeExchanges();
  setTimeout(function(){
    for (let i = 0; i < exchangeArray.length; i++) {
      exchangeArray[i].render();
    }
  }, 2000)
  setTimeout(getBTC, 3000);
  setTimeout(getETH, 3000);
}

function initializeExchanges(){
 for(let i = 0; i < exchanges.length; i++){
   exchangeArray.push(new exchanges[i]);
 }
 console.log(exchangeArray);
}

function getBTC (){
  var returnBTC = {}
  var max = 0;
  var min = 10000000;
  for (var exchanges in exchangeArray){
    if (parseInt(exchangeArray[exchanges].data.spotBTC) > max){
      max = parseInt(exchangeArray[exchanges].data.spotBTC);
      returnBTC.max = parseInt(exchangeArray[exchanges].data.spotBTC);
      returnBTC.exchangeMaxName = exchangeArray[exchanges].data.exchangeName;
    }
    if (parseInt(exchangeArray[exchanges].data.spotBTC) < min ){
      min = parseInt(exchangeArray[exchanges].data.spotBTC)
      returnBTC.exchangeMin = parseInt(exchangeArray[exchanges].data.spotBTC);
      returnBTC.exchangeMinName =exchangeArray[exchanges].data.exchangeName;
    }
  }
  console.log(returnBTC);
}

function getETH() {
  var returnETH = {}
  var max = 0;
  var min = 10000000;
  for (var exchanges in exchangeArray) {
    if (parseInt(exchangeArray[exchanges].data.spotETH) > max) {
      max = parseInt(exchangeArray[exchanges].data.spotETH);
      returnETH.max = parseInt(exchangeArray[exchanges].data.spotETH);
      returnETH.exchangeMaxName = exchangeArray[exchanges].data.exchangeName;
    }
    if (parseInt(exchangeArray[exchanges].data.spotETH) < min) {
      min = parseInt(exchangeArray[exchanges].data.spotETH)
      returnETH.exchangeMin = parseInt(exchangeArray[exchanges].data.spotETH);
      returnETH.exchangeMinName = exchangeArray[exchanges].data.exchangeName;
    }
  }
  console.log(returnETH);
}
