class Binance {
  constructor() {
    this.binanceData = null;
    // this.lastPrice = null;
    this.symbols = ['BTCUSDT', 'ETHUSDT', 'LTCUSDT'];
    this.lastPrices = {};
    this.render = this.render.bind(this);
    this.render();
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
        }.bind(this)
      }
      $.ajax(ajaxConfig);

    }
  }

  render() {

    $(".row > #binanceBitcoin").html(this.lastPrices.BTCUSDT);
    $(".row > #binanceEthereum").html(this.lastPrices.ETHUSDT);
    $(".row > #binanceLitecoin").html(this.lastPrices.LTCUSDT);
  }








}



var bnb = new Binance();
bnb.getBinanceData();
