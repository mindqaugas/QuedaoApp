import React, { useState } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../store/actions/uiActions.js";
const Filter = () => {
  const [monthState, setMonth] = useState("Sausis");
  const [cityState, setCity] = useState("Madridas");
  const [priceState, setPrice] = useState(0);
  const dispatch = useDispatch();

  const month = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis",
  ];
  const city = ["Madridas", "Malaga"];
  const price = [100, 500, 1000, 1500];
  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onSubmitFilter = (e) => {
    e.preventDefault();
    dispatch(
      filterAction({
        type: "ON_FILTER",
        filterData: { month: monthState, city: cityState, price: priceState },
      })
    );
  };
  return (
    <div className="filter_general">
      <form onSubmit={onSubmitFilter} className="form-general">
        <select className="select-style-first selectpicker" data-size="5" onChange={onChangeMonth}>
          {month.map((monthOption) => (
            <option className="select-option"  value={monthOption} key={monthOption}>
              {monthOption}
            </option>
          ))}
        </select>
        <select className="select-style-second" onChange={onChangeCity}>
          {city.map((cityOption) => (
            <option value={cityOption} key={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
        <select className="select-style-third" onChange={onChangePrice}>
          {price.map((priceOption) => (
            <option value={priceOption} key={priceOption}>
              {priceOption === 100 ? "0 - 100 €" : null}
              {priceOption === 500 ? "100 - 500 €" : null}
              {priceOption === 1000 ? "500 - 1000 €" : null}
              {priceOption === 1500 ? "1000 - 1500 €" : null}
            </option>
          ))}
        </select>
        <button type="submit" className="filter-submit">Find now</button>
      </form>
    </div>
  );
};

export default Filter;
