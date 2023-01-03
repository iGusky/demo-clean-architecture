import axios, {AxiosError} from "axios";
import type {AxiosResponse} from "axios"
import {API_BASE} from "@/Data/Network/Urls";
import type {ApiOptions} from "@/Data/Network/ApiOptions";
import {HandlerException} from "@/Data/Exceptions/HandlerException";
import {HandlerSuccess} from "@/Data/Exceptions/HandlerSuccess";

export default (options: ApiOptions) => {
    const axiosIntance = axios.create({
        baseURL : API_BASE,
        headers : {
            Authorization : `Bearer ${options.token}`
        }
    })

    axiosIntance.interceptors.response.use(function (response: AxiosResponse)  {
        if(response.status !== 200) HandlerSuccess(response.status)
        return response
    }, function (error: AxiosError) {
        HandlerException(error.response.status)
        return {}
    })

    return axiosIntance
}