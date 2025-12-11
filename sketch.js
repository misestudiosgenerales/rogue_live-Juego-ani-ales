let primera = true;
let board, hormiga;
let textures ={
  //terreno
  grass: null,
  stump: null,
  agua: null,
  granja_agua:null,
  granja_tierra:null,

  //muñeco 
  vaca:{ 
    playerup: null,
    playerizq: null,
    playerder: null,
    playerdown: null,
    playerstop: null
  },
  tortuga:{

    playerup: null,
    playerizq: null,
    playerder: null,
    playerdown: null,
    playerstop: null
  },
  cabra:{
    playerup: null,
    playerizq: null,
    playerder: null,
    playerdown: null,
    playerstop: null
  },
  
  //items
  //vaca
  leche:null,
  //tortuga
  huevo:null,
  //cabra
  queso:null,
  //cambio
  heno:null,
  planta:null,
  pasto:null,

  //moneda
  moneda:{
    primero: null,
    segundo:null,
    tercero:null,
    cuarto:null,
    quinto:null,
    sexto:null
  }
  
};

function preload() {
  //terreno
  textures.grass = loadImage("./img/cesped.png");
  textures.stump = loadImage("./img/piedra.png");
  textures.agua = loadImage("./img/agua.png");
  textures.granja_agua = loadImage("./img/granja_agua.png");
  textures.granja_tierra = loadImage("./img/granja_terreno.png");

  //muñeco
  //vaca
  textures.vaca.playerdown = loadImage("./img/personajes/vaca/playerdown.png");
  textures.vaca.playerizq = loadImage("./img/personajes/vaca/playerizq.png");
  textures.vaca.playerup = loadImage("./img/personajes/vaca/playerup.png");
  textures.vaca.playerder = loadImage("./img/personajes/vaca/playerder.png");
  textures.vaca.playerstop = loadImage("./img/personajes/vaca/playerstop.png");

  //tortuga
  textures.tortuga.playerizq = loadImage("./img/personajes/tortuga/playerizq.png");
  textures.tortuga.playerdown = loadImage("./img/personajes/tortuga/playerdown.png");
  textures.tortuga.playerup = loadImage("./img/personajes/tortuga/playerup.png");
  textures.tortuga.playerder = loadImage("./img/personajes/tortuga/playerder.png");

  //cabra
  textures.cabra.playerdown = loadImage("./img/personajes/cabra/playerdown.png");
  textures.cabra.playerizq = loadImage("./img/personajes/cabra/playerizq.png");
  textures.cabra.playerup = loadImage("./img/personajes/cabra/playerup.png");
  textures.cabra.playerder = loadImage("./img/personajes/cabra/playerder.png");

  //items
  //vaca
  textures.leche = loadImage("./img/items/leche.png");
  textures.heno = loadImage("./img/items/heno.png");
  //tortuga
  textures.huevo = loadImage("./img/items/huevo.png");
  textures.planta = loadImage("./img/items/planta.png");
  //cabra
  textures.queso = loadImage("./img/items/queso.png");
  textures.pasto = loadImage("./img/items/pasto.png");
  //moneda
  textures.moneda.primero = loadImage("./img/items/moneda/moneda1.png");
  textures.moneda.segundo = loadImage("./img/items/moneda/moneda2.png");
  textures.moneda.tercero = loadImage("./img/items/moneda/moneda3.png");
  textures.moneda.cuarto = loadImage("./img/items/moneda/moneda4.png");
  textures.moneda.quinto = loadImage("./img/items/moneda/moneda5.png");
  textures.moneda.sexto = loadImage("./img/items/moneda/moneda6.png");
}

function setup() {
  console.log("🚀 setup ejecutado")
  let canvas = createCanvas(700, 700);
  canvas.parent('#game')
  board = new Tablero();
  player = new Jugador(board);

  loot = new Loot (board,player);
  

}

function draw() {
  background(220); 
  let minX = width / 2;
  let maxX = board.width * board.size - width / 2;
  let minY = height / 2;
  let maxY = board.height * board.size - height / 2;

  let camX = constrain(player.x * board.size, minX, maxX);
  let camY = constrain(player.y * board.size, minY, maxY);

  translate(-camX + width / 2, -camY + height / 2);
  // background();

  // Crear un degradado alrededor del tablero
  // for (let i = 0; i < 100; i += 5) {
  //     let alpha = map(i, 0, 100, 50, 0);
  //     fill(0, 0, 0, alpha);
  //     rect(-i, -i, width + 2*i, height + 2*i);
  // }
  board.display();

  player.display();
  
  
  // if (keyIsPressed){
    
  // switch ( keyCode) {
  //   case UP_ARROW:
  //     player.y--;
  //     break;
  //   case DOWN_ARROW:
  //       player.y++;
  //     break;
  //   case LEFT_ARROW:
  //         player.x--;
  //   break;
  //   case RIGHT_ARROW:
  //         player.x++;
  //   break;
  // }
  }
// }

function keyPressed(){
  if (keyCode == 27) {
    Menu.menupartida();
  }
  console.log('Has pulsado la tecla '+ keyCode);
player.move(keyCode)
GUI.updateInventory(player.inventory,board)
}
