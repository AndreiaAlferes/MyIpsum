import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './footerStyle.js';

@customElement('footer-element')
export class FooterElement extends LitElement {
  static styles = style;

  render() {
    return html`
      <footer>
        <p>I hope you enjoy this page.</p>
      </footer>
    `;
  }
}
