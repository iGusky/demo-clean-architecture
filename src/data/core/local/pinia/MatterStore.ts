import { defineStore } from 'pinia'
import userMatterStore from '../../../../domains/composables/useMatterStore';

export const matterStore = defineStore('materia',() => {
  const { isMatterSelected, selectedMatter, setSelectedMatter } = userMatterStore()

  return {
    isMatterSelected,
    selectedMatter,
    setSelectedMatter
  }
})