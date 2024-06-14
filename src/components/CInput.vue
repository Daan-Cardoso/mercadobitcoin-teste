<template>
  <label class="c-input">
    <span class="c-input__label" v-if="label">
      {{ label }} <em class="c-input__label__required">{{ $attrs.required ? '*' : '' }}</em>
    </span>

    <div :class="['c-input__field', classModifiers ]">
      <input
        class="c-input__field__raw"
        v-bind="inputAttrs"
        v-model="value"
      />
      </div>
      
      <span class="c-input__error" v-if="!!error">
        {{ error }}
      </span>
  </label>
</template>

<script setup>
import { defineModel, useAttrs, defineOptions, computed } from 'vue'
import { filteredAttrs } from '../helpers/formHelpers'

const { error } = defineProps({
  label: { type: String, required: false },
  mask: { type: String, required: false },
  type: { type: String, default: 'text' },
  error: { type: String, required: false }
})

defineOptions({ inheritAttrs: false })

const $attrs = useAttrs()
const value = defineModel()

const classModifiers = computed(() => {
  return {
    'c-input__field--has-error': !!error
  }
})

const inputAttrs = filteredAttrs($attrs, ['type', 'class', 'required', 'validation'])
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

    &__required {
      font-size: 1rem;
      color: $danger;
    }
  }

  &__field {
    border-radius: .5rem;
    border: 1px solid $dark;
    width: 100%;

    &:focus-within {
    border-color: $primary;
    }
      
    &--has-error {
      border-color: $danger;
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

  &__error {
    color: $danger;
    font-size: .8rem;
    letter-spacing: -0.4px;
  }
}
</style>