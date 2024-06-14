export const schema = (ctx) => ({
  email: {
    label: 'Endereço de email',
    type: 'email',
    // required: true,
  },
  typePerson: {
    type: 'radio',
    options: [
      { label: 'Pessoa física', value: 'PF' },
      { label: 'Pessoa jurídica', value: 'PJ' }
    ],
    // required: true
  },
  name: {
    label: 'Nome',
    type: 'text',
    // required: true
  },
  document: {
    label: ctx.typePerson == 'PF' ? 'CPF' : 'CNPJ',
    type: 'text',
    // required: true
  },
  date: {
    label: `Data de ${ctx.typePerson == 'PF' ? 'nascimento' : 'abertura'}`,
    type: 'text',
    // required: true
  },
  phone: {
    label: 'Telefone',
    type: 'text',
    // required: true
  },
  senha: {
    label: 'Senha',
    type: 'password',
    // required: true
  }
})

export const steps = (ctx) => [
  {
    title: 'Seja bem-vindo(a)',
    fields: [ 'email', 'typePerson' ],
    actions: {
      next: 'Continuar',
    }
  },
  {
    title: `Pessoa ${ctx.typePerson == 'PF' ? 'Física' : 'Jurídica'}`,
    fields: [ 'name', 'document', 'date', 'phone' ],
    actions: {
      prev: 'Voltar',
      next: 'Continuar',
    }
  },
  {
    title: 'Senha de acesso',
    fields: [ 'name' ],
    actions: {
      prev: 'Voltar',
      next: 'Continuar',
    }
  },
  {
    title: 'Revise suas informações',
    fields: [ 'name' ],
    actions: {
      prev: 'Voltar',
      submit: 'Confirmar',
    }
  },
]