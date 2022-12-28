import { getAllMatters } from "../../data/core/network/client/MatterService"
import { MatterResponse } from "../../data/core/network/entities/response/MatterType";
import { MatterModel } from '../models/MatterModel';
import { mapAreaList } from "./AreaMapper";

export const mapMatterList = async () => {
  const matterList = await getAllMatters()
  const mappedMatterList: MatterModel[] = matterList?.map(
    (matter: MatterResponse) => {
      return {
        id: matter.id,
        code: matter.code && matter.code !== '' ? matter.code : 'S/N',
        abb: matter.abbreviation ? matter.abbreviation : 'S/N',
        name: matter.name ? matter.name : 'S/N',
        active: Boolean(matter.active),
        areaId: matter.area_id,
        area: mapAreaList(matter.area)
      } as MatterModel
  }
  )!
  return mappedMatterList as MatterModel[]
}