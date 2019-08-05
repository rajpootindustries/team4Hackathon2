$(document).ready(initializeApp);

var exchanges = [Binance, Bitstamp, Coinbase, Bitfinex];
var exchangeArray = [];
var investment = 10000;
// setInterval(initializeExchanges, 30000);

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
   exchangeArray[i] = new exchanges[i];
   exchangeArray[i].render();

 }
//  console.log(exchangeArray);
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
  console.log("returnBTC: ", returnBTC);
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
  console.log(returnETH);
}

function arbitrage(returnCoinArr){
  console.log("returnCoinARR", returnCoinArr);
  var buyAmount = investment / returnCoinArr.exchangeMin;
  // var buyFees = buyAmount * exchangeArray[returnCoinArr.exchangeMinName].data.takerFees;
  console.log("Buy Amount", buyAmount);

  var totalBuy = buyAmount * (1-returnCoinArr.minTakerFees);

  console.log("Total buy: ", totalBuy);

  var sellAmount = totalBuy * returnCoinArr.max;

  var totalSell = sellAmount * (1-returnCoinArr.maxTakerFees);

  var profit = totalSell - investment;

  console.log("Total sell: ", totalSell);

  $('#bitcoinStart').text(returnCoinArr.exchangeMinName);
  $('#bitcoinEnd').text(returnCoinArr.exchangeMaxName);
  $('#bitcoinMin').text(returnCoinArr.exchangeMin);
  $('#bitcoinMax').text(returnCoinArr.max);
  $('#bitcoinProfit').text(profit.toFixed(2));

  if( profit > 0){
    $('#bitcoinProfit').css('color', 'green');
  } else {
    $('#bitcoinProfit').css('color', 'red');
  }

}

function displayArbitrage(returnCoinArr){
  $('#bitcoinStart').text()
}
