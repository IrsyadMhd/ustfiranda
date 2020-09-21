class VideoItem extends HTMLElement {
  set video(video) {
    this._video = video;
    this.render();
  }

  render() {
    this.innerHTML = `
        <iframe  src="https://www.youtube.com/embed/${this._video}">
        </iframe>
        `;
  }
}

customElements.define("video-item", VideoItem);
