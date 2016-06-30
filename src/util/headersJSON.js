const headersJSON = (token) => ({
  'Accept': 'application/json',
  'Authorization': `Bearer: ${token}`,
  'Content-Type': 'application/json'
})

export default headersJSON
