import type {AreaResponse} from "@/Data/Network/Entities/response/AreaResponse";
import type {AreaModel} from "@/Domain/Models/AreaModel";

export default {

    toModel(response: AreaResponse) {
        return {
            id: response.id,
            name: response.name,
            nameOriginal: response.name_original ?? 'N/A',
            active: Boolean(response.active),
        } as AreaModel
    }

}