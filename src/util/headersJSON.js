const headersJSON = (token) => ({
  'Accept': 'application/json',
  'Authorization': `BEARER ${token}`,
  'Content-Type': 'application/json'
})

export default headersJSON
