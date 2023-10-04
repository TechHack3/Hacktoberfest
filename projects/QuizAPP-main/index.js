let questions = [
    {

        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        answers: [
            { text: "Asia", correct: "w" },
            { text: "Europe", correct: "w" },
            { text: "Africa", correct : "r" },
            { text: "Australia", correct: "w" }



        ]

    },
    {

        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        answers: [
            { text: "largest railway station", correct: "r" },
            { text: "highest railway station", correct: "w" },
            { text: "longest railway station", correct: "w" },
            { text: "None of Above", correct: "w" }


        ]

    },
    {

        question: "Hitler party which came into power in 1933 is known as",
        answers: [
            { text: "Labour Party", correct: "w" },
            { text: "Nazi Party", correct: "r" },
            { text: "Ku-Klux-Klan", correct: "w" },
            { text: "	Democratic Party", correct: "w" }


        ]

    },
    {

        question: "First China War was fought between",
        answers: [
            { text: "China and Britain", correct: "r" },
            { text: "China and France", correct: "w" },
            { text: "China and Egypt", correct: "w" },
            { text: "China and Greek", correct: "w" }


        ]

    },
    {

        question: "Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of",
        answers: [
            { text: "Tennis", correct: "w" },
            { text: "Volleyball", correct: "r" },
            { text: "Basketball", correct: "w" },
            { text: "Cricket", correct: "w" }


        ]

    },
    {

        question: "Guwahati High Court is the judicature of",
        answers: [
            { text: "Nagaland", correct: "w" },
            { text: "Arunachal Pradesh", correct: "w" },
            { text: "Assam", correct: "w" },
            { text: "	All of the above", correct: "r" }


        ]

    },
    {
        question: "	Fire temple is the place of worship of which of the following religion?",
        answers: [
            { text: "Taoism", correct: "w" },
            { text: "Judaism", correct: "w" },
            { text: "Zoroastrianism (Parsi Religion)", correct: "r" },
            { text: "Shintoism", correct: "w" }


        ]
    },
    {
        question: "Golf player Vijay Singh belongs to which country?",
        answers: [
            { text: "USA", correct: "w" },
            { text: "Fiji", correct: "r" },
            { text: "India", correct: "w" },
            { text: "UK", correct: "w" }


        ]
    },
    {
        question: "Garampani sanctuary is located at",
        answers: [
            { text: "Junagarh, Gujarat", correct: "w" },
            { text: "Diphu, Assam", correct: "r" },
            { text: "Kohima, Nagaland", correct: "w" },
            { text: "Gangtok, Sikkim", correct: "w" }


        ]
    },
    {
        question: "Who amongst the following had called Rabindranath Tagore as THE GREAT SENTINEL ?",
        answers: [
            { text: "Abul Kalam Azad", correct: "w" },
            { text: "Mahatma Gandhi", correct: "r" },
            { text: "Dr. Rajendra Prasad", correct: "w" },
            { text: "Subhash Chandra Bose", correct: "w" }


        ]
    },






]


let i = 0;
document.getElementById("next").addEventListener("click", setnewQuestion)




const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');




document.getElementById("start").addEventListener("click", Startgame)




let shuffledQuestion, currentquestionindex



function Startgame() {
    
    document.getElementById("start").classList.add('hide')
    document.getElementById("que").classList.remove('hide')
    document.getElementById("P").classList.remove('hide')
    document.getElementById("neutral").classList.add('neutral')
    if(i<=9){
        
        document.getElementById("question").innerText = `${i + 1})` + " " + questions[i].question
        option()
    }
    else{
        document.getElementById("que").classList.add('hide')
        document.getElementById("P").classList.add('middle')
    }

    
}






function option() {
    document.getElementById("op1").innerText = "a)" + " " + questions[i].answers[0].text
    document.getElementById("op2").innerText = "b)" + " " + questions[i].answers[1].text
    document.getElementById("op3").innerText = "c)" + " " + questions[i].answers[2].text
    document.getElementById("op4").innerText = "d)" + " " + questions[i].answers[3].text
}







function setnewQuestion() {
    i++;
    console.log(i)
    Startgame()
    document.getElementById("neutral").classList.add('neutral')
    
    
}




let P=1


op1.addEventListener("click", () => {
    if (questions[i].answers[0].correct === "r") {
        document.body.style.backgroundColor = "green";
        document.getElementById("op1").style.color = "green";
        let a = document.getElementById("number").innerText=P++
        setTimeout(() => {
            document.body.style.backgroundColor = "#554994";
           
        }, 1500)
        setTimeout(() => {
            document.getElementById("op1").style.color = "black";
            setnewQuestion() 
        }, 1500)
       
    }
    else {
        document.body.style.backgroundColor = "red";
        document.getElementById("op1").style.color = "red";
        
        setTimeout(() => {
            document.body.style.backgroundColor = "#554994";
        }, 1500)
        setTimeout(() => {
            document.getElementById("op1").style.color = "black";
            setnewQuestion() 
        }, 1500)
    }





})
op2.addEventListener("click", () => {
  
    if (questions[i].answers[1].correct === "r") {
        document.body.style.backgroundColor = "green";
        document.getElementById("op2").style.color = "green";
        
        setTimeout(() => {
            document.getElementById("op2").style.color = "black";
            document.body.style.backgroundColor = "#554994";
            setnewQuestion() 
        }, 1500)
        let a = document.getElementById("number").innerText=P++
       
    }
    else {
        document.getElementById("neutral").classList.add('wrong')
        document.body.style.backgroundColor = "red";
        document.getElementById("op2").style.color = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "#554994";
        }, 1500)
        setTimeout(() => {
            document.getElementById("op2").style.color = "black";
            setnewQuestion() 
        }, 1500)
    }
})




op3.addEventListener("click", () => {

    if (questions[i].answers[2].correct === "r") {
        document.body.style.backgroundColor = "green";
        document.getElementById("op3").style.color = "green";
        setTimeout(() => {
            document.getElementById("op3").style.color = "black";
            document.body.style.backgroundColor = "#554994";
            setnewQuestion()
        }, 1500)
        let a = document.getElementById("number").innerText=P++

    }
    else {
        document.getElementById("neutral").classList.add('wrong')
        document.body.style.backgroundColor = "red";
        document.getElementById("op3").style.color = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "#554994";
        }, 1500)
        setTimeout(() => {
            document.getElementById("op3").style.color = "black";
            setnewQuestion() 

        }, 1500)
}
})







op4.addEventListener("click", () => {
    
    if (questions[i].answers[3].correct === "r") {
        document.body.style.backgroundColor = "green";
        
        document.getElementById("op4").style.color = "green";

        setTimeout(() => {
            setnewQuestion()
            document.body.style.backgroundColor = "#554994";
            document.getElementById("op4").style.color = "black";
        }, 1500)
        let a = document.getElementById("number").innerText=P++

    }
    else {
        document.getElementById("neutral").classList.add('wrong')
        document.body.style.backgroundColor = "red";
        document.getElementById("op4").style.color = "red";

        setTimeout(() => {
            document.body.style.backgroundColor = "#554994";
        }, 1500)
        setTimeout(() => {
            document.getElementById("op4").style.color = "black";
            setnewQuestion() 
        }, 1500)
    }

})


