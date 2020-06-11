import React from 'react';
import './App.modules.css';
import Header from './Header.js'
import Home from './Home.js';
import About from './About.js'
import Footer from './Footer.js';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Contact from './Contact.js'
import Outlets from './Outlets.js'
import Store from './Store.js'
import NotFound from './NotFound.js'

function App() {
    return (

        <div className="App">
            <Router>
                <Header />
            
            <div className='HomeDisplay'>
                <div className='HomeDisplayContent'>
                    <Switch>
                        {/* <Home /> */}

                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="/Products" component={Store} />
                        <Route path="/Outlets" component={Outlets} />
                        <Route path="**" component={NotFound} />
                    
                    </Switch>
                </div>
            </div>
            <Footer />
            </Router>
        </div >

    )
}

export default App;