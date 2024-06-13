<template>
  <div>
    <CButton class="teste" text="teste" outlined @click="submit" />
    <CButton class="teste" text="teste 2" @click="submit" />
    <CButton class="teste" text="teste 2" @click="submit" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CButton from './components/CButton.vue'

const name = ref('')

const submit = () => {
  console.log('clicked')
}
</script>

<style lang="scss" scoped>

</style>