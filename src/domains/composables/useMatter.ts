import { ref } from "vue"
import { mapMatterList } from "../interactors/MatterMapper"
import { MatterModel } from "../models/MatterModel"

const useMatter = () => {
  // Variables
  const matterList = ref<MatterModel[]>([]) 
  
  //Funciones
  const loadMatterList = async() => {
    matterList.value = await mapMatterList()
  }
  loadMatterList()
  return {matterList}
}

export default useMatter