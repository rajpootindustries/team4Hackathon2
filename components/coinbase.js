class Coinbase extends Exchange{
  constructor(){
    super();
    this.SpotPrice("BTC");
    this.SpotPrice("ETH");
    this.SpotPrice("LTC");

    this.data.takerFees = 0.002;
    this.data.exchangeName = "coinbase";
  }
  SpotPrice(coinKey){
    var ajaxConfig = {
      datatype: "json",
      url: `https://api.coinbase.com/v2/prices/${coinKey}-USD/spot`,
      method: "get",
      success: function(response){
        this.data['spot'+coinKey] = parseFloat(response.data.amount).toFixed(2);
        this.render();
      }.bind(this),
      error: function(response){
        console.log("Error, request returned", response);
      }
    }
    $.ajax(ajaxConfig);
  }
}
