function inicio() {
    // SEGUN CARGA TODO EL HTML SOLO SE HA DE VER LA SECCIÓN DE SELECCIONAR MASCOTA
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'

    let sectionReset = document.getElementById('reset-game')
    sectionReset.style.display = 'none'
}


function selectPet() {
    // DESPUES DE CLICKAR EL BOTON SELECCIONAR MASCOTA SE MUESTRAN LOS ATAQUES
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'block'

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
    // DESPUES DE QUE EL ENEMIGO ELIJA MASCOTA SE OCULTA DICHA SECCION
    let sectionSelectPet = document.getElementById('select-pets')
    sectionSelectPet.style.display = 'none'

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
        vidas("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidas("GANASTE")
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidas("GANASTE")
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        // TAMBIEN SE PODRIA METER LOS SPAN Y DEMAS AQUI
        vidas("GANASTE")
    } else {
        crearMensaje("PERDISTE")
        vidas("PERDISTE")
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


let playerLifesCounter = 3, enemyLifesCounter = 3   // values by default

function vidas(result) {    
    let spanPlayerLifes = document.getElementById('player-lifes')
    //spanPlayerLifes.innerHTML = '3'
    spanPlayerLifes.innerHTML = playerLifesCounter

    let spanEnemyLifes = document.getElementById('enemy-lifes')
    //spanEnemyLifes.innerHTML = '3'
    spanEnemyLifes.innerHTML = enemyLifesCounter
    
    if(result == "GANASTE") {
        enemyLifesCounter--
        spanEnemyLifes.innerHTML = enemyLifesCounter
    } else if(result == "PERDISTE") {
        playerLifesCounter--
        spanPlayerLifes.innerHTML = playerLifesCounter
    }
    revisarVidas()
}


function revisarVidas() {
    if(playerLifesCounter == 0) {
        crearMensajeVidas("HAS PERDIDO")
    } else if(enemyLifesCounter == 0) {
        crearMensajeVidas("HAS GANADO")
    }
}


function crearMensajeVidas(result) {
    let message = document.createElement('p')   // 1. CREAMOS EL ELEMENTO HTML
    message.innerHTML = "EL JUEGO HA TERMINADO Y " + result // 2. MODIFICAMOS SU CONTENIDO INTERNO SI ES NECESARIO

    let spanGameMessages = document.getElementById('game-messages')
    spanGameMessages.appendChild(message)   // 3. INDICAMOS DONDE AÑADIRLO

    // DESPUES DE QUE SE MUESTRE EL MENSAJE FINAL, SE EVITA SEGUIR ATACANDO/PULSANDO LOS BOTONES DE ATAQU
    let fireButton = document.getElementById("fire-button")
    fireButton.disabled = true  // DESAHABILITAMOS MEDIANTE LA PROPIEDAD disabled LA CAPACIDAD DE QUE EL BOTON SE PULSE

    let waterButton = document.getElementById("water-button")
    waterButton.disabled = true

    let landButton = document.getElementById("land-button")
    landButton.disabled = true

    // UNA VEZ TERMINADO EL JUEGO SE MUESTRA EL BOTON DE REINICIO
    let sectionResetGame = document.getElementById("reset-game")
    sectionResetGame.style.display = 'block'
}


window.addEventListener('load', () => {
    let resetButton = document.getElementById('reset-button')
    resetButton.addEventListener('click', () => {
        // location es un objeto del DOM(como window y document) pero que no se refiere a la ventana/pestaña
        // ni html del navegador, sino a la ubicacion en la que estamos. Cuando estamos en platzi.com eso es
        // una location o cuando estamos en platzi.com/cursos/prog-basica eso es otro location
        // En este caso, bajo el localhost seria http://127.0.0.1:5500/Curso/Mokemon/index.html
        location.reload()
    })
})


// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button')   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})


window.addEventListener('load', ataquesJugador)

window.addEventListener('load', vidas)

window.addEventListener('load', inicio)
