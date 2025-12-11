class Loot {
    constructor(tablero, player) {  // Recibe un jugador en el constructor
        this.cantidadleche = new Leche();
        this.cantidadqueso = new Queso();
        this.cantidadhuevo = new Huevos();
        this.items = { leche: 0, huevos: 0, queso: 0, cambio: 0, moneda: 2, passlvl: false };
        this.objetos = new Item();
        this.tablero = tablero;
        this.player = player; // Usa el jugador recibido en lugar de crear uno nuevo
        this.level=1;
    }

    passLevel() {
        console.log(player + 'hola');
        console.log("Verificando si puede pasar de nivel...");
        console.log("Condición del jugador:", player.parapasarlvl());
        console.log("Estado de passlvl:", this.items.passlvl);

        if (player.parapasarlvl() && this.items.passlvl) {
            console.log("¡Nivel superado!");
            this.tablero.generate();
            this.items.passlvl = false; // Resetear el estado
            this.items.leche=0;
            this.items.huevos=0;
            this.items.queso=0;
            this.level++;
        } else {
            console.log("No pasas de nivel");
        }
    }



    addItem(item) {
        if (item instanceof Leche) {
            this.items.leche++;
        } else if (item instanceof Huevos) {
            this.items.huevos++;
        } else if (item instanceof Queso) {
            this.items.queso++;
        } else if (item instanceof Moneda) {
            this.items.moneda++;
        }else if (item instanceof Heno || item instanceof Pasto ||item instanceof Planta  ) {
            this.items.cambio++;
            this.objetos.change = true

        }else if (item instanceof Granja_agua || item instanceof Granja_tierra ) {
            this.items.passlvl = true;
            this.passLevel();
        }

    }

    display(){
        console.log('Inventario: ');
        

        console.log("Leche:", this.items.leche);
        console.log("Huevos:", this.items.huevos);
        console.log("Queso:", this.items.queso);
        console.log("Moneda:", this.items.moneda);
        console.log(Object.values(this.items).reduce((a, b) => a + b, 0) + " items en total");
    }
            // suma += item.weight;
            
}
