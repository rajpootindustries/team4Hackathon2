class Bitstamp extends Exchange {
  constructor(){
    super();
    this.data.takerFees = 0.0025;
    this.data.exchangeName = "bitstamp";
    this.checkPriceBtc();
    this.checkPriceEth();
    this.checkPriceLtc();
  }

  checkPriceBtc() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: 'https://www.bitstamp.net/api/v2/ticker/btcusd/',
      success: function (response) {
        this.data.spotBTC = response.last;
        console.log('success adding!', response.last)
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }

  checkPriceEth() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: 'https://www.bitstamp.net/api/v2/ticker/ethusd/',
      success: function (response) {
        this.data.spotETH = response.last;
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }

  checkPriceLtc() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: 'https://www.bitstamp.net/api/v2/ticker/ltcusd/',
      success: function (response) {
        this.data.spotLTC = response.last;
        console.log('success adding!', response.last)
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }
}
