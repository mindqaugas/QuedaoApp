import React, {useEffect} from 'react';
import "./Tours.css";
import { useDispatch, useSelector } from "react-redux";
import { loadAllToursAction } from "../../store/actions/toursAcions.js";
import { Link, useRouteMatch } from 'react-router-dom';

import LikePik from "../../assets/icons/like.png"
import DislikePik from "../../assets/icons/dislike.png"

const Tours = () => {
    const tours = useSelector(state => state.toursReducer.tours);
    const screenDim = useSelector(state => state.uiReducer.dim);
  
    function truncate(str, no_words) {
        return str.split(" ").splice(0,no_words).join(" ");
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            loadAllToursAction({
              type: "LOAD_TOURS_ALL",
            })
          );
    },[]);
    
return (
    <React.Fragment>
    <div className="all-tours-title">All Tours</div>
    <div className="tours-general">
       <div className="tours-media-screen"> 
       {tours.reverse().slice(0, 8).map((tour) => (
        <div className="tours-box-outer" key={tour._id}>
        <Link to={`/single-tour/${tour._id}`} className="tour-link">
            
        <div className="tours-box">
           <div className="tour-foto">
                <img className="tour-foto-img" src={`http://localhost:9000${tour.foto}`} alt="Tour photo" />
                <div className="tour-rating">
                    <div className="tour-likes">
                   <img src={LikePik} alt="Like" className="tour-like-img" /> {tour.likes}
                    </div> 
                    <div className="tour-dislikes">
                    <img src={DislikePik} alt="Dislike" className="tour-dislike-img" /> {tour.dislikes}
                    </div> 
                    <div className="tour-city">
                    Location: {tour.location}
                    </div> 
                </div> 
           </div>
           <div className="tour-main">
                <div className="tour-name">
                    {tour.name}
                </div>
                <div className="tour-desc">
                    {truncate(tour.description, 15)}...
                </div>
                <div className="tour-price">
                    {tour.price} &euro;
                </div>
           </div>
        </div>
       
        </Link>
        </div>
    ))}
    </div>
    </div>
    </React.Fragment>
);
};

export default Tours;