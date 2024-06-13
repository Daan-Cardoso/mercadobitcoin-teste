<template>
  <div>
    <c-input
      label="Name"
      placeholder="Enter your name"
      v-model="name"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CInput from './components/CInput.vue'

const name = ref('')
</script>

<style lang="scss" scoped>

</style>