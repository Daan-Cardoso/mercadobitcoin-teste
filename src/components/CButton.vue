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
import { filteredAttrs } from '../helpers/filterAttributes'

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

<style lang="scss" scoped>
.c-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 10px;
  border-radius: .5rem;
  width: 100%;
  transition: all linear .3s;

  &:not(:disabled) {
    background-color: $primary;
    color: $white;
    cursor: pointer;

    &:hover {
      background-color: rgba($primary, .7 );
    }
  }

  &--outlined:not(:disabled) {
    border-color: $primary;
    color: $primary;
    background-color: transparent;

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