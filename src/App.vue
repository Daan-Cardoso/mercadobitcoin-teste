<template>
  <div class="actions">
    <multi-step-form
      :activeStep="activeStep"
      :formData="formData"
      :schema="schema"
      :steps="steps"
      @action:next="nextStep"
      @action:prev="prevStep"
      @action:submit="submit"
    />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { steps as registerSteps, schema as fullSchema } from './schema/Register'
import MultiStepForm from './components/MultiStepForm.vue'

const formData = reactive({
  name: '',
  email: '',
  typePerson: '',
  document: '',
  date: '',
  phone: '',
  password: ''
})

const activeStep = ref(0)

const steps = computed(() => registerSteps(formData))
const schema = fullSchema(formData)

const nextStep = () => {
  if(activeStep.value < steps.value.length) {
    activeStep.value++
  }
}

const prevStep = () => {
  if(activeStep.value > 0) {
    activeStep.value--
  }
}

const submit = () => {
  console.log(formData)
}
</script>

<style lang="scss">
</style>