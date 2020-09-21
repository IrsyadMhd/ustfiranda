import "./video-item.js";

class VideoList extends HTMLElement {
  set videos(videos) {
    this._videos = videos;
    this.render();
  }

  render() {
    this._videos.forEach((video) => {
      const videoItemElement = document.createElement("video-item");
      videoItemElement.video = video;
      this.appendChild(videoItemElement);
    });
  }
}

customElements.define("video-list", VideoList);
