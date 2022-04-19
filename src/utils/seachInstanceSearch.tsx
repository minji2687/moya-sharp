import { MasterItem, MasterListObj } from "./master";

export function seachInstanceSearch(keyword: MasterListObj, inputText: string) {
  let obj: { [key: string]: MasterItem[] } = {};
  for (let key in keyword) {
    keyword[key].forEach((item: MasterItem) => {
      if (
        item.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())
      ) {
        obj[key] ? obj[key].push(item) : (obj[key] = [item]);
      }
    });
  }
  return obj;
}
