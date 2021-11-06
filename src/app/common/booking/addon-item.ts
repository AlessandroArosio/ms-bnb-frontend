export class AddonItem {
  category: string;
  type: string;
  price: number;
  quantity: number;


  constructor(category: string, type: string, price: number, quantity: number) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.quantity = quantity;
  }
}
