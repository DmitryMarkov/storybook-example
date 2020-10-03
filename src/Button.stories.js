import * as React from 'react'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { Button } from './Button'

const label = 'bg'
const defaultValue = '#d7d7d7'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Just a test',
  },
  decorators: [withKnobs],
}

export const story1 = () => (
  <Button bg={color(label, defaultValue)}>
    {text('children', 'Hello Button')}
  </Button>
)
story1.story = { name: 'default', parameters: { layout: 'centered' } }

export const story2 = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
story2.story = { name: 'with emoji' }
