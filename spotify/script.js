console.log('welcome to spotify');

//initialize the variables
let songIndex = 0;
let ganaElement = new Audio('songs/1.mp3');
let audioPlayer = document.getElementById('audioPlayer');
let neeliLine = document.getElementById('neeliLine');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Bhula dena", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Satranga", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Bulleya", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kisi ki Muskurahat", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Challa", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Chaleya", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Don", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Wanted", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Lonely", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Manjha", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItem.forEach((element, i) => {
    element.querySelectorAll("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

audioPlayer.addEventListener('click', () => {
    // yeh || dono value 
    if (ganaElement.paused || ganaElement.currentTime <= 0) {
        ganaElement.play();
        audioPlayer.classList.remove('fa-play-circle')
        audioPlayer.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    } else {
        ganaElement.pause();
        audioPlayer.classList.remove('fa-pause-circle')
        audioPlayer.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

// yeh update kare ga blue line ko jitna progress gana chala hoo
// ganaElement.currentTime divided by ganaElement.duration multiply by 100

ganaElement.addEventListener('timeupdate', () => {
    kitnaChala = parseInt((ganaElement.currentTime / ganaElement.duration) * 100)
    neeliLine.value = kitnaChala;
})

neeliLine.addEventListener('change', () => {
    ganaElement.currentTime = neeliLine.value * ganaElement.duration / 100;
})

const sabkoChalao = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle') //e target right element target wrong
        element.classList.add('fa-play-circle')
    })
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        sabkoChalao();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        ganaElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        ganaElement.currentTime = 0;
        ganaElement.play();
        gif.style.opacity = 1;
        audioPlayer.classList.remove('fa-play-circle')
        audioPlayer.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    ganaElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    ganaElement.currentTime = 0;
    ganaElement.play();
    audioPlayer.classList.remove('fa-play-circle')
    audioPlayer.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    ganaElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    ganaElement.currentTime = 0;
    ganaElement.play();
    audioPlayer.classList.remove('fa-play-circle')
    audioPlayer.classList.add('fa-pause-circle')
})
