<template>
  <form class="multi-step-form" @submit.prevent>
    <template v-if="loading">
      <c-spinner :active="loading" />
    </template>

    <template v-else-if="success">
      <p class="multi-step-form__success-mesage">
        {{ success }}
      </p>
    </template>

    <template v-else>
      <template v-for="(step, index) in steps" :key="'step' + (index + 1)">
        <form-step
          v-if="activeStep == index"
          :readonly="step?.readonly"
          :actions="step.actions"
          :current-step="index + 1"
          :form-data="formData"
          :step-schema="setSchema(index)"
          :title="step.title"
          :total-steps="steps?.length"
          @action:next="$emit('action:next')"
          @action:prev="$emit('action:prev')"
          @action:submit="$emit('action:submit')"
        />
      </template>
    </template>
  </form>
</template>

<script setup>
import FormStep from './FormStep.vue'
import CSpinner from './CSpinner.vue'

const { steps, schema, formData } = defineProps({
  steps: { type: Array, required: true },
  activeStep: { type: Number, required: true },
  formData: { type: Object, required: true },
  schema: { type: Object, default: () => ({}) },
  loading: { type: Boolean, default: false },
  success: { type: String, default: '' }
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
.multi-step-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: $white;
  min-height: 530px;

  @include Desktop {
    max-width: 960px;
    margin: 0 auto;
    padding: 60px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: .5rem;
  }

  &__success-mesage {
    color: $success;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
}
</style>