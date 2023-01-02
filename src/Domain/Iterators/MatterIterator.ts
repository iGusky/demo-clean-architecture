import type {MatterModel} from "@/Domain/Models/MaterModel";
import type {MatterResponse} from "@/Data/Network/Entities/response/MatterResponse";
import AreaIterator from "@/Domain/Iterators/AreaIterator";

export default {

    toModel : function (response : MatterResponse) {
        return {
            id: response.id,
            areaId: response.area_id,
            code: response.code,
            abb: response.abbreviation,
            name: response.name,
            active: Boolean(response.active),
            area: AreaIterator.toModel(response.area)
        } as MatterModel
    },

    toModels : function (response : MatterResponse[]) {
        return response.map((matter: MatterResponse) => {
            return this.toModel(matter)
        }) as MatterModel[]
    }

}
