import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from './App';
import ImageView from './components/ImageView';


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={App}/>
                    <Route path="/image/:id" component={ImageView}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Router
