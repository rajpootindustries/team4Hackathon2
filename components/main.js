$(document).ready(initializeApp);

var exchanges = [Binance, Bitstamp, Coinbase, Bitfinex];
var exchangeArray = [];
var investment = 10000;

function initializeApp(){

  initializeExchanges();

  setTimeout(function(){
    for (let i = 0; i < exchangeArray.length; i++) {
      // exchangeArray[i].render();
    }
  }, 2000)
  setTimeout(getBTC, 5000);
  setTimeout(getETH, 3000);
}

function initializeExchanges(){
 for(let i = 0; i < exchanges.length; i++){
   exchangeArray[i] = new exchanges[i];
  //  exchangeArray[i].render();
 }
}

function getBTC (){
  var returnBTC = {}
  var max = 0;
  var min = 10000000;

  for (var exchanges in exchangeArray){

    var exchange = exchangeArray[exchanges].data;
    var { spotBTC, exchangeName, takerFees } = exchange;

    if (parseInt(exchangeArray[exchanges].data.spotBTC) > max){
      max = parseInt(exchange.spotBTC);
      returnBTC.max = parseInt(exchange.spotBTC);
      returnBTC.exchangeMaxName = exchange.exchangeName;
      returnBTC.minTakerFees = exchange.takerFees;
    }

    if (parseInt(exchangeArray[exchanges].data.spotBTC) < min ){
      min = parseInt(exchange.spotBTC)
      returnBTC.exchangeMin = parseInt(exchange.spotBTC);
      returnBTC.exchangeMinName = exchange.exchangeName;
      returnBTC.maxTakerFees = exchange.takerFees;
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
  var profit = totalSell - investment;

  $('#bitcoinStart').text(returnCoinArr.exchangeMinName);
  $('#bitcoinEnd').text(returnCoinArr.exchangeMaxName);
  $('#bitcoinMin').text(returnCoinArr.exchangeMin);
  $('#bitcoinMax').text(returnCoinArr.max);
  $('#bitcoinProfit').text(profit.toFixed(2));

  let color = (profit > 0) ? 'blue' : 'red';
  $('#bitcoinProfit').css('color', color);
}

function displayArbitrage(returnCoinArr){
  $('#bitcoinStart').text()
}
