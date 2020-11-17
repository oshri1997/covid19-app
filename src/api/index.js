import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let difUrl = url;
  if (country) {
    difUrl = `${url}/countries/${country}`;
  }

  try {
    const { data } = await axios.get(difUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries;
  } catch (error) {
    console.log(error);
  }
};
