import React, {useEffect} from 'react';
import './Cities.css'
import { loadAllCitiesAction } from "../../store/actions/citiesActions.js";
import { useDispatch, useSelector } from "react-redux";
const Cities = () => {
    const cities = useSelector(state => state.citiesReducer.cities);
    console.log(cities, "AAAAAAAAA")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            loadAllCitiesAction({
              type: "LOAD_CITIES_ALL",
            })
          );
    },[]);


return(
    <React.Fragment>
        <div className="all-cities-title">All Cities</div>
        <div className="cities-general">
        {cities.reverse().slice(0, 3).map((city) => (
            <div className="cities-box-outer" key={city._id}>
                <div className="cities-box">
                    <div className="cities-foto">
                        <img className="cities-foto-img" src={`http://localhost:9000${city.foto}`} alt="Tour photo" />
                    </div>
                    <div className="cities-name">
                        {city.location}
                    </div>
                </div>
            </div>
        ))}
        </div>
    </React.Fragment>
)
}

export default Cities;