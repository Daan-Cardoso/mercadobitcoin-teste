<template>
  <div class="form-step">
    <header class="form-step__header">
      <p class="form-step__display">
        Etapa <em class="form-step__header__display--highlight">
          {{ currentStep }}</em> de {{ totalSteps }}
      </p>
  
      <h2 class="form-step__header__title">
        {{ title }}
      </h2>
    </header>

    <div class="form-step__body">
      <div class="form-step__fieldset" v-for="(field, name) in schema" :key="name">
        <template v-if="field?.type == 'radio'">
          <c-radio
            v-for="(option, index) in field?.options"
            :key="index"
            :name="name"
            v-bind="option"
            v-model="formData[name]"
          />
        </template>
        
        <template v-else>
          <c-input
            v-bind="field"
          />
        </template>
      </div>
  
      <div class="form-step__actions">
        <template v-for="(action, name) in actions" :key="name">
          <c-button
            :outlined="name === 'prev'"
            :text="action"
            @click="$emit(`action:${name}`)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import CInput from './CInput.vue'
import CButton from './CButton.vue'
import CRadio from './CRadio.vue'

defineProps({
  title: { type: String, required: false },
  currentStep: { type: Number, required: true },
  totalSteps: { type: Number, required: true },
  formData: { type: Object, required: true },
  actions: { type: Object, required: true },
  schema: { type: Object, required: true },
})

defineEmits(['action:prev', 'action:next', 'action:submit'])

</script>

<style lang="scss">
.form-step {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  &__header {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;

    &__display {
      color: $dark;
      font-size: .5rem;
      letter-spacing: -0.4px;

      &--highlight {
        color: $primary;
        font-style: inherit;
      }
    }

    &__title {
      color: $dark;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }


  &__fieldset {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;

    @include Tablet {
      justify-content: flex-start;
    }
  }
}
</style>