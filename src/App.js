
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
    
     <Router>
       <Navbar>
       </Navbar>
       <Switch>
           <Route path='/' exact component=
           {Home}/>
           <Route path='/products' exact component={Products} />
           <Route path ='/services' exact component={Services} />
           <Route path ='/Sign-up' exact component={SignUp} />
           

         </Switch>
     </Router>
    </>
  );
}

export default App;
