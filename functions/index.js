const functions = require("firebase-functions");
const express = require("express");
const app = express();

exports.httpReq = functions.https.onRequest(app);

app.get("/", frontendHandler);
app.get("/home", frontendHandler);
app.get("/login", frontendHandler);
app.get("/rickroll", rickrollHandler);
app.get("/rps", frontendHandler);
app.get("/rps1", frontendHandler);
app.get("/rps2", frontendHandler);
app.get("/rps3", frontendHandler);

app.get('/b', backendHandler);

function rickrollHandler (request, response){
    let page = `
    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Click The Button!</title>
    </head>
    <body>
      <div align='center'>
      <h1>Click The Button!</h1><br>
      <a class="btn btn-primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">Click Here!</a><br>
      Yes, that button!<br>
      You know you want to!<br>
      Go on, click it!<br>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </div>
    </body>

`; 
response.send(page);
}

function frontendHandler(request, response) {
    response.sendFile(__dirname + "/spa/index.html");
    
}

function backendHandler(request, response){
    const n = Math.random();
    const num = Math.floor(n*10);
    //in c++, I'd just have 'int s, p, d, q;'
    let s = 0; let p = 0; let d = 0; let q = 0;
    s = 36 + 5;
    p = 36 * 5;
    d = 36 - 5;
    q = 36/5;
    let page = `
        <h1>Your Lucky Number is ${num}</h1>
        36 and 5!!!!!!
        sum  is ${s}
        product is ${p}
        quotient is ${q}
    `;

    response.send(page)
}