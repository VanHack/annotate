import React from 'react'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from '../configureStore'
import ContentList from '../components/ContentList'
import ContentDetail from '../components/ContentDetail'
import Menu from '../components/Menu'
import './AnnotateRoot.css'

const store = configureStore()

const AnnotateRoot = () => (
  <Provider store={store}>
    <Router>
    <div class="app-container">
    <Menu/>
      <div class="content-container">
      <Switch>
        <Route exact path="/detail/:id" component={ContentDetail} />
        <Route path="/" component={ContentList} />
      </Switch>
      </div>
    </div>
    </Router>
  </Provider>
)

export default AnnotateRoot