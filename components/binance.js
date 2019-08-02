class Binance extends Exchange{
  constructor() {
    super();
    this.binanceData = null;
    this.symbols = ['BTCUSDT', 'ETHUSDT', 'LTCUSDT'];
    this.lastPrices = {};
    this.data.exchangeName = "binance";
    this.getBinanceData();
    this.data.takerFees = 0.001;
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
          if (this.binanceData.lastPrice < this.lastPrices[currentSymbol] ) {
            $(".coinRow > .col").css('color', 'red');
          } else {
            $(".coinRow > .col").css('color', 'green');
          }
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
