import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'

import AnnotateRoot from './containers/AnnotateRoot'
import registerServiceWorker from './registerServiceWorker';

render(
  <AnnotateRoot />,
  document.getElementById('root')
)
registerServiceWorker();
