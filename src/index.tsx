import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Port, ContactMe, } from './components'
import './styles.css'
import reportWebVitals from './reportWebVitals';
//import for react routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import for Firebase Auth
import 'firebase/auth';

ReactDOM.render(
  <React.StrictMode>
        <Router>
          <Switch>
              <Route exact path='/'>
                <Home title='Kevin Stevens - Portfolio'/>
              </Route>
              <Route path='/portfolio' component={Port} />
              <Route path='/contactme' component={ContactMe} />
          </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();