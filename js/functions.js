// jQuery.getFeed({
//    url: 'https://trends.google.com/trends/hottrends/hotItems?ajax=1&htv=l&pn=p1&safe=true',
//    success: function(feed) {
//       console.log(feed);
//    }
// });


// $.ajax({
//   type: "OPTIONS",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//     "Access-Control-Allow-Headers": "Origin"
//   },
//   url: "https://trends.google.com/trends/hottrends/hotItems?ajax=1&htv=l&pn=p1&safe=true"
// }).done(function (data) {
//   console.log(data);
// });

        $.ajax({
            crossDomain: true,
            type:"GET",
            contentType: "application/json; charset=utf-8",
            async:false,
            url: "https://trends.google.com/trends/hottrends/hotItems?ajax=1&htv=l&pn=p1&safe=true"
            // data: { symbol: 'ctsh' },
            // dataType: "jsonp",                
            // jsonpCallback: 'fnsuccesscallback'
        }).done(function (data) {
  console.log(data);
});;




// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// header("Access-Control-Allow-Headers: Origin");




// makeCorsRequest();
// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.

//     // Access-Control-Allow-Origin: *



//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://trends.google.com/');

//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url = 'https://trends.google.com/trends/hottrends/hotItems?ajax=1&htv=l&pn=p1&safe=true';

//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//   console.log(xhr.responseText);
//   };

//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };

//   xhr.send();
// }