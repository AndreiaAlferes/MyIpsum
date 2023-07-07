import { html, TemplateResult } from 'lit';
import '../src/service/applorem.js';

export default {
  title: 'LoremIpsum',
  component: 'lorem-ipsum',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <lorem-ipsum
    style="--lorem-ipsum-background-color: ${backgroundColor}"
    .header=${header}
  ></lorem-ipsum>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
