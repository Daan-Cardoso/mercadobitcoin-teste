<template>
  <div class="c-spinner" v-if="active">
    <div class="c-spinner__element"></div>
  </div>
</template>

<script setup>
  defineProps({
    active: { type: Boolean, default: false },
  })
</script>

<style lang="scss">
.c-spinner {
  height: 100%;
  width: 100%;
  
  &__element {
    animation: spin 1s linear infinite;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: $primary;
    height: 40px;
    left: 50%;
    margin: -20px 0 0 -20px;
    position: absolute;
    top: 50%;
    width: 40px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>