import { AreaResponse } from "./AreaType";

export interface MatterResponse {
  id:            number;
  area_id:       number;
  code?:         string;
  abbreviation?: string;
  name?:         string;
  active:        number;
  area:          AreaResponse;
}