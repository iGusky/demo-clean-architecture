import type {ApiOptions} from "@/Data/Network/ApiOptions";
import api from "@/Data/Network/Api";
import type {AxiosError, AxiosResponse} from "axios";

export default {
    getXDA: function (options: ApiOptions) {
        return new Promise( async ( resolve, reject ) => {
            api(options).get('/v1/xda/' + Math.random() * (6 - 1 + 1) + 1)
                .then((response: AxiosResponse) => {
                    resolve(response.data)
                })
                .catch((error: AxiosError) => {
                    resolve({})
                })
        } )
    }
}