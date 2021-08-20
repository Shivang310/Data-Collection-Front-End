//import logo from './logo.svg';
import './App.css';
//import {Button} from 'react-bootstrap'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import Validate from './Validate'
import Review from './Review'
import UpdateBots from './Update'
import Home from './Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Data-Collection-project</h1>
      <Route path="/Login">
        <Login/>
      </Route>
      <Route path="/Register">
        <Register/>
      </Route>
      <Route path="/Home">
        <Home/>
      </Route>
      <Route path="/Validate">
        <Validate/>
      </Route>
      <Route path="/Review">
        <Review/>
      </Route>
      <Route path="/Update">
        <UpdateBots/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
