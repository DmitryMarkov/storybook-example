import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'
import { Button } from './Button'

storiesOf('Button', module)
  .addParameters({
    info: { inline: true, header: false },
  })
  .add('with text', () => (
    <Button bg="#d7d7d7">{text('children', 'Hello Button')}</Button>
  ))
  .addWithJSX('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
