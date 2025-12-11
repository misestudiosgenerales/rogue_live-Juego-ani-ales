class GUI {
    static nombreJugador = JSON.parse(localStorage.getItem('nombreJugador')) || '';
    static updateInventory(inventory, board) {
        let totalItems= board.cantidadesdeobjetos();
        document.getElementById("Titulo").innerHTML = `Inventario de ${this.nombreJugador}`;
        document.getElementById("lecheCount").innerHTML = " ";
        document.getElementById("lecheCount").innerHTML = inventory.items.leche;
        document.getElementById("huevosCount").innerHTML = inventory.items.huevos;
        document.getElementById("quesoCount").innerHTML = inventory.items.queso;
        document.getElementById("monedasCount").innerHTML = inventory.items.moneda;


        document.getElementById("lecheTotal").innerHTML = totalItems.tarros;
        document.getElementById("huevosTotal").innerHTML = totalItems.huevos;
        document.getElementById("quesoTotal").innerHTML = totalItems.quesos;
    }
    static comprarPlanta(){
        console.log('compra planta');
    
        if (player.inventory.items.moneda >= 2) {
            player.inventory.items.moneda -= 2;
            player.inventory.items.cambio = 1;
    
            console.log('Planta comprada. Monedas restantes: ' + player.inventory.items.moneda);
            GUI.updateInventory(player.inventory, board);
        } else {
            console.log('No tienes suficientes monedas para comprar una planta');
        }
    }
    
}
