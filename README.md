# Twitter Webook using AWS Lambda and API Gateway (Serverless)

Creating the App
1. Create Twitter developer account
2. Create Twitter app - https://developer.twitter.com/en/apps
3. Go to app details and change permissions to Read, write and Direct Messages
4. Take note of the app's Consumer Key and Consumer Token
5. On the same tab, generate Access Token and Access Token Secret
  5.1 Go to the Twitter profile your dev account is linked to 
  -> Account -> Apps & Sessions and make sure your app has Read, write, and direct messages, if not regenerate the access tokens 
  on the dev account
6. Take note of the app's numeric ID

Get Account Activity API Access
1. Go to https://developer.twitter.com/en/account/environments
2. Setup dev environment, specify your app ID and specify an environment, this environement will be used to register your endpoint
  e.g. https://api.twitter.com/1.1/account_activity/all/prod/webhooks if you've set environement to `prod`

Create Webhook Service
1. Input consumerKey, consumerSecret, accessKey, accessSecret, webhookURL into scripts/config.js
2. Run `node register.js` keep note of response, this is the ID of the webhook