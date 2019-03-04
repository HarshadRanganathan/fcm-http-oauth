const {google} = require('googleapis');

const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];
const args = process.argv

function getAccessToken() {
    return new Promise(function(resolve, reject) {
      var key = require(args[2]);
      var jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        SCOPES,
        null
      );
      jwtClient.authorize(function(err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens.access_token);
      });
    });
}

getAccessToken()
  .then((access_token) => console.log("Access Token: " + access_token));