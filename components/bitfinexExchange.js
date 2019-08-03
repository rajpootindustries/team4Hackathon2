class Bitfinex extends Exchange{
  constructor() {
    super();
    this.bitfinexBTC = {};
    this.bitfinexLTC = {};
    this.bitfinexETH = {};
    this.checkPriceBTC();
    this.checkPriceLTC();
    this.checkPriceETH();
    this.data.exchangeName = "bitfinex";
    this.data.takerFees = 0.002;
  }

  checkPriceBTC() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'GET',
      url: 'http://localhost/team4hackathon2/server/api-proxy-bitfinex.php',
      data: {
        id: 'BTCUSD'
      },
      success: function (response) {
        for (var key in response) {
          this.bitfinexBTC[key] = response[key];
        }
        console.log(this.bitfinexBTC);
        if (this.bitfinexBTC.last_Price < this.lastPrices) {
          $(".coinRow > .col").css('color', 'red');
        } else {
          $(".coinRow > .col").css('color', 'green');
        }
        this.data.spotBTC = this.bitfinexBTC.last_price;

      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }
  checkPriceLTC() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'GET',
      url: 'http://localhost/team4hackathon2/server/api-proxy-bitfinex.php',
      data: {
        id: 'LTCUSD'
      },
      success: function (response) {
        for (var key in response) {
          this.bitfinexLTC[key] = response[key];
        }
        console.log(this.bitfinexLTC);
        this.data.spotLTC = this.bitfinexLTC.last_price;

      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
  $.ajax(ajaxConfig);
  }
  checkPriceETH() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'GET',
      url: 'http://localhost/team4hackathon2/server/api-proxy-bitfinex.php',
      data: {
        id: 'ETHUSD'
      },
      success: function (response) {
        for (var key in response) {
          this.bitfinexETH[key] = response[key];
        }
        console.log(this.bitfinexETH);
        this.data.spotETH = this.bitfinexETH.last_price;

      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }
}
