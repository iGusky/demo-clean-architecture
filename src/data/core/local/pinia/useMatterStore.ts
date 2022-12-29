import { defineStore } from 'pinia'
import { MatterModel } from '../../../../domains/models/MatterModel';
import { computed, ref } from 'vue';

export const useMatterStore = defineStore('materia',() => {
  const selectedMatter = ref<MatterModel>({
    id: -1,
    name: '',
    abb: '',
    code: '',
    areaId: -1,
    area: {
      active: false,
      id: -1,
      name: '',
      nameOriginal: ''
    },
    active: false,
  })

  const isMatterSelected = computed ( () => selectedMatter.value.id > -1)

  function setSelectedMatter(matter: MatterModel) {
    selectedMatter.value = matter
  }

  return { selectedMatter, isMatterSelected, setSelectedMatter}
})