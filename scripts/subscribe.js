const rp = require('request-promise-native');
const { oauth, twitterEnvironmentName } = require('./config');
const url = `https://api.twitter.com/1.1/account_activity/all/${twitterEnvironmentName}/subscriptions.json`;
rp(url,
  {
    method: 'post',
    oauth,
    resolveWithFullResponse: true
  })
  .then(response => {
    if (response.statusCode === 204) {
      console.log('Subscription added');
    }
  })
  .catch(error => {
    console.log('Subscription not added');
    console.log(respone.error);
  })