import axios from "axios";
import {API_BASE} from "@/Data/Network/Urls";
import type {ApiOptions} from "@/Data/Network/ApiOptions";

export default (options: ApiOptions) => {
    return axios.create({
        baseURL : API_BASE,
        headers : {
            Authorization : `Bearer ${options.token}`
        }
    })
}