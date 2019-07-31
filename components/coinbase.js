class Coinbase extends Exchange{
  constructor(){
    super();
  }
  buyPrice(){
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

  sellPrice(){
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

  spotPrice(){
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
}
