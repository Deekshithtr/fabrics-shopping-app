import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MensDashBoard from './containers/mensContainer';
import WomensDashBoard from './containers/womensContainer';
import KidsDashBoard from './containers/kidsContainer';

const Routes=()=>{
return(
    
        <Router>
            <Switch>
                <Route path='/Men'>
                    <MensDashBoard />   
                </Route>
                <Route path='/Women'>
                    <WomensDashBoard />
                </Route>
                <Route path='/Kids'>
                    <KidsDashBoard />
                </Route>
            </Switch>
        </Router>
    
)
}
export default Routes;