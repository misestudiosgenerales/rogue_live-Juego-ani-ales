class Cell{
    constructor(terrain, move){
        this.terrain = terrain;
        // this.move = move;
        this.item = null;
    }

    
}
class Hierba extends Cell{
    constructor(){
        super();
        this.terrain = "hierba";
        // this.move = true;
    }
    display(x,y,size){
        image(textures.grass, x*size, y*size,size,size);
        if (this.item != null) {
            // textSize(size)
            // textAlign(CENTER,CENTER)
            image(this.item.imagen,x*size, y*size,size,size);
            
        } 
    }

    }

class piedra extends Cell {
    constructor(){
        super();
        this.terrain = "piedra";
        // this.move = true;

    }
    display(x,y,size){
        image(textures.stump, x*size, y*size,size,size);
        if (this.item != null) {
            // textSize(size)
            // textAlign(CENTER,CENTER)
            image(this.item.imagen,x*size, y*size,size,size);
            
        } 
    }
}
class Agua extends Cell {
    constructor(){
        super();
        this.terrain = "agua";
        this.move = true;

    }
    display(x,y,size){
        image(textures.agua, x*size, y*size,size,size);
        if (this.item != null) {
            // textSize(size)
            // textAlign(CENTER,CENTER)
            image(this.item.imagen,x*size, y*size,size,size);
            
        } 
    }
}

// class Granja extends Cell {
//     constructor(){
//         super();
//         this.terrain = "meta";
//     }
//         display(x,y,size){
//             image(textures.granja_tierra, x*size, y*size,size,size);
        
//     }

// }
// class granja_agua extends Cell {
//     constructor(){
//         this.terrain = "meta";
//     }
//         display(x,y,size){
//             image(textures.granja_agua, x*size, y*size,size,size);
//         }
// }
