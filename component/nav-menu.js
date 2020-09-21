class NavMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        `;
  }
}

customElements.define("nav-menu", NavMenu);
