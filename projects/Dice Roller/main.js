const NUMBER_OF_DICE = 5;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");


//Initial set of all 0 dice
for (let i=0; i < NUMBER_OF_DICE; i++) {
    const dice =  createDice(0);
    diceContainer.appendChild(dice);
}


function createDice(number) {
    const die = document.createElement("div");
    die.classList.add("die")
    die.innerText = number;

    return die;
}

function randomizeDice(diceContainer, numberOfDice){
    diceContainer.innerHTML = "";
    for (let i=0; i < numberOfDice; i++) {
        const random = Math.floor((Math.random() * 6) + 1);
        const dice =  createDice(random);

        diceContainer.appendChild(dice);
    }
}

btnRollDice.addEventListener("click", ()=>{
    if (document.querySelector(".numberOfDice").value){
    let numberOfDice = document.querySelector(".numberOfDice").value
    randomizeDice(diceContainer, numberOfDice);
    } else {
        alert("Please enter the number of dice you wish to roll.")
    }
})
