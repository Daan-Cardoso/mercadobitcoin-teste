<template>
  <div class="actions">
    <CButton class="teste" text="Voltar" outlined @click="submit" />
    <CButton class="teste" text="Continuar" @click="submit" />
  </div>
  <div>
    <c-radio label="Pessoa física" name="tipoPessoa" value="PF" v-model="tipoPessoa" />
    <c-radio label="Pessoa jurídica" name="tipoPessoa" value="PJ" v-model="tipoPessoa" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CButton from './components/CButton.vue'
import CRadio from './components/CRadio.vue'

const name = ref('')
const tipoPessoa = ref(null)

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