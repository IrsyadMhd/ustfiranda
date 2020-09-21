class NavLogo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img
            src=""
            alt="logo"
            style="border-radius: 50%; height: 50px; width: 50px;"
          />
          <h1>Dr. Firanda on YouTube</h1>
      `;
  }
}

customElements.define("nav-logo", NavLogo);
