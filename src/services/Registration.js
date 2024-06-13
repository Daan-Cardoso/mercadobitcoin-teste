export const saveUser = async (formData) => {
  
  const [err, res] = fetch('/registration', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => [null, response])
    .catch(error => [error, null])

  return [err, res]
}