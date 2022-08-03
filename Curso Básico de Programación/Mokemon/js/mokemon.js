function selectPet() {
    let playerPetName = document.getElementById('player-pet-name')

    // Se ha de comprobar todos y cada uno de los radio buttons
    if(document.getElementById('Charmander').checked) {
    } else if(document.getElementById('Bulbasaur').checked) {
        playerPetName.innerHTML = 'Bulbasaur'
    } else if(document.getElementById('Charizard').checked) {
        playerPetName.innerHTML = 'Charizard'
    } else if(document.getElementById('Squirtle').checked == true) {
        playerPetName.innerHTML = 'Squirtle'
    } else if(document.getElementById('Pikachu').checked) {
        playerPetName.innerHTML = 'Pikachu'
    } else {
        alert("Debes seleccionar a una mascota!!")
    }
}

// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button');   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})
