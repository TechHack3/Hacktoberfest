var $ = (id) => document.getElementById(id);

//Intervals
var gravity;
var advance;
//Score, gravity power(1 default) and boolean for checking if the bird can fly.
var game_score = 0;
//Somewhat a falling acceleration.
var gravityPoints = 0;
//Bird alive or dead
var alive = true;
//The speed of poles coming towards the bird
const flySpeed = 9;
//extra jump height
const aditionalJump = 5;
//The space between the poles
var top_max_height = 70;


//Bird "jump".
function fly(){
    if(alive === true){
        //Going up if the bird is alive
        $("player").style.transition = "all 0.5s";
        $("player").style.top=$("player").offsetTop - window.innerHeight/10 - aditionalJump + "px";
        clearInterval(gravity);
        gravity = false; //forbiding user to click for bird jump until the last jump is finished
        $("player").style.transform = "rotate(-20deg)";
        gravityPoint = 0;
        //falling
        setTimeout(function(){
            if(gravity === false){
                gravity = setInterval(fall, 15);
                $("game").addEventListener("click", fly, {once:true});
                $("player").style.transition = "";
            }
        }, 500);
    }
}

//html elements made with js because that one div in html looks too great.
function createPlayer_and_score(){
    //Player
    let player = document.createElement("div");
    player.id = "player";
    $("game").appendChild(player);
    //Score
    let score = document.createElement("div");
    score.id = "score";
    $("game").appendChild(score);
    $("score").innerText = "Score: " + game_score;
    //Tap to play
    let play = document.createElement("div");
    play.id = "playText";
    $("game").appendChild(play);
    $("playText").innerText = "Tap to Play";
}

function write_score(){
    $("score").innerText = "Score: " + (++game_score);
}

window.onload = function(){
    createPlayer_and_score();
    createClouds();
    createClouds("calc(180% + 12.5vmin)");
    $("game").addEventListener("click", beginGame, {once:true});
};

function fall(){
    $("player").style.top=$("player").offsetTop + 1 + gravityPoint/9.81 + "px";
    $("player").style.transform = "rotate(15deg)";
    gravityPoint++
    //Collision with top and bottom borders of the screen
    checkBorders_replay();
}

function checkBorders_replay(){
    if($("player").offsetTop < 0){$("game").removeEventListener("click", fly);}
    if($("player").offsetTop + $("player").offsetHeight > window.innerHeight){
        clearInterval(gravity);
        clearInterval(advance);
        $("game").removeEventListener("click", fly);
        replay_button();
    }
}

function replay_button(){
    $("playText").innerText = "Tap to Replay";
    $("playText").style.display = "block";
    $("game").addEventListener("click",beginGame, {once:true});
}


//Creating the green things
function createClouds(x = "120%"){
    let topCloud = document.createElement("div");
    let bottomCloud = document.createElement("div");
    $("game").appendChild(topCloud);
    $("game").appendChild(bottomCloud);
    topCloud.classList = "topCloud";
    bottomCloud.classList = "bottomCloud";
    topCloud.style.left = x;
    bottomCloud.style.left = x;
    let randTop = Math.floor(Math.random() * top_max_height);
    topCloud.style.height = randTop + "vh";
    bottomCloud.style.height = top_max_height - randTop + "vh";
}


function goForward(){
    //Advancing towards the clouds
    for(let z = 0; z < document.getElementsByClassName("topCloud").length; z++){
        document.getElementsByClassName("topCloud")[z].style.left = (document.getElementsByClassName("topCloud")[z].offsetLeft - 1) + "px";
        document.getElementsByClassName("bottomCloud")[z].style.left = (document.getElementsByClassName("bottomCloud")[z].offsetLeft - 1) + "px";
    }
    //removing the previous cloud then adding a new one
    if(document.getElementsByClassName("topCloud")[0].offsetLeft < -document.getElementsByClassName("topCloud")[0].offsetWidth){
        document.getElementsByClassName("topCloud")[0].remove();
        document.getElementsByClassName("bottomCloud")[0].remove();
        createClouds();
        write_score();
    }
    checkForCollision();
}


function checkForCollision(){
    //collision with the first top and bottom clouds
    if($("player").offsetLeft + $("player").offsetWidth > document.getElementsByClassName("topCloud")[0].offsetLeft || $("player").offsetLeft > document.getElementsByClassName("topCloud")[0].offsetLeft){
        if(($("player").offsetTop< document.getElementsByClassName("topCloud")[0].offsetTop + document.getElementsByClassName("topCloud")[0].offsetHeight)  ||  ($("player").offsetTop + $("player").offsetHeight > document.getElementsByClassName("bottomCloud")[0].offsetTop)){
            $("game").removeEventListener("click", fly);
            clearInterval(advance);
            gravityPoints = 3;
            alive = false;
        }
    }
}

//start game and restart
function beginGame(){
    alive = true;
    $("player").style.transform = "rotate(0deg)";
    $("player").style.top = "calc(50% - 5vmin)";
    document.getElementsByClassName("topCloud")[0].style.left = "120%";
    document.getElementsByClassName("topCloud")[1].style.left = "calc(180% + 12.5vmin)";
    document.getElementsByClassName("bottomCloud")[0].style.left = "120%";
    document.getElementsByClassName("bottomCloud")[1].style.left = "calc(180% + 12.5vmin)";
    $("playText").style.display = "none";
    game_score = 0;
    gravityPoint = 0;
    $("score").innerText = "Score: 0";
    setTimeout(function(){
        gravity = setInterval(fall, 15);
        advance = setInterval(goForward, flySpeed);
        $("game").addEventListener("click", fly, {once:true});
    }, 500);
}
