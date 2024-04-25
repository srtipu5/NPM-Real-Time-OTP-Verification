const axios = require("axios")
const history = async (config) => {
    try {
        const response = await axios.get("https://otp.dev/api/verify/", {
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `${config?.app_key}:${config?.api_token}`
              ).toString("base64"),
          },
        })
        return response.data
      } catch (error) {
        console.error(error)
      }
  }

module.exports = history