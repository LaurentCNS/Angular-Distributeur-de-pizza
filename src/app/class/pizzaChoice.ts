export class pizzaChoice {
    name ?: string;
    option ?: string;
    price ?: number;
    quantity ?: number;

    constructor (name ?: string, option ?: string, price ?: number, quantity ?: number){
       this.name = name;
       this.option = option;
       this.price = price;
       this.quantity = quantity;         
   }
}
