class Tablero{
    constructor(){
        this.width = 40;
        this.height = 40;
        this.size = min(width / this.width, height / this.height)
        this.cantidadleche = new Leche();
        this.cantidadqueso = new Queso();
        this.cantidadhuevo = new Huevos();
        
        this.cells = new Array(this.width);
        for (let i = 0; i < this.width; i++) {
            this.cells[i] = new Array(this.height);
        }
    
        
    
        this.generate();

        
    }

    fillRandom(){
        // let meta = 1;
        for (let x = 0; x < this.width; x++) {  
            for (let y = 0; y < this.height; y++) {
                let nivel = 100*noise(x * 0.1, y * 0.1);
                
                if(nivel>60) {
                        this.cells[x][y] = new Agua();  
                } else if(nivel<30){    
                    this.cells[x][y] = new piedra(); 
                } else{
                    this.cells[x][y] = new Hierba();  
                        
                }
            }
                
                
        }
    } 
    
    objetos(tipo, cantidad, terrain) {
        for (let i = 0; i < cantidad; i++) {
            let x, y;
            let intentos = 100; // Para evitar bucles infinitos en caso de que no haya espacios
            let esTerrenoValido = false;

    
            do {
                x = floor(random(this.width));
                y = floor(random(this.height));
    
                // Si terrain es null (caso de las monedas), permitimos cualquier terreno
                esTerrenoValido = terrain ? (this.cells[x][y] instanceof terrain) : true;
            } while ((!esTerrenoValido || this.cells[x][y].item != null) && intentos-- > 0);

                if (tipo == Leche) {
                    this.cells[x][y].item = new Leche();
                } else if (tipo == Queso) {
                    this.cells[x][y].item = new Queso();

                }else if (tipo == Huevos) {
                    this.cells[x][y].item = new Huevos();
                }else if (tipo == Heno) {
                    this.cells[x][y].item = new Heno();
                }else if (tipo == Planta) {
                    this.cells[x][y].item = new Planta();
                }else if (tipo == Pasto) {
                    this.cells[x][y].item = new Pasto();
                }
                else if (tipo == Granja_agua ) {
                    this.cells[x][y].item = new Granja_agua();
                }else if(tipo == Granja_tierra){
                    this.cells[x][y].item = new Granja_tierra();
                }else if(tipo == Moneda){
                    this.cells[x][y].item = new Moneda();

                }

        }
    
    }   
    generate(){
        noiseSeed(random(100)+1)
        this.cells = new Array(this.width);
        for (let i = 0; i < this.width; i++) {
          this.cells[i] = new Array(this.height);
        }
       
        let meta = [Granja_agua, Granja_tierra]
        let tipometa = random(meta);
        if(tipometa == Granja_agua ){
            this.terreno = Agua;
        }else{
            this.terreno = Hierba;

        }
        console.log('objetos del tablero:');
        console.log(this.cantidadleche.cantidad);
        console.log(this.cantidadhuevo.cantidad);
        console.log(this.cantidadqueso.cantidad);
        this.fillRandom();
        this.objetos(Leche,this.cantidadleche.cantidad,Hierba);
        this.objetos(Huevos,this.cantidadhuevo.cantidad,Agua);
        this.objetos(Queso,this.cantidadqueso.cantidad,piedra);
        this.objetos(Heno,2,Hierba);
        this.objetos(Planta,2,Agua);
        this.objetos(Pasto,2,piedra);
        this.objetos(tipometa,1,this.terreno);
        // this.objetos(Moneda,floor(random(5)+1),tipotierra);
        this.objetos(Moneda, floor(random(5) + 1), null); 

        console.log('cantidad objetos:');
        console.log(this.cantidadesdeobjetos());
    }
    
    display(){
        noStroke();
        stroke(0);
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                    this.cells[x][y].display(x,y,this.size)
            }    
        }
            
    }
    cantidadesdeobjetos(){
        let objetos = {
            tarros: this.cantidadleche.cantidad,
            huevos:this.cantidadhuevo.cantidad,
            quesos:this.cantidadqueso.cantidad
        }
        return objetos;
    }
    
}
    
