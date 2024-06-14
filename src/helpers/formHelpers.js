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
 * };
 * 
 * const result = filteredAttrs(attrs, ['class', 'disabled']);
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
 * const isValid = validateEmail(email);
 * // isValid será false
 * 
 * const validEmail = 'teste@teste.com'
 * const isValid = validateEmail(validEmail);
 * // isValid será true
 */
export const validateEmail = (value) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value);
}