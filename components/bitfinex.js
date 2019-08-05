class Bitfinex extends Exchange{
  constructor() {
    super();
    this.bitfinexBTC = {};
    this.bitfinexLTC = {};
    this.bitfinexETH = {};
    this.data.exchangeName = "bitfinex";
    this.data.takerFees = 0.002;
    this.checkPrice('BTC');
    this.checkPrice('ETH');
    this.checkPrice('LTC');
    console.log("test");
  }

  checkPrice(coinKey) {
    var ajaxConfig = {
      dataType: 'json',
      method: 'GET',
      url: 'http://localhost/team4hackathon2/server/api-proxy-bitfinex.php',
      data: {
        id: coinKey+'USD'
      },
      success: function (response) {
        console.log(response);
        for (var key in response) {
          this['bitfinex'+coinKey][key] = response[key];
        }
        this.data['spot'+coinKey] = this['bitfinex'+coinKey].last_price;
      }.bind(this),
      error: function (response) {
        console.log(response);
        console.log('an error has occured in adding');
      },
      complete: function(){
        this.render();
      }.bind(this)
    }
    $.ajax(ajaxConfig);
  }
}
