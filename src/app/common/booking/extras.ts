import {AddonItem} from "./addon-item";

export class Extras {
  addonList: AddonItem[];
  isPaid: boolean;


  constructor(addonList: AddonItem[], isPaid: boolean) {
    this.addonList = addonList;
    this.isPaid = isPaid;
  }
}
