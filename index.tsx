import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, Signin, DataTable} from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Provider store = { store }>
  <Router>
    <Switch>

      <Route exact path="/">
       <Home title={'Marvel Inventory'}/> 
        
      </Route>


  <Route path='/dashboard'>
    <Dashboard></Dashboard>
  </Route>

  <Route path='/Signin'>
    <Signin></Signin>
  </Route>

    </Switch>
  </Router>
  </Provider>
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();