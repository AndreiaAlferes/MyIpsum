import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/main/loremipsum.js';
import '../components/footer/footer.js';

@customElement('app-loremm')
export class AppLorem extends LitElement {
  render() {
    return html`
      <lorem-ipsum></lorem-ipsum>
      <footer-element></footer-element>
    `;
  }
}
