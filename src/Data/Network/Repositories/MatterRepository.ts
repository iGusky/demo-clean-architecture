import type {MatterResponse} from "@/Data/Network/Entities/response/MatterResponse";
import type {ApiOptions} from "@/Data/Network/ApiOptions";
import Api from "@/Data/Network/Api";

export default  {

    getAll: function (options: ApiOptions) : MatterResponse[] {
        let response : Array<MatterResponse> = new Array<MatterResponse>()

        Api(options).get('/v1/catalogs/matter/get/all').then((axiosResponse) => {
            axiosResponse.data.data.map((row: MatterResponse) => {
                response.push(row as MatterResponse)
            })
        })

        return response
    }

}