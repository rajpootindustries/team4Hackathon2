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

function checkPrice() {
  var ajaxConfig = {
    dataType: 'json',
    method: 'POST',
    url: 'https://www.bitstamp.net/api/v2/ticker/btcusd/',
    // data: { "api_key": 'QxABQ0kzHe', name: studentName, course: studentCourse, grade: studentGrade },
    success: function (response) { console.log('success adding!', response) },
    error: function () {
      console.log('an error has occured in adding');
    }
  }

  $.ajax(ajaxConfig);
}

$(document).ready(checkPrice);
