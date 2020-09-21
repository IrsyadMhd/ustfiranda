class NavList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <ul>
          <li id="prof"><a href="#">Profile</a></li>
          <li id="vid"><a href="#">Video</a></li>
          <li id="pl"><a href="#">Playlist</a></li>
        </ul>
        `;
  }
}

customElements.define("nav-list", NavList);
