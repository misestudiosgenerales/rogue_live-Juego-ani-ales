class Jugador {
    constructor(board) {
        this.board = board;
        this.x = floor(random(this.board.width / 2));
        this.y = floor(random(this.board.height / 2));

        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.sprite = textures.vaca.playerstop;
        this.lastDir;
        this.init = true;
        this.inventory = new Loot(board);
        this.checkTerrain()
    }
    display() {
        let size = this.board.size;
        let xsize = this.x * size;
        let ysize = this.y * size

        image(this.sprite, xsize, ysize, size, size);

    }
    checkTerrain() {
        if (this.board.cells[this.x][this.y].terrain == "hierba") {
            this.sprite = textures.vaca.playerstop;

        } else if (this.board.cells[this.x][this.y].terrain == "piedra") {
            this.sprite = textures.cabra.playerup;


        } else if (this.board.cells[this.x][this.y].terrain == "agua") {
            this.sprite = textures.tortuga.playerup;
        }
    }



    move(k) {
        this.checkTerrain();
        let nextX = this.x;
        let nextY = this.y;

        switch (k) {
            case UP_ARROW:
                nextY = this.y - 1;
                break;
            case DOWN_ARROW:
                nextY = this.y + 1;
                break;
            case LEFT_ARROW:
                nextX = this.x - 1;
                break;
            case RIGHT_ARROW:
                nextX = this.x + 1;
                break;
        }



        if (
            (this.getSpriteName() == "vaca" && this.board.cells[nextX][nextY].terrain == "hierba") ||
            (this.getSpriteName() == "cabra" && this.board.cells[nextX][nextY].terrain == "piedra") ||
            (this.getSpriteName() == "tortuga" && this.board.cells[nextX][nextY].terrain == "agua") ||
            (this.inventory.items.cambio == 1)
        ) {

            if (this.board.cells[this.x][this.y].terrain != this.board.cells[nextX][nextY].terrain) {
                this.inventory.items.cambio = 0;
                if (this.board.cells[nextX][nextY].terrain == "hierba") {
                    this.sprite = textures.vaca.playerup;
                } else if (this.board.cells[nextX][nextY].terrain == "piedra") {
                    this.sprite = textures.cabra.playerup;
                } else if (this.board.cells[nextX][nextY].terrain == "agua") {
                    this.sprite = textures.tortuga.playerup;
                }
            };

            this.x = nextX;
            this.y = nextY;
            this.lastDir = k;



            // Cambiar el sprite según la dirección del movimiento
            switch (k) {
                case UP_ARROW:
                    this.sprite = textures[this.getSpriteName()].playerup;
                    break;
                case DOWN_ARROW:
                    this.sprite = textures[this.getSpriteName()].playerdown;
                    break;
                case LEFT_ARROW:
                    this.sprite = textures[this.getSpriteName()].playerizq;
                    break;
                case RIGHT_ARROW:
                    this.sprite = textures[this.getSpriteName()].playerder;
                    break;
            }
        } else {
            console.log("No puedes moverte a esa casilla");
        }

        let celda = this.board.cells[this.x][this.y]
        if (celda.item != null) {
            // Si es una meta
            if (celda.item instanceof Granja_tierra || celda.item instanceof Granja_agua) {
                if (this.parapasarlvl()) {
                    this.inventory.addItem(celda.item);
                    this.inventory.display();
                    celda.item = null;
                } else {
                    console.log("❌ Aún no puedes pasar de nivel. Te faltan objetos.");
                }
            } else {
                this.inventory.addItem(celda.item);
                this.inventory.display();
                celda.item = null;
            }
        }


    }

    // Método auxiliar para obtener el nombre del sprite actual
    getSpriteName() {
        if (this.sprite == textures.vaca.playerstop ||
            this.sprite == textures.vaca.playerup ||
            this.sprite == textures.vaca.playerder ||
            this.sprite == textures.vaca.playerizq ||
            this.sprite == textures.vaca.playerdown
        ) return "vaca";

        if (this.sprite == textures.cabra.playerup ||
            this.sprite == textures.cabra.playerder ||
            this.sprite == textures.cabra.playerizq ||
            this.sprite == textures.cabra.playerdown
        ) return "cabra";

        if (this.sprite == textures.tortuga.playerup ||
            this.sprite == textures.tortuga.playerder ||
            this.sprite == textures.tortuga.playerizq ||
            this.sprite == textures.tortuga.playerdown
        ) return "tortuga";

    }
    parapasarlvl() {
        let cantidadesTablero =this.board.cantidadesdeobjetos();
        let sprite = this.getSpriteName();
        console.log('inventario:');
        console.log(this.inventory.items.leche);
        console.log('Mapa:');
        console.log(cantidadesTablero);
        
        if (sprite == "vaca" && this.inventory.items.leche  == cantidadesTablero.tarros){
            console.log('esta entrando en vaca');
            return true
        }else if(sprite == "cabra" && this.inventory.items.queso == cantidadesTablero.quesos) {
            return true
        }else if(sprite == "tortuga" && this.inventory.items.huevos == cantidadesTablero.huevos) {
            return true
        }  else {
            return false};
        
    }


}