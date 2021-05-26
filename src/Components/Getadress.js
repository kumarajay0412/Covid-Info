
import React, {  useState,  useEffect } from 'react';
import Geocode from "react-geocode";
import { usePosition } from 'use-position';

function Getadress() {
    const [position, setPosition] = useState({});
    const {latitude, longitude, error} = usePosition();
    const [District, setDistrict] = useState(null);
    const [State, setState] = useState(null);
  
    Geocode.setApiKey("AIzaSyDfzPQSyJEov2pNQELey3g56OUilFiyNUY");
    Geocode.setLanguage("en");
    Geocode.setRegion("IN");
  useEffect(() => {
      console.log(latitude,longitude,State,District)
    if((State==null || District==null )&& latitude!==null){
    Geocode.fromLatLng(latitude, longitude).then(
      response => {
          
        for (var i=0; i<response.results[0].address_components.length; i++) {
          for (var b=0;b<response.results[0].address_components[i].types.length;b++) {

              if (response.results[0].address_components[i].types[b]=== "administrative_area_level_2") {
                  var city= response.results[0].address_components[i];
              
                  setDistrict(city.long_name)
              }
              if (response.results[0].address_components[i].types[b] === "administrative_area_level_1") {
                var state = response.results[0].address_components[i];
                setState(state.long_name)
                break;
            }
          }    
      }
      },
      error => {
        console.error(error);
      }
    );
  }
  });
  console.log(State,District)
        return(
                <p></p>
        );
}

export default Getadress;
