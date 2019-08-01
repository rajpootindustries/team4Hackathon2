class Binance extends Exchange{
  constructor() {
    super();
    this.binanceData = null;
    // this.lastPrice = null;
    this.symbols = ['BTCUSDT', 'ETHUSDT', 'LTCUSDT'];
    this.lastPrices = {};
    // this.render = this.render.bind(this);
    this.data.exchangeName = "binance";
    // this.render();
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
          this.render();
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



var bnb = new Binance();
bnb.getBinanceData();
