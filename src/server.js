const fs = require('fs');
const https = require('https');
const crypto = require('crypto');
const app = require('./app');

const PORT = process.env.PORT || 4443;

// Read from docker-compose environment
const MIN_TLS = process.env.TLS_MIN || 'TLSv1.3';
const MAX_TLS = process.env.TLS_MAX || 'TLSv1.3';

const httpsOptions = {
  key: fs.readFileSync('/certs/key.pem'),
  cert: fs.readFileSync('/certs/cert.pem'),
  minVersion: MIN_TLS,
  maxVersion: MAX_TLS,
  ciphers: process.env.TLS_MODE === 'AES256'
    ? 'TLS_AES_256_GCM_SHA384'
    : 'TLS_AES_128_GCM_SHA256',
};

https.createServer(httpsOptions, app).listen(PORT, '0.0.0.0', () => {
  console.log(
    `HTTPS running on port ${PORT} | TLS ${MIN_TLS}..${MAX_TLS} | Suite ${httpsOptions.ciphers}`
  );
});
