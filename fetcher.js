

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request(url , (error, response, body) => {
  console.log('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  //console.log('body: ', body); // => clean up response in terminal

  if (response.statusCode === 200) {
   fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  }
}); 