import "./style/style.css";
import "../component/nav-logo.js";
import "../component/nav-list.js";
import "../component/nav-menu.js";
import "../component/side-nav.js";
import "../component/playlist.js";
import "../component/video-list.js";
import "../component/profile-article.js";
import {
  menu,
  title,
  list,
  videoList,
  playlist,
  navPl,
  navVideo,
  navProfile,
  sideNav,
  closeButton,
  key,
  url,
  channelId,
} from "./state.js";

const showLatestVideo = () => {
  fetch(
    `${url}/search?part=snippet&channelId=${channelId}&key=${key}&maxResults=10&order=date`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error) {
        title.innerHTML = responseJson.error.message;
        return;
      } else {
        const items = responseJson.items;
        const videoId = [];
        items.forEach((item) => {
          videoId.push(item.id.videoId);
        });
        getVideos(videoId);
      }
    });
};

showLatestVideo();

const kajianBaru = title.innerText;

navVideo.addEventListener("click", () => {
  showLatestVideo();
  title.innerText = kajianBaru;
});

// Toggle isi menu pada navbar saat ukuran handphone
menu.addEventListener("click", () => {
  list.classList.toggle("show");
});

// Menampilkan halaman profil saat tombol profile diklik
navProfile.addEventListener("click", () => {
  videoList.innerHTML = "";
  title.innerText = "Profil Dr. Firanda Andirja";
  const profile = document.createElement("profile-article");
  videoList.appendChild(profile);
});

// Menampilkan menu playlist saat diklik
navPl.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  sideNav.classList.add("hidden");
});

// Tampilkan Logo Channel Pada Navbar
fetch(`${url}/channels?part=snippet,statistics&id=${channelId}&key=${key}`)
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.error) {
      title.innerHTML = responseJson.error.message;
      return;
    } else {
      const logo = document.querySelector("nav img");
      logo.src = responseJson.items[0].snippet.thumbnails.default.url;
    }
  });

// Ambil seluruh daftar playlist pada channel dan simpan di menu playlist
fetch(
  `${url}/playlists?part=id,snippet&key=${key}&channelId=${channelId}&maxResults=40`
)
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.error) {
      title.innerHTML = responseJson.error.message;
      return;
    } else {
      playlist.playlist = responseJson.items;
      const plItems = playlist.querySelectorAll("a");
      for (let item of plItems) {
        // tampilkan video dari playlist item yang diklik
        item.addEventListener("click", function () {
          const playlistId = this.getAttribute("id");
          const text = this.innerText;
          fetch(
            `${url}/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=25`
          )
            .then((response) => response.json())
            .then((responseJson) => {
              const items = responseJson.items;
              const videoId = [];
              items.forEach((item) => {
                videoId.push(item.snippet.resourceId.videoId);
              });
              getVideos(videoId);
            });
          sideNav.classList.add("hidden");
          title.innerHTML = text;
        });
      }
    }
  });

const getVideos = (videoId) => {
  videoList.innerHTML = "";
  videoList.videos = videoId;
};
