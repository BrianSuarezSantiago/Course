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


// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button');   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})
