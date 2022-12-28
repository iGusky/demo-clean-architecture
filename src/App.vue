<script setup lang="ts">
import useMatter from './domains/composables/useMatter';
const { matterList } = useMatter()
</script>

<template>
  <div v-for="(matter, index) in matterList" :key="index">
    <ul>
      <li>{{ matter.id }}</li>
      <li>{{ matter.name }}</li>
      <li>{{ matter.areaId }}</li>
      <li>{{ matter.code }}</li>
    </ul>
    <br/>
  </div>
</template>

<style scoped>
</style>
