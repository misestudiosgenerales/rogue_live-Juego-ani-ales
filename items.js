class Item {
    constructor(){
        this.cantidad = 0;

        this.change = true; //cambiar animal
        this.passlevel = false; // pasar de nivel
    }
};
class Leche extends Item{
    constructor(cantidad){
        super(cantidad)
        let num=floor(random(5)+1);
        this.cantidad=num;
        this.imagen=textures.leche;
    }

};
class Huevos extends Item{
    constructor(cantidad){
        super(cantidad)
        let num=floor(random(5)+1);
        this.cantidad=num;
        this.imagen=textures.huevo;
    }

};
class Queso extends Item{
    constructor(cantidad){
        super(cantidad)
        let num=floor(random(5)+1);
        this.cantidad=num;
        this.imagen=textures.queso;
    }

};
class Heno extends Item{
    constructor(change){
        super(change)
        this.cantidad=floor(random(3)+1);

        this.imagen=  textures.heno
                
    }
}

class Planta extends Item{
    constructor(change){
        super(change)
        this.cantidad=floor(random(5)+1);
        this.imagen=textures.planta
    }
}
class Pasto extends Item{    
    constructor(change){
        super(change)
        this.cantidad=floor(random(5)+1);
        this.imagen=textures.pasto
    }     
                
}   
class Granja_tierra extends Item{
    constructor(change){
        super(change)
        this.imagen= textures.granja_tierra
        
    }
    
}

class Granja_agua extends Item{
    constructor(change){
        super(change)
        this.imagen= textures.granja_agua
        
    }
    
}
class Moneda extends Item{
    constructor(cantidad){
        super(cantidad)
        // this.time = 0.5;
        // imagen = [textures.moneda.primero, textures.moneda.segundo,textures.moneda.tercero,textures.moneda.cuarto,textures.moneda.quinto, textures.moneda.sexto];
        // do {
            
        // } while (condition);
        // this.imagen= [textures.moneda.primero, textures.moneda.segundo,textures.moneda.tercero,textures.moneda.cuarto,textures.moneda.quinto, textures.moneda.sexto];
        this.imagen=textures.moneda.primero;
    }
    
}



// class Cambio extends Item{
//     constructor(mano){
//         super(mano)
//         this.imagen=textures.huevo;
//     }

// };
// class Potion extends Item{
//     constructor(name, weight){
//         super(name,weight)
//         this.emoji='🧴';
//     }
// }
// class Weapon extends Item{
//     constructor(name, weight){
//         super(name,weight)
//         this.emoji='🔫';

//     }
// }
// class Comida extends Item{
//     constructor(name,weight){
//         super(name,weight)
//         this.emoji='🍕';
//     }
    
