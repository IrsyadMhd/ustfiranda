class SideNav extends HTMLElement {
  connectedCallback() {
    this.classList.add("hidden");
    this.render();
  }

  render() {
    // const plItem = document.createElement("playlist-item");
    this.innerHTML = `
        <a href="#" class="clsbtn">&times;</a>
        <play-list></play-list>
        `;
  }
}

customElements.define("side-nav", SideNav);

// {/* <a href="#" class="clsbtn">&times;</a>
// <div class="playlists"></div> */}
