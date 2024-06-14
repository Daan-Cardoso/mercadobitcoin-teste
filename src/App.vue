<template>
  <main class="view">
    <multi-step-form
      :activeStep="activeStep"
      :formData="formData"
      :schema="schema"
      :steps="steps"
      @action:next="nextStep"
      @action:prev="prevStep"
      @action:submit="submit"
    />

    <c-input mask="###.###.###-##" v-model="teste" />
  </main>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { steps as registerSteps, schema as fullSchema } from './schema/Register'
import MultiStepForm from './components/MultiStepForm.vue'
import CInput from './components/CInput.vue'

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
const teste = ref('')

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