import "./playlist-item.js";

class Playlist extends HTMLElement {
  set playlist(playlist) {
    this._playlist = playlist;
    this.render();
  }

  render() {
    this._playlist.forEach((playlist) => {
      const playlistItemElement = document.createElement("playlist-item");
      playlistItemElement.playlist = playlist;
      this.appendChild(playlistItemElement);
    });
  }
}

customElements.define("play-list", Playlist);
