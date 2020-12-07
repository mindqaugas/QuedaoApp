import React, { useState, useEffect } from 'react';
import TopLine from './Components/TopLine/TopLine';
import Header from './Components/Header/Header';
import HeaderRoutes from './routes/headerRoutes';
import TourRoutes from './routes/tourRoutes';
import Slider from './Components/Slider/Slider';
import Filter from './Components/Filter/Filter';
import Tours from './Components/Tours/Tours';
import Cities from './Components/Cities/Cities';
import VerifyCode from './Components/TopLine/Account/VerifyCode';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { useDispatch, useSelector } from 'react-redux'

import {  screenDimAction } from "./store/actions/uiActions.js";





function App(props) {
 
  const dispatch = useDispatch();
  
  
    const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height: window.innerHeight});
  
    useEffect(() => {
      dispatch(
        screenDimAction({
          type: "SCREEN_DIM",
          dim: windowDimensions
        })
      );
    
    }, []);

  
  const confirmed = useSelector((state) => state.userReducer.data.confirmed);

  return(
    <React.Fragment>
    {confirmed === false 
    ? <VerifyCode />
    :
    <div className="main_layout">
    <TopLine />
    <Header />
    <HeaderRoutes />
    <TourRoutes >
      <Slider />
      <Filter />
    </TourRoutes>
    <Tours />
    <Cities />
    </div>
    }
    
    </React.Fragment>
  );


  // const dispatch = useDispatch();
  // const counter = useSelector(state => state.uiReducer.modal);
  // return (
  //   <div>
    
  //   <button onClick={() => dispatch(firstAction({ type: 'OPENMODAL'}))}>
  //     Increment counter
  //   </button>
  //   <span>{counter}</span>
  // </div>
  // );
}

export default App;
// const mapStateToProps = (state) => {
//   console.log(state.firstReducer.modal, 'pickeri')
//   return {
//     miner: state.firstReducer.modal,
//   };
// };

// export default connect(mapStateToProps)(
//   App
// );


