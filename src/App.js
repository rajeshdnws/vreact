import logo from './logo.svg';
import './App.css';
import Login from './components/auth/login'
import Registration from './components/auth/registration';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Details from './components/auth/details';



function App() {
  return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/details" component={Details} />
      </Router>
  );
}

export default App;
