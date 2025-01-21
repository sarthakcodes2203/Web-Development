
// let currentsong=new Audio()


// async function getsongss() {
//         let a = await fetch("songs"); 
//         let response = await a.text();
//         let div = document.createElement("div");
//         div.innerHTML = response;
//         let as = div.getElementsByTagName("a");
//         let songss = [];

//         for (let index = 0; index < as.length; index++) {
//             const element = as[index];
//             if(element.href.endsWith(".mp3")) {
//                 songss.push(element.href.split("cc_")[1]);
//             }
//         }
//         return songss;
// }

// const playmusic =(track,pause=false)=>{
//     currentsong.src="/songs/"+track
//     if(!pause){
//         currentsong.play();
//         "assets/play".src="assets/pause.svg"

//     }
//     document.querySelector(".songinfo").innerHTML=decodeURI(track)
//     document.querySelector(".songtime").innerHTML="00:00 / 00:00"

// }

// function timeplayed(secs){
//     if(isNaN(secs)||secs<0){
//         return "Invalid Input"
//     }

//     const mins=Math.floor(secs/60)
//     const remsecs=Math.floor(secs%60)

//     const newmins=string(mins).padstart(2,'0')
//     const newsecs=string(remsecs).padstart(2,'0')
//     return `${newmins}:${newsecs}`
// }



// async function main() {

//     let songs = await getsongss();
//     // playmusic(songs[0],true)
//     let songul=document.querySelector(".songlist").getElementsByTagName("ul")[0];
//     for (const song of songs) {
//         songul.innerHTML=songul.innerHTML+`<li>
//                                             <img class="invert" src="assets/music.svg" alt="">
//                                             <div class="info">
//                                             <div>${song}</div>
//                                             <div>By Sarthak</div>
//                                             </div>
//                                             <div class="playnow">
//                                             <span>Play Now</span>
//                                             <img class="invert" src="assets/play.svg" alt="">
//                                             </div>
//                                         </li>`;
//     }

//     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach (e=>{  
//         e.addEventListener("click",element=>{
//             console.log(e.querySelector(".info").firstElementChild.innerHTML);
//             playmusic(e.querySelector(".info").firstElementChild.innerHTML)
//         })
        
    
//     })

//     play.addEventListener("click",()=>{
//         if(currentsong.paused){
//             currentsong.play()
//             "assets/play".src="assets/pause.svg"
//         }
//         else{
//             currentsong.pause()
//             "assets/pause".src="assets/play.svg"
//         }
//     })

//     currentsong.addEventListener('timeupdate',()=>{
//         console.log(currentsong.currenttime, currentsong.duration);
//         document.querySelector(".songtime").innerHTML= `${timeplayed(currentsong.currentTime)}/${timeplayed(currentsong.currentTime)}`
//         document.querySelector(".circle").computedStyleMap.left=( currentsong.currenttime/currentsong.duration)*100 +"%"
//     })

//     document.querySelector(".seekbar").addEventListener("click",e=>{
//         let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100
//         document.querySelector(".circle").style.left=percent+"%"
//         currentsong.currentTime=(currentsong.duration*percent)/100
//     })
// }

// main();




// New code starting from here

const song1 = new Audio('./songs/Heroine - Neelkamal Singh (1).mp3');
const song2 = new Audio('./songs/Laal Peeli Akhiyaan.mp3');
const song3 = new Audio('./songs/Teri Baaton Mein Aisa Uljha Jiya.mp3');
const song4 = new Audio('./songs/Why-This-Kolaveri-Di.mp3');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');

const songs = [
    { ele: song1, audioName: 'Heroine - Neelkamal Singh' },
    { ele: song2, audioName: 'Laal Peeli Akhiyan' },
    { ele: song3, audioName: 'Teri baton mein aisa uljha jiya' },
    { ele: song4, audioName: 'why-this-kolaveri-di' }
];

for (const song of songs) {
    song.ele.addEventListener('ended', () => {
        updateSong('next');
        playPauseSong();
    });
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click', () => {
    playPauseSong();
});

nextBtn.addEventListener('click', () => {
    updateSong('next');
    playPauseSong();
});

prevBtn.addEventListener('click', () => {
    updateSong('prev');
    playPauseSong();
});

const updateSong = (action) => {
    currentSong.pause();
    currentSong.currentTime = 0;

    if (action === 'next') {
        current++;
        if (current > songs.length - 1) current = 0;
    }

    if (action === 'prev') {
        current--;
        if (current < 0) current = songs.length - 1;
    }
    currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName;
};

const playPauseSong = () => {
    if (currentSong.paused) {
        currentSong.play();
        playPauseIcon.className = 'ph-bold ph-pause';
    } else {
        currentSong.pause();
        playPauseIcon.className = 'ph-bold ph-play';
    }
};


const playlist = document.getElementById('playlist');
const playlistItems = playlist.getElementsByTagName('li');

for (let i = 0; i < playlistItems.length; i++) {
    const songTitle = playlistItems[i].querySelector('.song-title');

    songTitle.addEventListener('click', function () {
        current = parseInt(this.parentNode.getAttribute('data-index'));
        updateSong('current'); 
        playPauseSong();
    });
}

// A personal tip do not over complicate things try to find the easiest approch always
// just make sure that your code is working and it gives you the desired output you wanted from it



