const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [
    {
        name: "song_1",
        title: "Let Me Down",
        artist: "Alec Benjamin",
    },
    {
        name: "song_2",
        title: "Shape of You",
        artist: "Ed sheeran",
    },
    {
        name: "song_3",
        title: "Senorita",
        artist: "Shawn Mendes",
    },
    {
        name: "song_4",
        title: "Believer",
        artist: "Imagine Dragons",
    },
    {
        name: "song_5",
        title: "Unstoppable",
        artist: "Sia",
    },
    {
        name: "song_6",
        title: "Memories",
        artist: "Maroon 5",
    },
    {
        name: "song_7",
        title: "Manjha",
        artist: "Vishal Mishra",
    },
    {
        name: "song_8",
        title: "Tere Hawale",
        artist: "Arijit Singh",
    },
    {
        name: "song_9",
        title: "Pasoori",
        artist: "Shae Gill",
    },
    {
        name: "song_10",
        title: "Sunshine",
        artist: "Sharman Joshi",
    },
    {
        name: "song_11",
        title: "Mann Mera",
        artist: "Gajendra Verma",
    },
    {
        name: "song_12",
        title: "Mera Safar",
        artist: "Lqlipse Nova",
    },
    {
        name: "song_13",
        title: "Kaafi Ho",
        artist: "Ayushmann Khurana",
    },
    {
        name: "song_14",
        title: "Kho Gye",
        artist: "Taaruk Raina",
    },
    {
        name: "song_15",
        title: "Aankhon Se",
        artist: "Dikshant",
    },

]


let isPlaying = false;

//for play function
 const palyMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
};

//for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    if(isPlaying){
        pauseMusic();
    }else{
        palyMusic();
    }
});

// changing the music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";   
}

songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    palyMusic();
};
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    palyMusic();
};

// Progress Bar Work
music.addEventListener('timeupdate', (event) =>{
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width =`${progress_time}%`;

    // music duration update
        let min_duration = Math.floor(duration / 60);
        let sec_duration = Math.floor(duration % 60);

        let tot_duration = `${min_duration}:${sec_duration}`;
        if(duration){
            total_duration.textContent =`${tot_duration}`;
        }

    // current duration update
        let min_currentTime = Math.floor(currentTime / 60);
        let sec_currentTime = Math.floor(currentTime % 60);
    
         if(sec_currentTime < 10){
            sec_currentTime = `0${sec_currentTime}`;
         }
         let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
            current_time.textContent =`${tot_currentTime}`;
    
});

// Progress on click
progress_div.addEventListener('click', (event) => {
    const { duration } = music;

    let move_progress = 
        (event.offsetX / event.srcElement.clientWidth) * duration;

    music.currentTime = move_progress;
    
});


// call next song
music.addEventListener('ended', nextSong)

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);


