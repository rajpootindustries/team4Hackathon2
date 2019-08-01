class Coinbase extends Exchange{
  constructor(){
    super();
    this.exchangeName = "Coinbase";

    this.btcSpotPrice();
    this.ethSpotPrice();
    this.ltcSpotPrice();

    this.data.makerFees = 0.0015;
    this.data.takerFees = 0.0025;
  }

  btcBuyPrice(){
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/BTC-USD/buy",
      method: "get",
      success: function(response){
        console.log("Success! Request returned ", response);
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
        this.data.sellBTC = response.data.amount;
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
        this.data.spotBTC = response.data.amount;
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
        this.data.spotETH = response.data.amount;
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
        this.data.spotLTC = response.data.amount;
      }.bind(this),
      error: function (response) {
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }
}
