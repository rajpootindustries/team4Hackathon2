class Binance extends Exchange{
  constructor() {
    super();
    this.binanceData = null;
    this.symbols = ['BTCUSDT', 'ETHUSDT', 'LTCUSDT'];
    this.lastPrices = {};
    this.data.exchangeName = "binance";
  }

  getBinanceData() {
    for (let i = 0; i < this.symbols.length; i++){
      const currentSymbol = this.symbols[i];
      var ajaxConfig = {
        dataType: 'JSON',
        url: "http://localhost/team4hackathon2/api-proxy-binance.php?symbol=" + currentSymbol,
        method: 'get',
        success: function (result) {
          this.binanceData = result;
          this.lastPrices[currentSymbol] = this.binanceData.lastPrice;
          this.lastPrices[currentSymbol] = parseFloat(this.lastPrices[currentSymbol]).toFixed(2);
          console.log(this.lastPrices);
        }.bind(this),
        complete: function(){
          this.data.spotBTC = this.lastPrices.BTCUSDT;
          this.data.spotETH = this.lastPrices.ETHUSDT;
          this.data.spotLTC = this.lastPrices.LTCUSDT;
        }.bind(this)
      }
      $.ajax(ajaxConfig);

    }
  }






}
