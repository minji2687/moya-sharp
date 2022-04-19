import { masterApi } from "../api/masterApi";

export type MasterItem = {
  exchange?: string;
  name: string;
  paramValue: string;
};

export type MasterListObj = {
  category: Array<MasterItem>;
  commodities: Array<MasterItem>;
  events: Array<MasterItem>;
  fx: Array<MasterItem>;
  index: Array<MasterItem>;
  macrotopic: Array<MasterItem>;
  sectors: Array<MasterItem>;
  startup: Array<MasterItem>;
  tickers: Array<MasterItem>;
  topics: Array<MasterItem>;
  [arg: string]: Array<MasterItem>;
};

export let master: MasterListObj;
export let category: Array<MasterItem> = [];
export let sectors: Array<MasterItem> = [];
export let startup: Array<MasterItem> = [];
export let tickers: Array<MasterItem> = [];

export async function fetchMaster() {
  let res: MasterListObj = await masterApi();
  master = res;
  category = res.category;
  startup = res.startup;
  sectors = res.sectors;

  return { master, category, startup, sectors };
}
