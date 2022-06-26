export class pizzaChoice {
    id ?: number;
    name ?: string;
    option ?: string;
    picture ?: string;
    price ?: number;
    priceTotal : number;
    quantity : number ;

    constructor (id ?: number, name ?: string, option ?: string,picture ?: string, price ?: number){
       this.id = id;
       this.name = name;
       this.option = option;
       this.picture = picture;
       this.price = price;
       this.priceTotal = 0;
       this.quantity = 0;         
   }
}
