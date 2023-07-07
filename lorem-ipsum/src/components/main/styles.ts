import { css } from 'lit';

export const style = [
  css`
    :host {
      display: block;
      text-align: center;
      --font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      margin-top: 20px;
      align-self: center;
      font-family: (var --font-family);
      font-size: 30px;
      font-weight: 500;
      background-color: mediumaquamarine;
      border: 3px solid black;
      color: black;
    }

    .result {
      display: flex;
      justify-content: center;
      margin-top: -140px;
    }

    #txt {
      font-size: 24px;
      font-family: var(--font-family);
      align-items: justify, center;
      width: 850px;
      height: 600px;
      margin: 50px auto;
      margin-top: 0px;
    }

    .container {
      height: 100vh; /* opcional - define a altura total da página */
    }

    h1 {
      font-size: 100px;
      font-weight: 600;
      font-family: var(--font-family);
    }

    h6 {
      font-size: 60px;
      font-weight: 600;
      margin-right: 300px;
      font-family: var(--font-family);
    }
  `,
];
