const auth = (config) => {
  return {
    username: config?.app_key,
    password: config?.api_token,
  }
}

module.exports = auth
