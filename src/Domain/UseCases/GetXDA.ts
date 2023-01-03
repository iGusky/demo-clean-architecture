import XDARepository from "@/Data/Network/Repositories/XDARepository";

export default {
    async getXDA () {
        const xda = await XDARepository.getXDA({token : '132|SzbUeGOT27Lyl6IomEkrqVw0vDEqvQDIZvCNFars'})
        return xda
    }
}