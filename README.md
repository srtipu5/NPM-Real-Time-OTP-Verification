## Authenticate Via OTP Verification

Library to authenticate user via OTP verification.

## Using OTP Service from otp.dev

This package utilizes the OTP service provided by otp.dev for generating one-time passwords. However, please note that otp.dev offers its services for free for a limited duration, typically 7 days from the time of registration.

To use the OTP service from otp.dev with this package, you need to sign up on the otp.dev website and obtain API credentials. Once you have the credentials, you can pass them to the appropriate methods or configuration options in your application.

## Limitations

As mentioned, otp.dev offers its services for free for a limited duration. After the trial period expires, you may need to upgrade to a paid plan to continue using the service.

It's important to be aware of the limitations of the free trial period and plan your usage accordingly. If your application relies heavily on OTP generation, you may need to consider alternatives or upgrade to a paid plan to ensure uninterrupted service.

Additionally, please review the terms of service and usage limits provided by otp.dev to ensure compliance with their policies.

For more information about otp.dev and their services, please visit [otp.dev](https://otp.dev/en/).

# NPM Install

```
npm install otp-armor
```

# Yarn Install

```
yarn add otp-armor
```

# Credentials Setup From https://otp.dev/en/ 

```
const config = {
  app_key : 'your_api_key',
  api_token: 'your_api_token'
 }
```

# Mandatory Field Setup 
```
const details = {
  success_redirect_url : 'your_success_route_after_successful_otp_verification',  // The domain through which you got the API
  fail_redirect_url : 'your_failed_route_after_unsuccessful_otp_verification'     // The domain through which you got the API
 }

```

# phone OTP

```
const result =  await phoneOTP(config, details)
```

# Email OTP

```
const result =  await emailOTP(config, details)
```
# Voice OTP

```
const result =  await voiceOTP(config, details)
```
# Phone, Emai & Voice OTP

```
const result =  await multiMethodOTP(config, details)
```

# Single OTP Status Check

```
const result =  await history(config, otp_id)
```

# Show History

```
const result =  await history(config)
```

## API Call Flow

Verification.js

```
const express = require('express')
const { phoneOTP, emailOTP, voiceOTP, multiMethodOTP, status, history } = require('otp-armor')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Credentials setup from https://otp.dev/en/
const config = {
  app_key : 'your_api_key',
  api_token: 'your_api_token'
 }

// Mandatory fields setup
const details = {
  success_redirect_url : 'your_success_route_after_successful_otp_verification',  // The domain through which you got the API 
  fail_redirect_url : 'your_failed_route_after_unsuccessful_otp_verification'     // The domain through which you got the API
 }

// Phone OTP
app.get("/get-phone-otp", async(req, res) => {
  try {
    const result =  await phoneOTP(config, details)
    // save result in your db
    res.redirect(result?.link)
  } catch (e) {
    console.log(e)
  }
})

// Email OTP
app.get("/get-email-otp", async(req, res) => {
  try {
    const result =  await emailOTP(config, details)
    // save result in your db
    res.redirect(result?.link)
  } catch (e) {
    console.log(e)
  }
})

// Voice OTP via Phone
app.get("/get-voice-otp", async(req, res) => {
  try {
    const result =  await voiceOTP(config, details)
    // save result in your db
    res.redirect(result?.link)
  } catch (e) {
    console.log(e)
  }
})

// Phone, Email, Voice OTP
app.get("/get-all-otp", async(req, res) => {
  try {
    const result =  await multiMethodOTP(config, details)
    // save result in your db
    res.redirect(result?.link)
  } catch (e) {
    console.log(e)
  }
})

// OTP Status Check
app.get("/otp-status", async(req, res) => {
  try {
    const {otp_id} = req.query
    const result =  await status(config, otp_id)
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})

// OTP History Check
app.get("/otp-history", async(req, res) => {
  try {
    const result =  await history(config)
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})


app.listen(port, () =>
  console.log(`Example app listening at http://127.0.0.1:${port}`)
)

```
