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
    isToolshown: false,
    panelPosition: 'right',
  },
})
addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(centered)
setAddon(JSXAddon)

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
