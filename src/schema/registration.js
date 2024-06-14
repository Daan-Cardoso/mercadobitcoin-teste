import { validateEmail } from "../helpers/formHelpers"

export const schema = (formData) => ({
  email: {
    label: 'Endereço de email',
    type: 'text',
    required: true,
    validation: (value) => {
      if (!validateEmail(value)) {
        return 'O email deve ser válido'
      }
    }
  },
  typePerson: {
    type: 'radio',
    options: [
      { label: 'Pessoa física', value: 'PF' },
      { label: 'Pessoa jurídica', value: 'PJ' }
    ],
  },
  name: {
    label: 'Nome',
    type: 'text',
    required: true,
    validation: (value) => {
      if (value.length < 3) {
        return 'O nome deve ter no mínimo 3 caracteres'
      }
    }
  },
  document: {
    label: formData.typePerson == 'PF' ? 'CPF' : 'CNPJ',
    type: 'text',
    mask: formData.typePerson == 'PF' ? '###.###.###-##' : '##.###.###/####-##',
    required: true,
    validation: (value, formData) => {
      const { typePerson } = formData
      
      const typeDocument = typePerson == 'PF' ? 'CPF' : 'CNPJ'
      const minValue = typePerson == 'PF' ? 14 : 18
      const cleanedMinValue = typePerson == 'PF' ? 11 : 14

      if (value.length < minValue) return `O ${typeDocument} deve ter ${cleanedMinValue} caracteres`
    }
  },
  date: {
    label: `Data de ${formData.typePerson == 'PF' ? 'nascimento' : 'abertura'}`,
    type: 'text',
    mask: '##/##/####',
    required: true,
    validation: (value) => {      
      if (value.length < 10) {
        return 'A data deve ser válida'
      }
    }
  },
  phone: {
    label: 'Telefone',
    type: 'text',
    mask: '(##) #####-####',
    required: true,
    validation: (value) => {
      if (value.length < 15) {
        return 'O telefone deve ser válido'
      }
    }
  },
  password: {
    label: 'Senha',
    type: 'password',
    autocomplete: 'off',
    required: true,
    validation: (value) => {
      if (value.length < 6) {
        return 'A senha deve ter no mínimo 6 caracteres'
      }
    }
  }
})

export const steps = (formData) => [
  {
    title: 'Seja bem-vindo(a)',
    fields: [ 'email', 'typePerson' ],
    actions: {
      next: 'Continuar',
    }
  },
  {
    title: `Pessoa ${formData.typePerson == 'PF' ? 'Física' : 'Jurídica'}`,
    fields: [ 'name', 'document', 'date', 'phone' ],
    actions: {
      prev: 'Voltar',
      next: 'Continuar',
    }
  },
  {
    title: 'Senha de acesso',
    fields: [ 'password' ],
    actions: {
      prev: 'Voltar',
      next: 'Continuar',
    }
  },
  {
    title: 'Revise suas informações',
    fields: [ 'email', 'name', 'document', 'date', 'phone', 'password' ],
    actions: {
      prev: 'Voltar',
      submit: 'Cadastrar',
    },
    readonly: true
  },
]