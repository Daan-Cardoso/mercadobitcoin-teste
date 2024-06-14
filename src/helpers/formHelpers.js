/**
 * Filtra os atributos de um objeto, removendo os atributos que não são aceitos.
 *
 * @param {Object} attrs - Objeto contendo os atributos a serem filtrados.
 * @param {Array<string>} [nonAcceptedAttrs=['class']] - Array contendo as chaves dos atributos que devem ser removidos.
 * @returns {Object} Novo objeto contendo apenas os atributos que não estão na lista de atributos não aceitos.
 *
 * @example
 * const attrs = {
 *   class: 'button',
 *   type: 'text',
 *   placeholder: 'Enter your name',
 *   disabled: false
 * }
 * 
 * const result = filteredAttrs(attrs, ['class', 'disabled'])
 * // result será { type: 'text', placeholder: 'Enter your name' }
 */
export const filteredAttrs = (attrs, nonAcceptedAttrs = ['class']) => {
  return Object.fromEntries(
    Object.entries(attrs).filter(([key]) => !nonAcceptedAttrs.includes(key))
  )
}

/**
 * Valida um email.
 *
 * @param {string} value - Email a ser validado.
 * @returns {boolean} Retorna true se o email for válido e false caso contrário.
 *
 * @example
 * const email = 'teste'
 * const isValid = validateEmail(email)
 * // isValid será false
 * 
 * const validEmail = 'teste@teste.com'
 * const isValid = validateEmail(validEmail)
 * // isValid será true
 */
export const validateEmail = (value) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(value)
}


/**
 * Valida os dados de um formulário com base em um esquema de validação.
 *
 * @param {Object} formData - Objeto contendo os dados do formulário a serem validados.
 * @param {Object} schema - Objeto contendo o esquema de validação para cada campo do formulário.
 * @returns {Object} Objeto contendo os erros de validação encontrados.
 *
 * @example
 * const formData = {
 *   name: { value: 'John Doe' },
 *   email: { value: 'john.doe@example.com' },
 *   password: { value: 'password123' }
 * }
 * 
 * const schema = {
 *   name: { required: true },
 *   email: { required: true, validation: validateEmail },
 *   password: { required: true, validation: validatePassword }
 * }
 * 
 * const errors = validateFormData(formData, schema)
 * // errors será { name: undefined, email: undefined, password: 'A senha deve conter pelo menos 8 caracteres' }
 */
export const validateFormData = (formData, schema) => {
  const errors = {}

  for (const key in schema) {
    const field = schema[key]
    if (field.required && !formData[key].value) {
      errors[key] = 'Este campo é obrigatório'
      continue
    }

    if (field.validation && typeof field.validation === 'function') {
      const error = field.validation(formData[key].value, formData)

      if (error) {
        errors[key] = error
      }
    }
  }

  return errors
}