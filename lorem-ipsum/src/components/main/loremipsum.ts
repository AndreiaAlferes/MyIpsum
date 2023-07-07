import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style } from './styles.js';

@customElement('lorem-ipsum')
export class Loremipsum extends LitElement {
  @property({ type: Number }) numOfParagraphs = 0;

  @property({ type: Array }) paragraphs: string[] = [];

  static styles = style;

  public generateIpsumLorem() {
    const loremIpsum = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Praesent faucibus vestibulum ipsum, nec rhoncus nulla rutrum at.',
      'Curabitur auctor lectus sed purus placerat tristique.',
      'Nulla auctor posuere tortor, id cursus nulla congue a.',
      'Proin ut neque nec leo euismod malesuada vitae vitae metus.',
      'Duis a efficitur nibh, nec iaculis ex.',
      'Etiam vulputate semper urna, in finibus orci pellentesque vitae.',
      'Quisque eleifend lacus vitae lectus ullamcorper, in tempus velit eleifend.',
      'Fusce pharetra nunc ut dapibus fermentum.',
      'Sed ac felis id orci commodo tempor.',
      'Aliquam erat volutpat. Morbi semper erat nec erat vestibulum congue.',
      'In a metus ut lectus aliquet iaculis vel sed lectus.',
      'Aenean ac enim eu lorem tristique elementum.',
      'Phasellus eu ligula ut tortor ullamcorper elementum in id odio.',
      'Nulla id leo at dui lacinia viverra.',
      'Vivamus non nunc interdum, pretium dolor eu, facilisis est.',
      'Suspendisse rhoncus enim sed maximus efficitur.',
      'Donec sed mi eu tellus vulputate varius at a enim.',
      'Curabitur sit amet elit a purus posuere bibendum.',
      'Sed vestibulum purus a mauris iaculis, ac consectetur justo rutrum.',
      'Vestibulum efficitur enim at iaculis pellentesque.',
      'Phasellus sagittis orci at nunc faucibus, ac viverra felis dignissim.',
      'Mauris eget libero at arcu efficitur ullamcorper.',
      'Nam ultricies metus a fringilla imperdiet.',
      'Nunc tristique justo ut tellus vestibulum, a ultrices risus consequat.',
      'Sed vitae ipsum id leo condimentum dictum in sit amet nibh.',
      'Quisque ut purus eu lorem tempus bibendum.',
      'Morbi ut lacus sed mauris eleifend laoreet.',
      'Vivamus rutrum tortor eget elit accumsan, sit amet dapibus diam feugiat.',
      'Fusce sed tortor ac mauris malesuada molestie.',
      'Aliquam lacinia erat id diam iaculis, et dignissim lacus posuere.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    ];

    const numParagraphs = Math.floor(Math.random() * 28) + 1;
    this.numOfParagraphs = numParagraphs;
    this.paragraphs = [];

    for (let i = 0; i < numParagraphs; i++) {
      const randomIndex = Math.floor(Math.random() * loremIpsum.length);
      const paragraph = loremIpsum[randomIndex];
      this.paragraphs.push(paragraph);
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Tired of Boring Lorem Ipsum?</h1>
        <div class="result">
          <h6>Paragraph:${this.numOfParagraphs}</h6>
          <button @click=${this.generateIpsumLorem}>Generate</button>
        </div>
        <div class="texting">
          <p id="txt">${this.paragraphs}</p>
        </div>
      </div>
    `;
  }
}
