class Menu{
    static pantallas(menu){
        console.log('hola');
        let pantalla = document.querySelector('.Pantallas');
        if(menu=="Pantalla1"){
            console.log('pantalla1');
            pantalla.innerHTML = `
            <div class="Pantalla1  d-flex justify-content-center align-items-center m-3">
                <div class="row bg-dark p-3 rounded bg-gradient">
                    <div class="col-12">
                        <p class="text-white">
                        En una granja encantada, cada animal tiene una misión...<br>
                        La vaca protege la leche, la cabra busca el queso, y la tortuga recoge huevos entre charcos.<br>
                        Pero el terreno cambia y necesitarás plantas mágicas para transformarte.<br><br>
                        ¿Podrás recoger todos los objetos y alcanzar la meta?
                        </p>
                    </div>
                    <div class="col-12">
                        <button type="button" onclick="Menu.pantallas('Pantalla2')" class="btn btn-primary btn-lg">➡️</button>
                    </div>
                </div>
            </div>;`
        }else if(menu=="Pantalla2"){
            
            console.log('pantalla2');
            pantalla.innerHTML = `
            <div class="Pantalla2  d-flex justify-content-center align-items-center m-3">
                <div class="row bg-dark p-3 rounded bg-gradient">
                    <div class="col-12">
                        <p class="text-white p-3 rounded">¿Cuál es tu nombre, valiente granjer@?</p>
                        <input type="text" id="nombreJugador" class="form-control w-50 mb-3" value="${GUI.nombreJugador}">
                    </div>
                    <div class="col-12">
                        <button class="btn btn-success" onclick="Menu.iniciarJuego()">¡Jugar!</button>
                    </div>
                </div>
            </div>;`
        }
        
    }; 
    static iniciarJuego() {
        const nombre = document.getElementById("nombreJugador").value;
    
        if (nombre.trim() !== "") {
          localStorage.setItem("nombreJugador", JSON.stringify(nombre));
          GUI.nombreJugador=nombre;
            GUI.updateInventory(loot,board);
          // 🔄 En lugar de forEach, selecciona directamente el div principal
          const pantallas = document.querySelector('.Pantallas');
          pantallas.style.display = 'none'; // ocultar la parte del menú
    
          const juego = document.getElementById("pantallaJuego");
          juego.style.display = 'block'; // mostrar el canvas + inventario

    
          console.log('¡Juego iniciado!');
        }
      }
    static menupartida(){
        let pantalla = document.querySelector('.menuescape');
    pantalla.innerHTML = `
    <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="visibility: visible;">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menú escape</h5>
            
        </div>
        <div class="offcanvas-body">
            <div>Menú de pausa. Puedes seguir o salir.</div>
            <div class="dropdown mt-3">
                <button class="btn btn-secondary m-1" onclick="Menu.salir()">Terminar partida</button><br>
                <div class="terminarpartida"></div>
                <button class="btn btn-secondary m-1" onclick="Menu.cerrarMenu()">Seguir jugando</button>
            </div>
        </div>
    </div>
    `;

    }
    static cerrarMenu() {
        document.querySelector('.menuescape').innerHTML = ''; // Limpia el menú
    }
    static salir(){
        let pantalla = document.querySelector('.terminarpartida');
            pantalla.innerHTML = `
            <div class="bg-dark float-center text-white p-3 rounded">
                <h3 class>¿Seguro quieres terminar?</h3>
                <button id="si" class="btn bg-success" onclick="Menu.finPartida()" >Sí</button>
                <button id="No" class="btn btn-danger" onclick="Menu.cerrarConfirmacion()">No</button>
            </div>
        `
    };
    static finPartida(){
        let nvl= new Loot();
        let level= nvl.level;
        let pantalla = document.querySelector('.container');
            pantalla.innerHTML = `
                <div class="Pantalla1 d-flex justify-content-center align-items-center flex-column text-center">
          <div class="row bg-dark text-white p-4 rounded w-100 justify-content-center">
            <div class="col-12">
              <h2 id='GM'>Game over</h2>
            </div>
            <div class="col-12">
              <p><strong>${GUI.nombreJugador}</strong>, has llegado al nivel <strong>${level}</strong></p>
              <p>¡Hasta pronto!</p>
            </div>
            <div class="col-12">
              <button class="btn btn-success mt-3" onclick="location.reload()">¿Quieres volver a jugar?</button>
            </div>
          </div>
        </div>
            `;
        
    };
    static cerrarConfirmacion(){
        console.log('terminar partida');
        document.querySelector('.terminarpartida').innerHTML = '';
    }
};