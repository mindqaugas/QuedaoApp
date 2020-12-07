import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Slider from '../Components/Slider/Slider';
import Filter from '../Components/Filter/Filter';
const HeaderRoutes = (props) => {

return(
    <Switch>
        <Route path="/" render={props => <React.Fragment><Slider /><Filter /></React.Fragment>} exact />
       
   
    </Switch>
)
}

export default HeaderRoutes;