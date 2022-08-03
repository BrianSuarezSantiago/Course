function selectPet() {
    result = ""

    if(document.getElementById('Charmander').checked) {
        alert("Has seleccionado a Charmander")
    } else if(document.getElementById('Bulbasaur').checked) {
        result = "Bulbasaur"
    } else if(document.getElementById('Charizard').checked) {
        result = "Charizard"
    } else if(document.getElementById('Squirtle').checked == true) {
        result = "Squirtle"
    } else if(document.getElementById('Pikachu').checked) {
        result = "Pikachu"
    } else {
        result = "Charmander"
    }
    //alert("YOU SELECT " + result)
}

// Pedimos al browser que nos avise cuando se hayan cargado todos los componentes de HTML
window.addEventListener('load', () => {
    // Se ejecutara el script cuando el navegador haya cargado todos los elementos HTML
    let petButton = document.getElementById('select-pet-button');   // Ya estamos seguros de que ha cargado
    petButton.addEventListener('click', selectPet)
})


// checked es una propiedad de los input radio