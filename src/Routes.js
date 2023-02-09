import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './Contactus';


function routes(){
return (

    <Router>
        <Route exact path="/Navbarr"  element = {<Navbarr/>} />
        <Route exact path="/Contactus" element= {<ContactUs/>}/>
        <Route exact path="/Uses" element= {<Uses/>}/>
    </Router>

    );
}
export default routes;