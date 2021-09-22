import { Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart  from './components/Cart';
import Contact from './components/Contact';
import Details from './components/Details';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Provider} from "react-redux";
import store from "./components/store"

function App() {
  return (

    <Provider store={store}>
    <BrowserRouter>    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={About}/>
        <Route path="/details/:id" component={Details} />
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
