import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MensDashBoard from './containers/Men';

const Routes=()=>{
return(
    
        <Router>
            <Switch>
                <Route path='/Men'>
                    <MensDashBoard />   
                </Route>
                <Route path='/Women'>
                    
                </Route>
                <Route path='/Kids'>
                    
                </Route>
            </Switch>
        </Router>
    
)
}
export default Routes;