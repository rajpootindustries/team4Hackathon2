class Binance {
  constructor() {
    this.binanceData = null;
  }

  getBinanceData() {
    var ajaxConfig = {
      dataType: 'JSON',
      url: " https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT",
      method: 'get',
      success: function (result) {
        this.binanceData = result
        console.log(result)
      }.bind(this)
    }
    $.ajax(ajaxConfig);
  }
}
var bnb = new Binance();
bnb.getBinanceData();
