export class Pizza {
    id ?: number;
    name ?: string;
    picture ?: string;
    information ?: string;
    priceCold ?: number;
    priceHot ?: number;
    bonus ?: number;
    composants : string[] = [];
    

    constructor (id ?: number, name ?: string, picture ?: string , information ?: string,
         priceCold ?: number, priceHot ?: number, bonus ?: number, composants : string[] = []){
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.information = information;
        this.priceCold = priceCold;
        this.priceHot = priceHot;
        this.bonus = bonus;  
        this.composants = composants;            
    }
}
