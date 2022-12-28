import { AreaResponse } from "../../data/core/network/entities/response/AreaType";
import { AreaModel } from '../models/AreaModel';

export const mapAreaList = (areaResponse: AreaResponse): AreaModel => {
  const areaListMapped: AreaModel = {
      name: areaResponse.name,
      id: areaResponse.id,
      nameOriginal: areaResponse.name_original ? areaResponse.name_original : 'Sin Nombre Original',
      active: Boolean(areaResponse.active)
    } as AreaModel
  return areaListMapped
}