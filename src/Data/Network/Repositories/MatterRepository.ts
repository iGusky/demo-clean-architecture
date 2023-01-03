import type {MatterResponse} from "@/Data/Network/Entities/response/MatterResponse";
import type {ApiOptions} from "@/Data/Network/ApiOptions";
import Api from "@/Data/Network/Api";

export default  {

    getAll: function (options: ApiOptions) : Promise<MatterResponse[]> {
        return new Promise<MatterResponse[]> ((resolve, reject) => {
            const response : MatterResponse[] = []
            Api(options).get('/v1/catalogs/matter/get/all')
                .then((axiosResponse) => {
                    axiosResponse.data.data.map((row: MatterResponse) => {
                    response.push(row as MatterResponse)
                })
                resolve (response)
            })
                .catch(() => {
                // Manejar excepción
                resolve([])
            })
        })

    }

}