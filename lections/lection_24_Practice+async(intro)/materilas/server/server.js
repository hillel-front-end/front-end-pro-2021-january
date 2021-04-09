const express = require('express')
const fs = require('fs');
const app = express();
const port = 3000

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});


//request.body --->
app.post('/foo', (req, res) => {
    console.log(req.body, 'body');
    const requestPayload = JSON.parse(req.body);
    console.log(requestPayload, 'requestPayload');

    read({
      url: './user/users.json',
      callback: (error, payload) => {
        const data = JSON.parse(payload);

        data.push(requestPayload)

        write('./user/users.json', data);
  
      }
    })

    res.send('ok');
});



const read = ({url, callback}) => fs.readFile(url, "utf-8", callback);


const write = (url, data) => {
  fs.writeFileSync(url, JSON.stringify(data));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});