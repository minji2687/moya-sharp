import { MasterItem } from "./master";
type SectorKey = {
  [arg: string]: Array<MasterItem>;
};
// 키워드 모달의 filtering 리스트를 위한 로직,
export function divideSectorKey(sector: Array<MasterItem>) {
  let sectorKey: SectorKey = {};
  for (let i = 0; i < sector.length; i++) {
    if (i === 0 || sector[i].name[0] !== sector[i - 1].name[0]) {
      sectorKey[sector[i].name[0]] = [sector[i]];
    } else {
      sectorKey[sector[i].name[0]].push(sector[i]);
    }
  }
  return sectorKey;
}
