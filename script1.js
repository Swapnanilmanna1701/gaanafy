const music = new Audio("./audio/1.mp3");
//music.play();
const songs = [
  {
    id: 1,
    songName: `On My Way <br />
        <div class="subtitle">Alan Walkar</div>`,
    poster: "./image/1.jpg",
  },
  {
    id: 2,
    songName: `Alone <br />
        <div class="subtitle">Alan Walkar</div>`,
    poster: "./image/2.jpg",
  },
  {
    id: 3,
    songName: `Alone2 <br />
        <div class="subtitle">Alan Walkar</div>`,
    poster: "./image/3.jpg",
  },
  {
    id: 4,
    songName: `Specture <br />
        <div class="subtitle">Alan Walkar</div>`,
    poster: "./image/4.jpg",
  },
  {
    id: 5,
    songName: `Ignite <br />
        <div class="subtitle">Alan Walkar</div>`,
    poster: "./image/5.jpg",
  },
  {
    id: 6,
    songName: `Different World <br />
        <div class="subtitle">Alan Walkar</div>`,
    poster: "./image/6.jpg",
  },
  {
    id: 7,
    songName: `Baundule Ghuri <br />
        <div class="subtitle">Anupam Roy</div>`,
    poster: "./image/7.jpg",
  },
  {
    id: 8,
    songName: `Hasi-Rewind <br />
        <div class="subtitle">Amit Mishra</div>`,
    poster: "./image/8.jpg",
  },
  {
    id: 9,
    songName: `Boba Tunnel <br />
        <div class="subtitle">Anupam Roy</div>`,
    poster: "./image/9.jpg",
  },
  {
    id: 10,
    songName: `Alag Aasman<br />
        <div class="subtitle">Anuv Jain</div>`,
    poster: "./image/10.jpg",
  },
  {
    id: 11,
    songName: `Gul <br />
        <div class="subtitle">Anuv Jain</div>`,
    poster: "./image/11.jpg",
  },
  {
    id: 12,
    songName: `Meri Baton Main Tu<br />
        <div class="subtitle">Anuv Jain</div>`,
    poster: "./image/12.jpg",
  },
  {
    id: 13,
    songName: `Barrishein <br />
        <div class="subtitle">Anuv Jain</div>`,
    poster: "./image/13.jpg",
  },
  {
    id: 14,
    songName: `Mishri <br />
        <div class="subtitle">Anuv Jain</div>`,
    poster: "./image/14.jpg",
  },
  {
    id: 15,
    songName: `Rihaa <br />
        <div class="subtitle">Anuv Jain</div>`,
    poster: "./image/15.jpg",
  },
  {
    id: 16,
    songName: `Obosheshe <br />
        <div class="subtitle">Arijit singh</div>`,
    poster: "./image/16.jpg",
  },
  {
    id: 17,
    songName: `Oviman <br />
        <div class="subtitle">Tanveer Evan</div>`,
    poster: "./image/17.jpg",
  },
  {
    id: 18,
    songName: `Abar Phire Ele <br />
        <div class="subtitle">Arijit Singh</div>`,
    poster: "./image/18.jpg",
  },
  {
    id: 19,
    songName: `Jo Tu Na Mila<br />
        <div class="subtitle">Ashim Azhar</div>`,
    poster: "./image/19.jpg",
  },
  {
    id: 20,
    songName: `Tu Hai Kahan <br />
        <div class="subtitle">Aur</div>`,
    poster: "./image/20.jpg",
  },
  {
    id: 21,
    songName: `Karone Okarone <br />
        <div class="subtitle">Minar Rahaman</div>`,
    poster: "./image/21.jpg",
  },
];
Array.from(document.getElementsByClassName("song_item")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
});
Array.from(document.getElementsByClassName("song_item")).forEach((e, i) => {
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
let masPlay = document.getElementById("masPlay");
masPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wv.classList.add("active1");
    masPlay.classList.add("bi-pause-fill");
    masPlay.classList.remove("bi-play-fill");
  } else {
    music.pause();

    masPlay.classList.remove("bi-pause-fill");
    masPlay.classList.add("bi-play-fill");
  }
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playlistplay")).forEach((el) => {
    el.classList.remove("bi-pause-circle-fill");
    el.classList.add("bi-play-circle-fill");
  });
};
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("song_item")).forEach((el) => {
    el.style.background = rgb(105, 105, 170, 0.0);
  });
};
let index = 0;
let poster_play = document.getElementById("poster_play");
let downloadMusic = document.getElementById("downloadMusic");
Array.from(document.getElementsByClassName("playlistplay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    //console.log(index);
    music.src = `./audio/${index}.mp3`;
    poster_play.src = `./image/${index}.jpg`;
    music.play();
    masPlay.classList.add("bi-pause-fill");
    masPlay.classList.remove("bi-play-fill");
    downloadMusic.href= `audio/${index}.mp3`

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      let { songName } = elss; // let {songName, poster};
      title.innerHTML = songName;
      downloadMusic.setAttribute('download', songName);
      //poster_play.src=poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[
      index
    ].style.background = rgb(105, 105, 170, 0.1);
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
  });
});
let currentTime1 = document.getElementById("currentTime1");
let endTime = document.getElementById("endTime");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementById("dot");
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  endTime.innerText = `${min1}:${sec1}`;
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentTime1.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
let back = document.getElementById("back");
let next = document.getElementById("next");
//back
back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("song_item")).length;
  }
  music.src = `./audio/${index}.mp3`;
  poster_play.src = `./image/${index}.jpg`;
  music.play();
  masPlay.classList.add("bi-pause-fill");
  masPlay.classList.remove("bi-play-fill");
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName } = elss; // let {songName, poster};
    title.innerHTML = songName;
    //poster_play.src=poster;
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[
      index
    ].style.background = rgb(105, 105, 170, 0.1);
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
  });
});
//next
next.addEventListener("click", () => {
  index ++;
  if (index > Array.from(document.getElementsByClassName("song_item")).length){
    index = 1;
  }
  music.src = `./audio/${index}.mp3`;
  poster_play.src = `./image/${index}.jpg`;
  music.play();
  masPlay.classList.add("bi-pause-fill");
  masPlay.classList.remove("bi-play-fill");
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName } = elss; // let {songName, poster};
    title.innerHTML = songName;
    //poster_play.src=poster;
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[
      index
    ].style.background = rgb(105, 105, 170, 0.1);
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
  });
});

let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
    switch(a){
        case 'next':
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;

            case 'repeat':
              shuffle.classList.remove('bi-arrow-repeat');
              shuffle.classList.remove('bi-music-note-beamed');
              shuffle.classList.add('bi-shuffle');
              shuffle.innerHTML='random';
              break;
              case 'random':
              shuffle.classList.remove('bi-arrow-repeat');
              shuffle.classList.add('bi-music-note-beamed');
              shuffle.classList.remove('bi-shuffle');
              shuffle.innerHTML='next';
              break;

         
            
    }
    
});
 
music.addEventListener('ended',()=>{
  index++;
  music.src = `./audio/${index}.mp3`;
    poster_play.src = `./image/${index}.jpg`;
    music.play();
    masPlay.classList.add("bi-pause-fill");
    masPlay.classList.remove("bi-play-fill");
    downloadMusic.href= `audio/${index}.mp3`

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      let { songName } = elss; // let {songName, poster};
      title.innerHTML = songName;
      downloadMusic.setAttribute('download', songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[
      index
    ].style.background = rgb(105, 105, 170, 0.1);
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");

});















































// song section
let popsong_left = document.getElementById("popsong_left");
let popsong_right = document.getElementById("popsong_right");
let popsong = document.getElementsByClassName("popsong")[0];
popsong_left.addEventListener("click", () => {
  popsong.scrollLeft -= 330;
});
popsong_right.addEventListener("click", () => {
  popsong.scrollLeft += 330;
});
// artist section
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let items = document.getElementsByClassName("items")[0];
pop_art_left.addEventListener("click", () => {
  pop_art_left.scrollLeft -= 330;
});
popsong_right.addEventListener("click", () => {
  pop_art_left.scrollLeft += 330;
});
