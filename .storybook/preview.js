import React from 'react'
import {withConsole} from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


import '!style-loader!css-loader!sass-loader!../src/materialize-src/sass/materialize.scss'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

const { addDecorator } = require("@storybook/react");
const { jsxDecorator } = require("storybook-addon-jsx");
 
addDecorator(jsxDecorator);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs)

