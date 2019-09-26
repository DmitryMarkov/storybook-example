import {
  configure,
  setAddon,
  addDecorator,
  addParameters,
} from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered/react'

addParameters({
  options: {
    isToolshown: true,
    panelPosition: 'right',
  },
})
addDecorator(withInfo)
addDecorator(withKnobs)
// addDecorator(centered)
setAddon(JSXAddon)

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
