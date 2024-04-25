const axios = require("axios")
const auth = require("./Auth")
const headers = require("./Headers")
const checkRequiredFields = require("./CheckRequiredFields")

const phoneOTP = async (config, details) => {
  try {
    const { success_redirect_url, fail_redirect_url } = details
    
    const validationResult = checkRequiredFields(details)
    if (validationResult) return validationResult
    
    const response = await axios.post(
      "https://otp.dev/api/verify/",
      {
        channel: "sms",
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

module.exports = phoneOTP
