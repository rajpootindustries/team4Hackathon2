class Bitstamp extends Exchange {
  constructor(){
    super();
    this.data.takerFees = 0.0025;
    this.data.exchangeName = "bitstamp";
    this.checkPrice('btc');
    this.checkPrice('eth');
    this.checkPrice('ltc');
  }

  checkPrice(coinKey) {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: `https://www.bitstamp.net/api/v2/ticker/${coinKey}usd/`,
      success: function (response) {
        this.data['spot'+coinKey.toUpperCase()] = response.last;
        console.log(this.data, response);
        this.render();
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }
}
