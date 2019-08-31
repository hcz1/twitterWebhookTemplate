const rp = require('request-promise-native');
const { consumerKey, consumerSecret, accessKey, accessSecret, webhookURL } = require('./config');
const url = `https://api.twitter.com/1.1/account_activity/all/${process.argv[2]}/webhooks.json`;
rp(url,
  {
    method: 'post',
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




