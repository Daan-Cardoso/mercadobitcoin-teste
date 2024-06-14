<template>
  <main class="view">
    <multi-step-form
      :activeStep="activeStep"
      :formData="formData"
      :key="formData.typePerson"
      :schema="reactiveSchema"
      :steps="reactiveSteps"
      :loading="isLoading"
      :success="successMessage"
      @action:next="nextStep"
      @action:prev="prevStep"
      @action:submit="submit"
    />
  </main>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { steps, schema } from './schema/registration'
import { validateFormData } from './helpers/formHelpers'
import { saveUser } from './services/registration'
import MultiStepForm from './components/MultiStepForm.vue'
import CInput from './components/CInput.vue'

const formData = reactive({
  email: { value: '', error: '' },
  typePerson: 'PF',
  name: { value: '', error: '' },
  document: { value: '', error: '' },
  date: { value: '', error: '' },
  phone: { value: '', error: '' },
  password: { value: '', error: '' }
})

let reactiveSchema = reactive(schema(formData))
let reactiveSteps = steps(formData)

const isLoading = ref(false)
const successMessage = ref('')

watch(() => formData.typePerson, (newVal) => {
  reactiveSchema = reactive(schema(formData))
  reactiveSteps = steps(formData)
})

const activeStep = ref(0)

const nextStep = () => {
  if(activeStep.value < reactiveSteps.length) {
    activeStep.value++
  }
}

const prevStep = () => {
  if(activeStep.value > 0) {
    activeStep.value--
  }
}

const backToFirtStep = () => {
  activeStep.value = 0
}

const checkHasErrorOnSubmit = (errors) => {
  return Object.keys(errors).length
}

const setErrorsOnFormData = (errors) => {
  Object.keys(errors).forEach((key) => {
    formData[key].error = errors[key]
  })
}

const submit = async () => {
  const errors = validateFormData(formData, reactiveSchema)

  if (checkHasErrorOnSubmit(errors)) {

    setErrorsOnFormData(errors)
    backToFirtStep()
    return
  }

  isLoading.value = true
  const [err, res] = await saveUser(formData)
  successMessage.value = res
  isLoading.value = false

  console.log(`Errors: ${err}`, `Response:${res}`)
}
</script>

<style lang="scss">
.view {
  @include Desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
}
</style>