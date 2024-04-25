const axios = require("axios")
const auth = require("./Auth")
const headers = require("./Headers")

const emailOTP = async (config, details) => {
  try {
    const { receiver_email_address, success_redirect_url, fail_redirect_url } = details
    const missingFields = !receiver_email_address
    ? 'receiver_email_address'
    : !success_redirect_url
    ? 'success_redirect_url'
    : !fail_redirect_url
    ? 'fail_redirect_url'
    : null
  
  if (missingFields) {
    return {
      statusCode: 500,
      statusMessage: `${missingFields} field is mandatory.`
    }
  }
    const response = await axios.post(
      "https://otp.dev/api/verify/",
      {
        channel: "email",
        email: receiver_email_address,
        success_redirect_url,
        fail_redirect_url,
        captcha: "false",
        hide: "true",
        lang: "en",
      },
      {
        auth: auth(config),
        headers: headers(),
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = emailOTP
