const functions = require("firebase-functions");
const express = require("express");
const app = express();

exports.httpReq = functions.https.onRequest(app);

app.get("/", frontendHandler);
app.get("/home", frontendHandler);
app.get("/login", frontendHandler);
app.get("/shmoodle", frontendHandler);

app.get('/b', backendHandler)

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