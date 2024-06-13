<template>
  <label class="c-input">
    <span class="c-input__label">
      {{ label }}
    </span>

    <div class="c-input__field">
      <input
        class="c-input__field__raw"
        v-bind="inputAttrs"
        v-model="value"
      />
    </div>
  </label>
</template>

<script setup>
import { defineModel, useAttrs, defineOptions } from 'vue'

defineProps({
  label: String
})

defineOptions({ inheritAttrs: false })

const $attrs = useAttrs()
const value = defineModel()

const filteredAttrs = (attrs) => {
  return Object.fromEntries(
    Object.entries(attrs).filter(([key]) => key !== 'class')
  )
}

const inputAttrs = filteredAttrs($attrs)
</script>

<style lang="scss" scoped>
.c-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .5rem;


  @include Desktop {
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
  }

  &__label {
    display: block;
  }

  &__field {
    border-radius: .5rem;
    border: 1px solid $black;
    width: 100%;

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