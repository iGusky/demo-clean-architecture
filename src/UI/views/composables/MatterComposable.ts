import {ref} from "vue";
import type {MatterModel} from "@/Domain/Models/MaterModel";
import GetMatter from "@/Domain/UseCases/GetMatter";


export default {

    getAllMatter() {
        const listOfMatters = ref<MatterModel[]>([])

        const load = async () => {
            listOfMatters.value = await GetMatter.getAll()
        }

        load()

        return listOfMatters
    }

}

