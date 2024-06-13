<template>
  <label class="c-radio">
    <input type="radio" class="c-radio__field" v-bind="radioAttrs" v-model="value" />

    <span class="c-radio__indicator"></span>

    <span class="c-radio__label" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { defineOptions, useAttrs, defineModel } from 'vue'
import { filteredAttrs } from '../helpers/filterAttributes'

defineProps({
  label: { type: String, required: false }
})

defineOptions({ inheritAttrs: false })

const value = defineModel()

const $attrs = useAttrs()

const radioAttrs = filteredAttrs($attrs, ['type', 'class'])
</script>

<style lang="scss">
.c-radio {
  align-items: center;
  display: inline-flex;
  gap: .5rem;
  cursor: pointer;

  &__field {
    display: none;

    &:checked + .c-radio__indicator::after {
      display: block;
    }
  }

  &__indicator {
    $size: 12px;
    border-radius: 50%;
    border: 1px solid $dark;
    box-sizing: border-box;
    height: $size;
    padding: 2px;
    position: relative;
    width: $size;

    &::after {
      background-color: $white;
      border-radius: inherit;
      border: 1px solid $dark;
      box-sizing: inherit;
      content: '';
      display: none;
      height: calc($size / 1.5);
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc($size / 1.5);
    }
  }
}
</style>