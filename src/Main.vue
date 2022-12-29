<script setup lang="ts">
import useMatter from './ui/composables/useMatter';
import {useMatterStore} from './data/core/local/pinia/useMatterStore'
import { useRouter } from 'vue-router';

const { matterList } = useMatter()
const localRouter = useRouter()
const matterStore = useMatterStore()
</script>

<template>
  <h1>Lista de materias</h1>
  <button @click="localRouter.push('/about')">Ir a siguiente</button>
  <h3 v-if="matterStore.isMatterSelected">
    Materia seleccionada: {{ matterStore.selectedMatter.name }}
  </h3>

  <div class="matter-list">
    <div v-for="(matter, index) in matterList" :key="index">
    <ul 
      class="matter-list-properties" 
      @click="() => matterStore.setSelectedMatter(matter)"
    >
      <li>ID: {{ matter.id }}</li>
      <li>Nombre: {{ matter.name }}</li>
      <li>Area: {{ matter.area.name }}</li>
      <li>Código: {{ matter.code }}</li>
    </ul>
    <br/>
  </div>
  </div>
</template>

<style scoped>
.matter-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.matter-list-properties {
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
  width: 250px;
  transition: .2s ease-in all;
}
.matter-list-properties:hover {
  background-color: #dddddd;
}
ul li {
  list-style-type: none;
}
</style>
