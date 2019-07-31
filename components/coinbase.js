class Coinbase extends Exchange{
  constructor(){
    super();
  }
  logCoinPrice(){
    var ajaxConfig = {
      datatype: "json",
      url: "https://api.coinbase.com/v2/prices/BTC-USD/buy",
      method: "get",
      success: function(response){
        console.log("Success! Request returned ", response);
      },
      error: function(response){
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }
}
