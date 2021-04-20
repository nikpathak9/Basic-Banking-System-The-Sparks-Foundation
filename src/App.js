import React from "react";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/About';
import Contact from './Components/Contact';
import AddUSer from "./Components/AddUser";
import ViewCustomer from "./Components/ViewCustomer";
import Transfer from './Components/Transfer';
import PageNotFound from './Components/PageNotFound';
import Transactions from "./Components/History";
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/addUser" component={AddUSer} />
            <Route exact path="/viewCustomer" component={ViewCustomer}/>
            <Route exact path="/transfer" component={Transfer}/>
            <Route exact path="/transactions" component={Transactions} />
            <Route component={PageNotFound}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
