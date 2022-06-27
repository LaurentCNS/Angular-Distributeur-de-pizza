export class pizzaChoice {
    idOrder ?: number;
    idPizza ?: number;
    name ?: string;
    option ?: string;
    picture ?: string;
    price ?: number;
    priceTotal : number;
    quantity : number ;

    constructor (idOrder ?: number,idPizza ?: number, name ?: string, option ?: string,picture ?: string, price ?: number){
       this.idOrder = idOrder;
       this.idPizza = idPizza;
       this.name = name;
       this.option = option;
       this.picture = picture;
       this.price = price;
       this.priceTotal = 0;
       this.quantity = 0;         
   }
}
