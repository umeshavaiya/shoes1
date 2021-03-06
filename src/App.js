import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Login from './pages/Login';
import Register from './pages/Register'
import MenShoes from './components/Shoes/MenShoes';
import WomenShoes from './components/Shoes/WomenShoes';
import Kids from './components/Shoes/Kids';
import ProductDetails from './components/ProductDetails';
import Me from './components/Shoes/Me';
import MenShoes1 from './components/Shoes/MenShoes1';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shoes/men" component={MenShoes} />
            <Route exact path="/shoes/women" component={WomenShoes} />
            <Route exact path="/shoes/kids" component={Kids} />
            <Route exact path="/shoes/men/Productdetails" component={ProductDetails} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/me1" component={MenShoes1} />
          </Switch>
        </div>
      </Router >
    </div>
  );
}

export default App;
