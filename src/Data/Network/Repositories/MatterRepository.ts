import type {MatterResponse} from "@/Data/Network/Entities/response/MatterResponse";
import type {ApiOptions} from "@/Data/Network/ApiOptions";
import Api from "@/Data/Network/Api";

export default  {

    get: function (options: ApiOptions) : MatterResponse[] {
        let response: MatterResponse[] = []

        Api(options).get('/v1/catalogs/matter/get/all').then((axiosResponse) => {
            axiosResponse.data.data.map((row: MatterResponse) => {
                response.push(row)
            })
        })

        return response
    },

    getAll: async function (options: ApiOptions) {
        const response = await Api(options).get('/v1/catalogs/matter/get/all');
        return response.data.data as MatterResponse[]
    }

}