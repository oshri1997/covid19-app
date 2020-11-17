import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl, FormLabel } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchedData();
  }, []);

  return (
    <div
      style={{
        marginTop: "25px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minWidth: "400px",
        justifyContent: "space-around",
      }}
    >
      <FormLabel htmlFor="my-input">Select Country</FormLabel>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
