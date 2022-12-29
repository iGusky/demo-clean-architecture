<script setup lang="ts">
import useMatter from './domains/composables/useMatter';
import { matterStore } from './data/core/local/pinia/MatterStore'
const matterStoreObject = matterStore() 
const { matterList } = useMatter()
</script>

<template>
  <h1>Lista de materias</h1>
  <h3 v-if="matterStoreObject.isMatterSelected">
    Materia seleccionada: {{ matterStoreObject.selectedMatter.name }}
  </h3>

  <div class="matter-list">
    <div v-for="(matter, index) in matterList" :key="index">
    <ul 
      class="matter-list-properties" 
      @click="() => matterStoreObject.setSelectedMatter(matter)"
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
