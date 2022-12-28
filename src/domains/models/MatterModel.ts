import { AreaModel } from './AreaModel';

export interface MatterModel {
  id:           number;
  areaId:       number;
  code:         string;
  abb:          string;
  name:         string;
  active:       boolean;
  area:         AreaModel;
}