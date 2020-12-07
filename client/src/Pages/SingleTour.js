import React, {useEffect} from 'react';
import RegisterForm from '../Components/TopLine/Account/RegisterForm';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadSingleTourAction } from "../store/actions/toursAcions.js";
import './SingleTour.css';
const SingleTour = () => {
    console.log(useParams());
    let {tourID} = useParams();
    const singleTour = useSelector(state => state.toursReducer.singleTour);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadSingleTourAction({
              type: "LOAD_TOURS_SINGLE", data: tourID
            })
          );
          window.scrollTo(0, 0)
    },[tourID]);

    return(
        <div className="single-tour-general">
            <div className="single-tour-slider">
                <img src={`http://localhost:9000${singleTour.foto}`} alt="Single Tour Photo" className="single-tour-image" />
                <div className="single-tour-slider-name">{singleTour.name}</div>
            </div>
            <div className="single-tour-info">
               <div className="single-tour-info-box">
                    <div className="single-tour-info-box-left">
                        <div className="single-tour-name">
                            <div className="single-tour-name-main">
                                {singleTour.name} 
                            </div>
                            <div className="single-tour-name-price">
                                {singleTour.price} &euro;  <p className="simple-text"> &nbsp;/ per person</p>
                            </div>
                        </div>
                        <div className="single-tour-desc">
                             {singleTour.description}
                        </div>
                        <div className="single-tour-inner-info">
                            
                        </div>
                    </div>
                    <div className="single-tour-info-box-right">
                        <RegisterForm />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default SingleTour;