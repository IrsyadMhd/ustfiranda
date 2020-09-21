class PlaylistItem extends HTMLElement {
  set playlist(playlist) {
    this._playlist = playlist;
    this.render();
  }

  render() {
    this.innerHTML = `
            <a id="${this._playlist.id}" href="#">${this._playlist.snippet.title}</a>
        `;
  }
}

customElements.define("playlist-item", PlaylistItem);
