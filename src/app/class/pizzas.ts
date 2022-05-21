export class Pizza {
    id ?: number;
    name ?: string;
    picture ?: string;
    priceCold ?: number;
    priceHot ?: number;
    bonus ?: number;
    composant1 ?: string;
    composant2 ?: string;
    composant3 ?: string;
    composant4 ?: string;
    composant5 ?: string;
    composant6 ?: string;
    composant7 ?: string;
    composant8 ?: string;
    

    constructor (id ?: number, name ?: string, picture ?: string ,priceCold ?: number, priceHot ?: number, bonus ?: number, composant1 ?: string, composant2 ?: string, composant3 ?: string, composant4 ?: string, composant5 ?: string, composant6 ?: string, composant7 ?: string, composant8 ?: string){
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.priceCold = priceCold;
        this.priceHot = priceHot;
        this.bonus = bonus;  
        this.composant1 = composant1;
        this.composant2 = composant2; 
        this.composant3 = composant3;   
        this.composant4 = composant4;   
        this.composant5 = composant5;   
        this.composant6 = composant6;   
        this.composant7 = composant7;   
        this.composant8 = composant8;   
            
    }
}
