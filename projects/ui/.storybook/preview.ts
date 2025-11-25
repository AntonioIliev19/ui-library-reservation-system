import type { Preview } from '@storybook/angular'
import { HttpClientModule } from '@angular/common/http';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (storyFn) => {
      const story = storyFn();
      return {
        ...story,
        moduleMetadata: {
          imports: [HttpClientModule],
        },
      };
    },
  ],
};

export default preview;
