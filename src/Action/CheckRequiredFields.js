const checkRequiredFields = (details) => {
  const { success_redirect_url, fail_redirect_url } = details
  const missingFields = !success_redirect_url
    ? "success_redirect_url"
    : !fail_redirect_url
    ? "fail_redirect_url"
    : null

  if (missingFields) {
    return {
      statusCode: 500,
      statusMessage: `${missingFields} field is mandatory.`,
    }
  }
}

module.exports = checkRequiredFields
