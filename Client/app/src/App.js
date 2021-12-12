import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import Signin from './Pages/Signin';
import Occassions from './Pages/Occassions';
import Rss from './Pages/Rss'
import Register from './Auth/registerSection'
import Nav from "./Shared/Nav"
import Footer from './Shared/Footer';



function App() {
  
  return (
    <>
      <Router>
        <>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={Signin} />
            <Route path="/occasions" component={Occassions} />
            <Route path="/register" component={Register} />
            <Route path="/RSS" component={Rss}/>
          </Switch>
        <Footer />
        </>
      </Router>
    </>
  )
}

export default App;


