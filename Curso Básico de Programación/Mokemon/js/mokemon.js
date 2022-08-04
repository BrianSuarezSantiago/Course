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
    let randomSelection = generaterandomSelection(1, 3);

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


//let ataqueJugador = null    // VARIABLE CON SCOPE GLOBAL. USAR PARA VER SU VALOR EN CONSOLA

function ataquesJugador() {
    let spanAtaqueJugador = document.getElementById('player-attack')

    let botonFuego = document.getElementById('fire-button')
    botonFuego.addEventListener('click', () => {
        spanAtaqueJugador.innerHTML = 'FUEGO'
        //ataqueJugador = "FUEGO"
        ataquesEnemigo()
    })


    let botonAgua = document.getElementById('water-button')    // Hacemos el boton con HTML
    botonAgua.addEventListener('click', () => {
        // Trabajamos la funcionalidad con JS previo cogido el boton
        spanAtaqueJugador.innerHTML = 'AGUA'
        //ataqueJugador = "AGUA"
        ataquesEnemigo()
    })


    let botonTierra = document.getElementById('land-button')
    botonTierra.addEventListener('click', () => {
        spanAtaqueJugador.innerHTML = 'TIERRA'
        //ataqueJugador = "TIERRA"
        ataquesEnemigo()
    })

    // DESPUES DE QUE EL JUGADOR SELECCIONE SU ATAQUE, LO HACE LA MAQUINA
    //ataquesEnemigo()
    // NO SE PUEDE PONER AQUI PORQUE EL ANTERIOR SON FUNCIONES Y CUANDO ENTRE TERMINARAN Y NO LLEGARA
}


function ataquesEnemigo() {
    let randomSelection = generaterandomSelection(1, 3);
    //alert("ha generado " + randomSelection)

    let enemyAttack = document.getElementById('enemy-attack')

    if(randomSelection == 1) {
        enemyAttack.innerHTML = 'FUEGO'
    } else if(randomSelection == 2) {
        enemyAttack.innerHTML = 'AGUA'
    } else {
        enemyAttack.innerHTML = 'TIERRA'
    }
}


// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button');   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})


window.addEventListener('load', ataquesJugador)
