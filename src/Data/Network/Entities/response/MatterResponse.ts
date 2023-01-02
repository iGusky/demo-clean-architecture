import type {AreaResponse} from "@/Data/Network/Entities/response/AreaResponse";

export interface MatterResponse {
    id:            number;
    area_id:       number;
    code?:         string;
    abbreviation?: string;
    name?:         string;
    active:        number;
    area:          AreaResponse;
}