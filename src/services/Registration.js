export const saveUser = async (formData) => {
  /*
  como não foi solicitado o uso de um backend,
  o código abaixo é apenas um exemplo de como a função saveUser
  seria implementada

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
  */

  // Simulando uma requisição assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([null, 'Usuário cadastrado com sucesso!'])
    }, 2000)
  })
}