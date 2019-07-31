class Exchange{
  constructor(){
    this.render = this.render.bind(this);
    this.data = {
      exchangeName : null,
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
      exchangeFees: null,
    };
    this.domElement = {};
  }

  render(){
    var cardContainer = $('<div>', {
      class : "col-sm-6 mb-3 mb-md-0"
    });

    var card = $('<div>', {
      class: "card"
    });

    var table = $('<table>', {
      class: "card-body table table-bordered"
    });

    var tableHead = $('<thead>');
    var tableHeadRow = $('<tr>');
    tableHeadRow.append($('<th>').text(this.exchangeName));
    tableHeadRow.append($('<th>').text('Buy'));
    tableHeadRow.append($('<th>').text('Sell'));
    tableHeadRow.append($('<th>').text('Spot'));
    tableHead.append(tableHeadRow);

    var tableBody = $('<tbody>');
    var tableBodyRow = $('<tr>');
    tableBodyRow.append($('<td>').text("Bitcoin"))
    tableBodyRow.append($('<td>').text('$'+this.data.buyBTC));
    tableBodyRow.append($('<td>').text('$'+this.data.sellBTC));
    tableBodyRow.append($('<td>').text('$'+this.data.spotBTC));
    tableBody.append(tableBodyRow);

    var tableBodyRow = $('<tr>');
    tableBodyRow.append($('<td>').text("Ethereum"))
    tableBodyRow.append($('<td>').text('$' + this.data.buyETH));
    tableBodyRow.append($('<td>').text('$' + this.data.sellETH));
    tableBodyRow.append($('<td>').text('$' + this.data.spotETH));
    tableBody.append(tableBodyRow);

    var tableBodyRow = $('<tr>');
    tableBodyRow.append($('<td>').text("Litecoin"))
    tableBodyRow.append($('<td>').text('$' + this.data.buyLTC));
    tableBodyRow.append($('<td>').text('$' + this.data.sellLTC));
    tableBodyRow.append($('<td>').text('$' + this.data.spotLTC));
    tableBody.append(tableBodyRow);

    table.append(tableHead, tableBody);
    card.append(table);
    cardContainer.append(card);
    $('#cardRow').append(cardContainer);
  }
}
