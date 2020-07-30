import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';
import DiscoverBattle from './components/DiscoverBattle';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/Popular/">Popular</Link></li>
              <li><Link to="/MyList/">MyList</Link></li>
              <li><Link to="/PopularBattle/">Popular Battle</Link></li>
              <li><Link to="/Battle/">This week battle</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/MyList/">
              <MyList />
            </Route>
            <Route path="/Popular/">
              <Popular />
            </Route>
            <Route path="/PopularBattle/">
              <PopularBattle />
            </Route>
            <Route path="/DiscoverBattle/">
              <DiscoverBattle />
            </Route>
            <Route path="/">
              <Discover />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;