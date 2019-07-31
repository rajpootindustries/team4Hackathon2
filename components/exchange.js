class Exchange {
  constructor(){
    this.data = {
      //This is the current BUY price listed by the exchange
      buyBTC: null,
      //This is the current SELL price listed by the exchange
      sellBTC: null,
      //This is the LAST traded price listed by the exchange
      spotBTC: null,

      buyETH: null,
      sellETH: null,
      spotETH: null,

      buyLTC: null,
      sellLTC: null,
      spotLTC: null,

      makerFees: null,
      takerFees: null,
      exchangeFees: null
    };
  }
}
