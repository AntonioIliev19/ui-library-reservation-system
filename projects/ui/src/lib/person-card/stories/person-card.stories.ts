import type { Meta, StoryObj } from '@storybook/angular';
import { PersonCard } from '../person-card';
import { PersonCardData } from '../../models/person-card/person-card-data';

const Petko: PersonCardData = {
  avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
  name: 'Петко Георгиев',
  title: 'Топ Бръснар',
  subtitle: '4 Години',
  tags: ['Класическо', 'Брада'],
  nextAvailable: 'Днес 14:30',
  actionLabel: 'Запиши час',
}

const Mihail: PersonCardData = {
  avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
  name: 'Михаил Скилов',
  title: 'Шеф Бръснар',
  subtitle: '4 Години',
  tags: ['Масаж', 'Брада', 'Фейд'],
  nextAvailable: 'Утре 14:30',
  actionLabel: 'Запиши час',
}

const meta: Meta<PersonCard> = {
  title: 'UI/PersonCard',
  component: PersonCard
};
export default meta;

type Story = StoryObj<PersonCard>;

export const Card: Story = {
  args: {
    data: Petko,
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-person-card [data]="data"></ai-lib-person-card>`,
  }),
  parameters: {
    docs: {
      storyDescription: 'Primary variant of Button',
    },
  },
};

export const Card2: Story = {
  args: {
    data: Mihail,
  },
  render: (args) => ({
    props: args,
    template: `<ai-lib-person-card [data]="data"></ai-lib-person-card>`,
  }),
  parameters: {
    docs: {
      storyDescription: 'Primary variant of Button',
    },
  },
};

