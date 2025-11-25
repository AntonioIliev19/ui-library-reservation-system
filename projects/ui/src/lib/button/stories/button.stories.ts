import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from '../button';

type ButtonExtraArgs = {
  children?: string;
};

type StoryType = Button & ButtonExtraArgs;

const meta: Meta<StoryType> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary','secondary','outline','danger']},
    size: { control: 'select', options: ['s','m','l']},
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clicked: { action: 'clicked' },
    children: { control: 'text' },
  }
};
export default meta;

type Story = StoryObj<StoryType>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: "s",
    fullWidth: true,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-button [variant]="variant" [size]="size" [fullWidth]="fullWidth" [disabled]="disabled" (clicked)="clicked($event)">Запиши час</ai-lib-button>`
  }),
  parameters: {
    docs: {
      storyDescription: 'Primary variant of Button'
    }
  }
};

export const WithIcon: Story = {
  args: {
    variant: "outline",
    size: 's',
    fullWidth: false,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-button [variant]="variant" [size]="size" [fullWidth]="fullWidth" [disabled]="disabled" (clicked)="clicked($event)">
        <span class="icon">★</span> With Star
      </ai-lib-button>`
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'm',
    fullWidth: false,
    disabled: false,
    children: 'Secondary Button'
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-button [variant]="variant" [size]="size" [fullWidth]="fullWidth" [disabled]="disabled" (clicked)="clicked($event)">
      {{children}}
    </ai-lib-button>`
  }),
  parameters: {
    docs: { storyDescription: 'Secondary variant' }
  }
};

export const OutlineLarge: Story = {
  args: {
    variant: 'outline',
    size: 'l',
    fullWidth: false,
    disabled: false,
    children: 'Outline Large Button'
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-button [variant]="variant" [size]="size" [fullWidth]="fullWidth" [disabled]="disabled" (clicked)="clicked($event)">
      {{children}}
    </ai-lib-button>`
  }),
  parameters: {
    docs: { storyDescription: 'Outline variant, large size' }
  }
};

export const DangerFullWidth: Story = {
  args: {
    variant: 'danger',
    size: 'm',
    fullWidth: true,
    disabled: false,
    children: 'Danger Full Width'
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-button [variant]="variant" [size]="size" [fullWidth]="fullWidth" [disabled]="disabled" (clicked)="clicked($event)">
      {{children}}
    </ai-lib-button>`
  }),
  parameters: {
    docs: { storyDescription: 'Danger variant, full width' }
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    fullWidth: false,
    disabled: true,
    children: 'Disabled'
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-button [variant]="variant" [size]="size" [fullWidth]="fullWidth" [disabled]="disabled" (clicked)="clicked($event)">
      {{children}}
    </ai-lib-button>`
  }),
  parameters: {
    docs: { storyDescription: 'Disabled state of button' }
  }
};

