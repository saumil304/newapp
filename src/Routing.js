import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
            
            <Route path="/" component={Home}/>
            
            </BrowserRouter>
            
        </div>
        )
    }



export default Routing;
