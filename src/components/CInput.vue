<template>
  <label class="c-input">
    <span class="c-input__label" v-if="label">
      {{ label }} <em class="c-input__label__required">{{ $attrs.required ? '*' : '' }}</em> {{ $attrs.readonly ? '(somente leitura)' : '' }}
    </span>

    <div :class="['c-input__field', classModifiers ]">
      <input
        class="c-input__field__raw"
        v-bind="inputAttrs"
        :type="type === 'password' && showPassword ? 'text' : type"
        v-model="value"
      />

      <template v-if="type === 'password'">
        <img
          @click="toggleShowPassword"
          class="c-input__field__toggle-password"
          :src="showPassword ? '/closed-eye.svg' : '/opened-eye.svg'"
        />
      </template>
      </div>
      
      <span class="c-input__error" v-if="!!error">
        {{ error }}
      </span>
  </label>
</template>

<script setup>
import { defineModel, useAttrs, defineOptions, computed, ref } from 'vue'
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
const showPassword = ref(false)

const classModifiers = computed(() => {
  return {
    'c-input__field--has-error': !!error
  }
})

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

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

    &:has(&__toggle-password) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .c-input{
        width: calc(100% - 30px);
      }
    }

    &__toggle-password {
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin-right: 10px;

      &:hover {
        opacity: .8;
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