<template>
  Materia seleccionada
  <button @click="localRouter.push('/')">Regresar</button>
  <br/>
  {{ matterStore.selectedMatter }}
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useMatterStore } from './data/core/local/pinia/useMatterStore'

const localRouter = useRouter()
const matterStore = useMatterStore()



</script>
