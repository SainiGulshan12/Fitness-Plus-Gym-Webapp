import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import Fees from './Components/Membership/Fees';
import Workout from './Components/Workout/Workout';
import About from './Components/About/About';
import Contact from './Components/ContactUs/Contact';
import Footer from './Components/Footer/Footer';
// import Submit from './Components/Submit/Submit';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <div className="Main-container">
                    <Navbar/>
                    <div className="Main-content">
                        <Home/>
                        <Fees/>
                        <Workout/>  
                        <About/>
                        <Contact />
                    </div>
                </div>
                <Footer/>
                {/* <Submit/> */}
            </div>
        </Router>       
    );
}
export default App;