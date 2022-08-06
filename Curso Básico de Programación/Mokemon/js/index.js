function selectPet() {
    let playerPetName = document.getElementById('player-pet-name')

    // Se ha de comprobar todos y cada uno de los radio buttons
    if(document.getElementById('Charmander').checked) {
        playerPetName.innerHTML = 'Charmander'
    } else if(document.getElementById('Bulbasaur').checked) {
        playerPetName.innerHTML = 'Bulbasaur'   // Modificamos el contenido HTML interno del span con ese id
    } else if(document.getElementById('Charizard').checked) {
        playerPetName.innerHTML = 'Charizard'
    } else if(document.getElementById('Squirtle').checked == true) {
        playerPetName.innerHTML = 'Squirtle'
    } else if(document.getElementById('Pikachu').checked) {
        playerPetName.innerHTML = 'Pikachu'
    } else {
        alert("Debes seleccionar a una mascota!!")
    }

    // DESPUES DE QUE LOS JUGADORES HAYAN ELEGIDO LA MASCOTA SE SELECCIONARA LA MASCOTA DEL ENEMIGO
    selectEnemyPet()    // No hay que asignarselo a un boton
}


function generaterandomSelection(min, max) {
    // Rango de seleccion de mascotas
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function selectEnemyPet() {
    let randomSelection = generaterandomSelection(1, 5);

    let enemyPetName = document.getElementById('enemy-pet-name');    // span

    if(randomSelection == 1) {
        enemyPetName.innerHTML = 'Charmander'
    } else if(randomSelection == 2) {
        enemyPetName.innerHTML = 'Bulbasaur'
    } else if(randomSelection == 3) {
        enemyPetName.innerHTML = 'Charizard'
    } else if(randomSelection == 4) {
        enemyPetName.innerHTML = 'Squirtle'
    } else {
        enemyPetName.innerHTML = 'Pikachu'
    }
    // Nunca se va a dar la posibilidad de que la maquina no elija una mascota
    // porque siempre va a generar un numero en el rango fijado previamente
}


let ataqueJugador = null
let ataqueEnemigo = null

function ataquesJugador() {
    let botonFuego = document.getElementById('fire-button')
    botonFuego.addEventListener('click', () => {
        ataqueJugador = "FUEGO"
        f_ataquesEnemigo()
    })


    let botonAgua = document.getElementById('water-button')    // Accedemos al boton con HTML
    botonAgua.addEventListener('click', () => {
        // Trabajamos la funcionalidad con JS previo cogido el boton
        ataqueJugador = "AGUA"
        f_ataquesEnemigo()
    })


    let botonTierra = document.getElementById('land-button')
    botonTierra.addEventListener('click', () => {
        ataqueJugador = "TIERRA"
        f_ataquesEnemigo()
    })

    // DESPUES DE QUE EL JUGADOR SELECCIONE SU ATAQUE, LO HACE LA MAQUINA
    //f_ataquesEnemigo() --> UNREACHABLE STATEMENT
    // NO SE PUEDE PONER AQUI PORQUE EL ANTERIOR SON FUNCIONES Y CUANDO ENTRE TERMINARAN Y NO LLEGARA
}


function f_ataquesEnemigo() {
    let randomSelection = generaterandomSelection(1, 3);
    //alert("ha generado " + randomSelection)

    let enemyAttack = document.getElementById('enemy-attack')

    if(randomSelection == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if(randomSelection == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    // DESPUES DE TENER LOS DOS ATAQUES, SE HACE EL COMBATE
    combate()
}


function combate() {
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE")
    }
}


function crearMensaje(resultado) {
    let parrafo = document.createElement('p')    // nombre de la etiqueta HTML a crear con JS
    // UNA VEZ CREADO EL PARRAFO MODIFICAMOS EL CONTENIDO INCLUIDO DENTRO DEL HTML
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + 
                        '. La mascota del enemigo atacó con ' + ataqueEnemigo +
                        ": " + resultado

    // PREVIAMENTE YA HA CREADO EL PARRAFO PERO FALTA INDICARLE DONDE QUEREMOS QUE LO META
    // LE INDICAMOS QUE SE LO AÑADA A LA SECCION
    let sectionMensajes = document.getElementById('game-messages');
    sectionMensajes.appendChild(parrafo)
}


// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button');   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})


window.addEventListener('load', ataquesJugador)


// FIXME: validar que no se pueda combatir si no se elige mascota