class Bitfinex {
  constructor() {
    this.bitfinexData = {};
    this.checkPrice();
  }
  checkPrice() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'GET',
      url: '../server/api-proxy-bitfinex.php',
      data: {
        id: 'BTCUSD'
      },
      success: function (response) {
        for (var key in response) {
          this.bitfinexData[key] = response[key];
        }
        console.log(this.bitfinexData);
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }
    $.ajax(ajaxConfig);
  }
}

$(document).ready(start);

function start() {
  var myBitfinex = new Bitfinex();
}
