const NUMBER_OF_DICE = 5;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");


//Initial set of all 0 dice

const dice4 = createDice('R');
dice4.classList.add("d4")
diceContainer.appendChild(dice4);
const dice6 = createDice('O');
dice6.classList.add("d6")
diceContainer.appendChild(dice6);
const dice8 = createDice("L");
dice8.classList.add("d8")
diceContainer.appendChild(dice8);
const dice10 = createDice("L");
dice10.classList.add("d10")
diceContainer.appendChild(dice10);
const dice12 = createDice("E");
dice12.classList.add("d12")
diceContainer.appendChild(dice12);
const dice20 = createDice("M");
dice20.classList.add("d20")
diceContainer.appendChild(dice20);



function createDice(number) {
    const die = document.createElement("div");
    die.classList.add("die")
    die.innerText = number;

    return die;
}

function randomizeDice(diceContainer, numberOfDice, size) {
    diceContainer.innerHTML = "";
    for (let i = 0; i < numberOfDice; i++) {
        let faces = size.split("d")[1]
        console.log(faces)
        if (faces == 100) {
            let random = Math.round((Math.random()*(100-10)+10)/10)*10;
            let dice = createDice(random);
            faces = 10;
            dice.classList.add(`d${faces}`)
            diceContainer.appendChild(dice);
        } else { 
            let random = Math.floor((Math.random() * faces) + 1); 
            let dice = createDice(random);
            dice.classList.add(`d${faces}`)
            diceContainer.appendChild(dice);
        }

    }
}

btnRollDice.addEventListener("click", () => {
    if (document.querySelector(".numberOfDice").value) {
        let numberOfDice = document.querySelector(".numberOfDice").value
        let dieSize = document.getElementById("dieSize").value;
        randomizeDice(diceContainer, numberOfDice, dieSize);
    } else {
        alert("Please enter the number of dice you wish to roll.")
    }
})
