const status = async (config, otp_id) => {
    try {
        const response = await axios.get(`https://otp.dev/api/verify/${otp_id}/`, {
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

module.exports = status