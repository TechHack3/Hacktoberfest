console.log("Welcome to spotify clone");

let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSong = document.getElementById("masterSong");
let progressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let is = Array.from(document.getElementsByClassName("songitem"));
let songitemplay = Array.from(document.getElementsByClassName("songItemPlay"));

let songs = [
  {
    songName: "Legion",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.jpg",
  },
  { songName: "Trap", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
  {
    songName: "They Mad",
    filePath: "./songs/3.mp3",
    coverPath: "./covers/3.jpg",
  },
  {
    songName: "Plug walk",
    filePath: "./songs/4.mp3",
    coverPath: "./covers/4.jpg",
  },
  {
    songName: "Artist Name",
    filePath: "./songs/5.mp3",
    coverPath: "./covers/5.jpg",
  },
  {
    songName: "The safety Dance",
    filePath: "./songs/6.mp3",
    coverPath: "./covers/6.jpg",
  },
  {
    songName: "Back It Up",
    filePath: "./songs/7.mp3",
    coverPath: "./covers/7.jpg",
  },
  {
    songName: "I don't Know",
    filePath: "./songs/8.mp3",
    coverPath: "./covers/8.jpg",
  },
  {
    songName: "You Never Know",
    filePath: "./songs/9.mp3",
    coverPath: "./covers/9.jpg",
  },
  {
    songName: "True Love",
    filePath: "./songs/10.mp3",
    coverPath: "./covers/10.jpg",
  },
];

// audioElement.play();

// listen to events

window.onload = function () {
  masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause");
      masterPlay.classList.add("fa-play");
      gif.style.opacity = 0;
    }
  });

  audioElement.addEventListener("timeupdate", () => {
    progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (progressBar.value * audioElement.duration) / 100;
  });

  is.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
  });
  const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
      element.classList.remove('fa-pause');
      element.classList.add('fa-play');
    });
  }
  songitemplay.forEach((element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      songIndex = parseInt(e.target.id)
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audioElement.src=`songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterSong.innerText = songs[songIndex].songName
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      gif.style.opacity = 1;
    });
  });
  document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
      songIndex = 0
    }
    else{
      songIndex+=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSong.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  })
  
  document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
      songIndex = 0
    }
    else{
      songIndex-=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSong.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  })
};
