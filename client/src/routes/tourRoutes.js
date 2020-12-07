import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SingleTour from '../Pages/SingleTour';
const TourRoutes = (props) => {
    
return(
    <Switch>
        <Route path="/single-tour/:tourID" children={<SingleTour />}  exact/>
          
   
    </Switch>
)
}

export default TourRoutes;