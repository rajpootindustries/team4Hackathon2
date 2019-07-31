class Exchange{
  constructor(){
    this.render = this.render.bind(this);
    this.data = {
      exchangeName : null,
      spotBTC: null,
      spotETH: null,
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
    tableHeadRow.append($('<th>').text('Current Price'));
    tableHead.append(tableHeadRow);

    var tableBody = $('<tbody>');

    var tableBodyRow = $('<tr>');
    tableBodyRow.append($('<td>').text("Bitcoin"))
    tableBodyRow.append($('<td>').text('$'+this.data.spotBTC));
    tableBody.append(tableBodyRow);

    var tableBodyRow = $('<tr>');
    tableBodyRow.append($('<td>').text("Ethereum"))
    tableBodyRow.append($('<td>').text('$' + this.data.spotETH));
    tableBody.append(tableBodyRow);

    var tableBodyRow = $('<tr>');
    tableBodyRow.append($('<td>').text("Litecoin"))
    tableBodyRow.append($('<td>').text('$' + this.data.spotLTC));
    tableBody.append(tableBodyRow);

    table.append(tableHead, tableBody);
    card.append(table);
    cardContainer.append(card);
    $('#cardRow').append(cardContainer);
  }
}
