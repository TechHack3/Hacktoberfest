let water = document.getElementById("water");
let snake = document.getElementById("snake");
let gun = document.getElementById("gun");
let computer_image = document.getElementById("computerimg");
let user_img = document.getElementById("userimg");
let rand_number = Math.floor(Math.random() * 3);

// water -->0
// snake --> 1
// Gun --> 2
let user_choice;
function waterchange() {
    user_img.src = 'water.jpg';
    user_choice = 0;
    if (rand_number == 1) {
        computer_image.src = 'snake.jpg';
        document.getElementById("demo").innerHTML = "<h3>Sorry! You Loss The Game, Try Again</h3>";
    }
    else if (rand_number == 0) {
        computer_image.src = 'water.jpg';
        document.getElementById("demo").innerHTML = "<h3>OOPS! Match is Draw, Try Again</h3>";
    }
    else if (rand_number == 2) {
        computer_image.src = 'gun.jpg';
        document.getElementById("demo").innerHTML = "<h3>Congratulations! You Win The Match, Play Again</h3>";
    }
}

function snakechange() {
    user_img.src = 'snake.jpg';
    user_choice = 1;
    if (rand_number == 1) {
        computer_image.src = 'snake.jpg';
        // document.getElementById("demo").style.backgroundColor = "gray";
        // document.getElementById("demo").style.color = "white";
        document.getElementById("demo").innerHTML = "<h3>OOPS! Match is Draw, Try Again</h3>";
    }
    else if (rand_number == 0) {
        computer_image.src = 'water.jpg';
        // document.getElementById("demo").style.backgroundColor = "green";
        // document.getElementById("demo").style.color = "white";
        document.getElementById("demo").innerHTML = "<h3>Congratulations! You Win The Match, Play Again</h3>";
    }
    else if (rand_number == 2) {
        computer_image.src = 'gun.jpg';
        // document.getElementById("demo").style.backgroundColor = "red";
        // document.getElementById("demo").style.color = "white";
        document.getElementById("demo").innerHTML = "<h3>Sorry! You Loss The Game, Try Again</h3>";
    }
}

function gunchange() {
    user_img.src = 'gun.jpg';
    user_choice = 2;
    if (rand_number == 1) {
        computer_image.src = 'snake.jpg';
        document.getElementById("demo").innerHTML = "<h3>Congratulations! You Win The Match, Play Again</h3>";
    }
    else if (rand_number == 0) {
        computer_image.src = 'water.jpg';
        document.getElementById("demo").innerHTML = "<h3>Sorry! You Loss The Game, Try Again</h3>";
    }
    else if (rand_number == 2) {
        computer_image.src = 'gun.jpg';
        document.getElementById("demo").innerHTML = "<h3>OOPS! Match is Draw, Try Again</h3>";
    }

}

function refreshPage() {
    window.location.reload();
}

