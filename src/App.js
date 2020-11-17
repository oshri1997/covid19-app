import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import logo from "./images/Covid.png";

import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const fetchingData = await fetchData();
      setData(fetchingData);
    };
    fetch();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchingData = await fetchData(country);
    setData(fetchingData);
    setCountry(country);
  };

  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data} />
    </div>
  );
}

export default App;
