const phoneOTPAPI = require("./Action/PhoneOTP")
const emailOTPAPI = require("./Action/EmailOTP")
const voiceOTPAPI = require("./Action/VoiceOTP")
const multiMethodOTPAPI = require("./Action/MultiMethodOTP")
const historyAPI = require("./Action/History")
const statusAPI = require("./Action/Status")


async function phoneOTP(config, details) {
  return await phoneOTPAPI(config, details)
}

async function emailOTP(config, details) {
  return await emailOTPAPI(config, details)
}

async function voiceOTP(config, details) {
  return await voiceOTPAPI(config, details)
}

async function multiMethodOTP(config, details) {
  return await multiMethodOTPAPI(config, details)
}

async function status(config, otp_id) {
  return await statusAPI(config, otp_id)
}

async function history(config) {
  return await historyAPI(config)
}




module.exports = {
    phoneOTP,
    emailOTP,
    voiceOTP,
    multiMethodOTP,
    status,
    history
}
