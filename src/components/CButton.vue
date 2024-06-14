<template>
  <button
    :class="['c-button', classModifiers]"
    v-bind="buttonAttrs"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup>
import { useAttrs, defineOptions, computed } from 'vue'
import { filteredAttrs } from '../helpers/formHelpers'

const { outlined } = defineProps({
  text: { type: String, required: false },
  outlined: { type: Boolean, required: false }
})
  
defineOptions({ inheritAttrs: false })

const $attrs = useAttrs()

const buttonAttrs = filteredAttrs($attrs)

const classModifiers = computed(() => {
  return {
    'c-button--outlined': outlined
  }
})
</script>

<style lang="scss">
.c-button {
  align-items: center;
  border-radius: .5rem;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  padding: 10px 40px;
  transition: all linear .3s;
  width: 100%;

  &:not(:disabled) {
    background-color: $primary;
    color: $white;
    cursor: pointer;

    &:hover {
      background-color: rgba($primary, .7);
    }
  }

  &--outlined:not(:disabled) {
    background-color: transparent;
    border-color: $primary;
    color: $primary;

    &:hover {
      background-color: $primary;
      color: $white;
    }
  }

  &:focus {
    border-color: $dark;
  }
}
</style>