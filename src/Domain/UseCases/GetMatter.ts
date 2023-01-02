import MatterRepository from "@/Data/Network/Repositories/MatterRepository";
import MatterIterator from "@/Domain/Iterators/MatterIterator";

export default {

    async getAll() {
        const get = MatterRepository.get({token : ''})

        const getData = await MatterRepository.getAll({token : '132|SzbUeGOT27Lyl6IomEkrqVw0vDEqvQDIZvCNFars'})
        return MatterIterator.toModels(getData)
    }

}