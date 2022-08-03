function generate_random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selection(selection) {
    let result = ""

    if(selection == 1) {
        result = "Rock 🪨"
    } else if(selection == 2) {
        result = "Paper 🧾"
    } else if(selection == 3) {
        result = "Scissors ✂️"
    } else {
        result = "Wrong option!"
    }

    return result;
}

// 1 es rock, 2 paper, 3 scissor
let player = 0
let pc = 0
let winCount = 0
let loseCount = 0

while(winCount < 3 && loseCount < 3) {
    // Todo el snippet se repite mientras(while) la condicion se cumpla
    pc = generate_random_number(1, 3)
    player = prompt("Select: 1 for Rock, 2 for Paper, 3 for Scissors")

    alert("Tu eliges " + selection(player))
    alert("PC elige " + selection(pc))

    // Combat 
    if(player == pc) {
        alert("EMPATE!!")
    } else if(player == 1 && pc == 3) {
        alert("GANASTE!!")
        winCount++  // Variable que permite a la condicion del while salir
    } else if(player == 3 && pc == 2) {
        alert("GANASTE!!")
        winCount++
    } else if(player == 2 && pc == 1) {
        alert("GANASTE!!")
        winCount++
    } else {
        alert("PERDISTE")
        loseCount++
    }
}

alert("Has ganado: " + winCount + "veces. Has perdido: " + loseCount + "veces")
