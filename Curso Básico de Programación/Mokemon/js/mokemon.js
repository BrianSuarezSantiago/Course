function selectPet() {
    // Se ha de comprobar todos y cada uno de los radio buttons
    if(document.getElementById('Charmander').checked) {
        alert("Has seleccionado a Charmander")
    } else if(document.getElementById('Bulbasaur').checked) {
        alert("Has seleccionado a Bulbasaur")
    } else if(document.getElementById('Charizard').checked) {
        alert("Has seleccionado a Charizard")
    } else if(document.getElementById('Squirtle').checked == true) {
        alert("Has seleccionado a Squirtle")
    } else {
        alert("Has seleccionado a Pikachu")
    }
}

// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button');   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})


// checked es una propiedad de los input radio