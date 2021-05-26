import axios from "axios";
import { usePosition } from 'use-position';

export const patientData = async () => {
    try {
      const response = await axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india" ,{ headers: {
        'x-rapidapi-key': '77193f3ef6msh956fa91a56f30fbp1a29abjsn9d3cd897abe3',
        'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
      }});
      const data= response;
      return data.data;
    } catch (error) {
      return error;
    }
  };
  export const worldpatientData = async () => {
    try {
      const data = await axios.get("https://covid-19-tracking.p.rapidapi.com/v1" ,{ headers: {
        'x-rapidapi-key': '77193f3ef6msh956fa91a56f30fbp1a29abjsn9d3cd897abe3',
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
      }});
      return data.data[0];
    } catch (error) {
      return error;
    }
  };

  export const vaccineData = async () => {
    try {
        const response = await  axios.get('https://cors-anywhere.herokuapp.com/https://www.mygov.in/sites/default/files/covid/vaccine/covid_vaccine_timeline.json?#%7Bitim%7D/');
        const data= response.data.vaccine_data;
      return data.pop();
    } catch (error) {
      return error;
    }
  };
