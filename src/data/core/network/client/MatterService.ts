import { AxiosResponse } from 'axios'
import instance from '../api'
import { MatterResponse } from '../entities/response/MatterType'

// GET
export const getAllMatters = async () => {
  try {
    const response: AxiosResponse = await instance.get('/v1/catalogs/matter/get/all')
    return response.data.data as MatterResponse[]
  } catch (error) {
    
  }
}

// POST
// PUT
// DELETE
