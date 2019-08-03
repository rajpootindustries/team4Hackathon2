$(document).ready(initializeApp);

var exchanges = [Binance, Bitstamp, Coinbase, Bitfinex];
var exchangeArray = [];
var investment = 1000;

function initializeApp(){
  initializeExchanges();
  setTimeout(function(){
    for (let i = 0; i < exchangeArray.length; i++) {
      exchangeArray[i].render();
    }
  }, 2000)
  setTimeout(getBTC, 5000);
  setTimeout(getETH, 3000);
}

function initializeExchanges(){
 for(let i = 0; i < exchanges.length; i++){
   exchangeArray.push(new exchanges[i]);
 }
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
      returnBTC.minTakerFees = exchangeArray[exchanges].data.takerFees;
    }
    if (parseInt(exchangeArray[exchanges].data.spotBTC) < min ){
      min = parseInt(exchangeArray[exchanges].data.spotBTC)
      returnBTC.exchangeMin = parseInt(exchangeArray[exchanges].data.spotBTC);
      returnBTC.exchangeMinName =exchangeArray[exchanges].data.exchangeName;
      returnBTC.maxTakerFees = exchangeArray[exchanges].data.takerFees;

    }
  }
  arbitrage(returnBTC);
  return returnBTC;
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
}

function arbitrage(returnCoinArr){
  var buyAmount = investment / returnCoinArr.exchangeMin;
  var totalBuy = buyAmount * (1-returnCoinArr.minTakerFees);
  var sellAmount = totalBuy * returnCoinArr.max;
  var totalSell = sellAmount * (1-returnCoinArr.maxTakerFees);

  if(totalSell > 0){
    $('.row').append($('<div>').text(': YES ' + totalSell));
  } else {
    $('.row').append($('<div>').text(': NO'));
  }
}
