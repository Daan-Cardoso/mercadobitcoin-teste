<template>
  <form class="multi-step-form" @submit.prevent>
    <template v-for="(step, index) in steps" :key="'step' + (index + 1)">
      <template v-if="activeStep == index">
        <form-step
          :actions="step.actions"
          :form-data="formData"
          :schema="setSchema(index)"
          :current-step="index + 1"
          :total-steps="steps?.length"
          :title="step.title"
          @action:prev="$emit('action:prev')"
          @action:next="$emit('action:next')"
          @action:submit="$emit('action:submit')"
        />
      </template>
    </template>
  </form>
</template>

<script setup>
import FormStep from './FormStep.vue'

const { steps, schema } = defineProps({
  steps: { type: Array, required: true },
  activeStep: { type: Number, required: true },
  formData: { type: Object, required: true },
  schema: { type: Object, default: () => ({}) }
})

defineEmits(['action:prev', 'action:next', 'action:submit'])

const setSchema = (stepIndex) => {
  const currentStepFields = steps[stepIndex]?.fields
  const filteredSchema = {}
  
  currentStepFields.forEach(field => {
    if (schema[field]) {
      filteredSchema[field] = schema[field]
    }
  })

  return filteredSchema
}
</script>

<style lang="scss">

</style>