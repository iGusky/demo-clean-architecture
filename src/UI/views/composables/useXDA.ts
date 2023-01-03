import GetXDA from "@/Domain/UseCases/GetXDA";
import {ref} from "vue";

const useXDA = () => {
    const XDA = ref();
    const getXDA = async () => {
        XDA.value = await GetXDA.getXDA()
    }

    return {
        XDA, getXDA
    }
}

export default useXDA