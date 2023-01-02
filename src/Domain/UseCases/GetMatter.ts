import MatterRepository from "@/Data/Network/Repositories/MatterRepository";
import MatterIterator from "@/Domain/Iterators/MatterIterator";

export default {

    getAll() {
        const getData = MatterRepository.getAll({token : '132|SzbUeGOT27Lyl6IomEkrqVw0vDEqvQDIZvCNFars'})
        return MatterIterator.toModels(getData)
    }

}