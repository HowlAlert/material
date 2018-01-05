//
export function Add_Devices()
{

   let BaseURL = 'https://sandbox.howlalarm.com/HOWL_WCF_Sandbox/Service1.svc/';

   return new Promise((resolve, reject) =>{
        fetch(BaseURL,
           {
            method: "POST",
            body: JSON.stringify({ "Email":"aruna@gmail.com", "Password":"baseball" }),
            mode: "no-cors"
          })
          .then(response => response.text())
          .then(contents => console.log(contents))
          .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
      });
}


   // const proxyurl = "https://cors-anywhere.herokuapp.com/";
   // const url = "https://example.com"; // site that doesn’t send Access-Control-*
   // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
   // .then(response => response.text())
   // .then(contents => console.log(contents))
   // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


//
// }
// import * as fs from 'fs';
//   var express = require('express');
//   var app = express();
//   var http = require('http');
//   app.get('/', function (req, res) {
//     var request = require('request');
//     request.post(
//         'http://sandbox.howlalarm.com/HOWL_WCF_Sandbox/Service1.svc/Login',
//         { json: { "Email": 'derek@howlalert.com', "Password":"howl38" } },
//         function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log(body)
//             }
//         }
//     );
//       res.send('Hello World!');
//   });
//   app.listen(3000, function () {
//       console.log('Example app listening on port 3000!');
//   });
