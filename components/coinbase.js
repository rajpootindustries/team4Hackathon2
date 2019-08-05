class Coinbase extends Exchange{
  constructor(){
    super();
    this.btcBuyPrice();
    this.btcSellPrice();
    this.btcSpotPrice();

    this.btcSpotPrice();
    this.ethSpotPrice();
    this.ltcSpotPrice();

    this.data.takerFees = 0.0025;
    this.data.exchangeName = "coinbase";
  }

  btcBuyPrice(){
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/BTC-USD/buy",
      method: "get",
      success: function(response){
        this.data.buyBTC = response.data.amount;
      }.bind(this),
      error: function(response){
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  btcSellPrice(){
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/BTC-USD/sell",
      method: "get",
      success: function(response){
        this.data.sellBTC = parseFloat(response.data.amount).toFixed(2);
      }.bind(this),
      error: function(response){
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  btcSpotPrice(){
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/BTC-USD/spot",
      method: "get",
      success: function(response){
        this.data.spotBTC = parseFloat(response.data.amount).toFixed(2);
      }.bind(this),
      error: function(response){
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  ethBuyPrice() {
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/ETH-USD/buy",
      method: "get",
      success: function (response) {
        console.log("Success! Request returned ", response);
        this.data.buyETH = response.data.amount;
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  ethSellPrice() {
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/ETH-USD/sell",
      method: "get",
      success: function (response) {
        this.data.sellETH = response.data.amount;
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  ethSpotPrice() {
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/ETH-USD/spot",
      method: "get",
      success: function (response) {
        this.data.spotETH = parseFloat(response.data.amount).toFixed(2);
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  ltcBuyPrice() {
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/LTC-USD/buy",
      method: "get",
      success: function (response) {
        console.log("Success! Request returned ", response);
        this.data.buyLTC = response.data.amount;
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  ltcSellPrice() {
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/LTC-USD/sell",
      method: "get",
      success: function (response) {
        this.data.sellLTC = response.data.amount;
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }

  ltcSpotPrice() {
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/LTC-USD/spot",
      method: "get",
      success: function (response) {
        this.data.spotLTC = parseFloat(response.data.amount).toFixed(2);
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }
}
