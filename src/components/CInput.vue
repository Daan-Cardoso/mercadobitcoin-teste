<template>
  <label class="c-input">
    <span class="c-input__label" v-if="label">
      {{ label }}
    </span>

    <div class="c-input__field">
      <input
        class="c-input__field__raw"
        v-bind="inputAttrs"
        v-mask="mask"
        v-model="value"
      />
    </div>
  </label>
</template>

<script setup>
import { defineModel, useAttrs, defineOptions } from 'vue'
import { filteredAttrs } from '../helpers/formHelpers'

defineProps({
  label: { type: String, required: false },
  mask: { type: String, required: false }
})

defineOptions({ inheritAttrs: false })

const $attrs = useAttrs()
const value = defineModel()

const inputAttrs = filteredAttrs($attrs)
</script>

<style lang="scss">
.c-input {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  gap: .25rem;
  width: 100%;

  @include Desktop {
    gap: .5rem;
  }

  &__label {
    color: $dark;
    display: block;
    font-size: .8rem;
    letter-spacing: -0.4px;
    flex-shrink: 0;

    @include Desktop {
      font-size: 1rem;
    }
  }

  &__field {
    border-radius: .5rem;
    border: 1px solid $dark;
    width: 100%;

    &:focus-within {
      border-color: $primary;
    }

    &__raw {
      border-radius: inherit;
      border: none;
      box-sizing: border-box;
      padding: 10px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>