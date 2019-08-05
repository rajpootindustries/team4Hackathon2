class Exchange{
  constructor(){
    this.render = this.render.bind(this);
    this.data = {
      exchangeName : null,
      spotBTC: null,
      spotETH: null,
      spotLTC: null,
      takerFees: null,
      exchangeFees: null,
    };
    this.domElement = {};
  }
  render() {
    $(".row > #"+this.data.exchangeName+"Bitcoin").text(this.data.spotBTC);
    $(".row > #"+this.data.exchangeName+"Ethereum").text(this.data.spotETH);
    $(".row > #"+this.data.exchangeName+"Litecoin").text(this.data.spotLTC);
  }
}
