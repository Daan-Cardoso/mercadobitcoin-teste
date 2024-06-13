<template>
  <div class="actions">
    <CButton class="teste" text="Voltar" outlined @click="submit" />
    <CButton class="teste" text="Continuar" @click="submit" />
  </div>
  <div>
    <c-radio>Pessoa física</c-radio>
    <c-radio>Pessoa jurídica</c-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CButton from './components/CButton.vue'
import CRadio from './components/CRadio.vue'

const name = ref('')

const submit = () => {
  console.log('clicked')
}
</script>

<style lang="scss">
.actions {
  width: 270px;

  display: flex;
  justify-content: space-between;
  
  > .c-button:not(:only-child) {
    max-width: max-content;
  }
}
</style>