const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const PORT = 3000;

const httpsOptions = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
};

app.get('/', (req, res) => {
  res.send('Hello HTTPS!');
});

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`🚀 HTTPS server running at https://localhost:${PORT}`);
});
