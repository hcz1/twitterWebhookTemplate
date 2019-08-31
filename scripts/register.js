const rp = require('request-promise-native');
const { oauth, twitterEnvironmentName } = require('./config');
const url = `https://api.twitter.com/1.1/account_activity/all/${twitterEnvironmentName}/webhooks.json`;
rp(url,
  {
    method: 'post',
    oauth,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    form: {
      url: args.url
    }
  })
  .then(JSON.parse)
  .then(console.log)
  .catch(console.log)
