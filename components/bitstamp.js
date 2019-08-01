// function addToServer(){
//   var ajaxConfig = {
//     dataType: 'json',
//     method: 'GET',
//     url: 'https://www.okex.com/api/index/v3/BTC-USD/constituents',
//     // data: { "api_key": 'QxABQ0kzHe', name: studentName, course: studentCourse, grade: studentGrade },
//     success: function (response) { console.log('success adding!', response) },
//     error: function () {
//       console.log('an error has occured in adding');
//     }
//   }

//   $.ajax(ajaxConfig);
// }

class Bitstamp extends Exchange {
  constructor(){
    super();
    this.data.exchangeFees = 0.0025;
    this.data.exchangeName = "bitstamp";
    this.checkPriceBtc();
    this.checkPriceEth();
    this.checkPriceLtc();
  }
  checkPriceBtc() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: 'https://www.bitstamp.net/api/v2/ticker/btcusd/',
      // data: { "api_key": 'QxABQ0kzHe', name: studentName, course: studentCourse, grade: studentGrade },
      success: function (response) {
        this.data.spotBTC = response.last;
        console.log('success adding!', response.last) }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }

    $.ajax(ajaxConfig);
  }

  checkPriceEth() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: 'https://www.bitstamp.net/api/v2/ticker/ethusd/',
      // data: { "api_key": 'QxABQ0kzHe', name: studentName, course: studentCourse, grade: studentGrade },
      success: function (response) {
        this.data.spotETH = response.last;
        console.log('success adding!', response.last)
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }

    $.ajax(ajaxConfig);
  }

  checkPriceLtc() {
    var ajaxConfig = {
      dataType: 'json',
      method: 'POST',
      url: 'https://www.bitstamp.net/api/v2/ticker/ltcusd/',
      // data: { "api_key": 'QxABQ0kzHe', name: studentName, course: studentCourse, grade: studentGrade },
      success: function (response) {
        this.data.spotLTC = response.last;
        console.log('success adding!', response.last)
      }.bind(this),
      error: function () {
        console.log('an error has occured in adding');
      }
    }

    $.ajax(ajaxConfig);
  }

}
// function checkPrice() {
//   var ajaxConfig = {
//     dataType: 'json',
//     method: 'POST',
//     url: 'https://www.bitstamp.net/api/v2/ticker/btcusd/',
//     // data: { "api_key": 'QxABQ0kzHe', name: studentName, course: studentCourse, grade: studentGrade },
//     success: function (response) { console.log('success adding!', response) },
//     error: function () {
//       console.log('an error has occured in adding');
//     }
//   }

//   $.ajax(ajaxConfig);
// }

// $(document).ready(checkPrice);
