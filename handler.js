const qs = require('querystring');
const crypto = require('crypto');

module.exports.crc = async event => {

  const hmac = crypto.createHmac('sha256', process.env.consumer_secret)
    .update(event.queryStringParameters.crc_token).digest('base64');
  return {
    statusCode: 200,
    body: JSON.stringify({
      'response_token': 'sha256=' + hmac
    }),
  };
};
