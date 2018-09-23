import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs/react'
import { Button } from './Button'

storiesOf('Button', module).addWithJSX('with background', withInfo('description')(() => (
  <Button bg='#d7d7d7'>{text('children', 'Hello')}</Button>
  )),
  { skip: 1 })