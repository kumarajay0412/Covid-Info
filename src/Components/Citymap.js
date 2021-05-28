import React, {  useState,  useEffect } from 'react';
import Geocode from "react-geocode";
import {withScriptjs,withGoogleMap,GoogleMap,Marker,Circle} from "react-google-maps";
import {CircularProgress ,Grid } from '@material-ui/core';
function Citymap() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    Geocode.setApiKey("AIzaSyDfzPQSyJEov2pNQELey3g56OUilFiyNUY");
    Geocode.setLanguage("en");
    Geocode.setRegion("IN");
    
   
      useEffect(() => {
        Geocode.fromAddress("Morena").then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              setLatitude(lat)
              setLongitude(lng);
              console.log(latitude,longitude)
            },
            (error) => {
              console.error(error);
            }
          );
        }, []);

      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={5.5}
          defaultCenter={{ lat:latitude, lng: longitude }}
        >
          <Marker
            position={{ lat: latitude, lng: longitude }}
          />
            <Circle
              defaultCenter={{
                lat: parseFloat(latitude),
                lng: parseFloat(longitude)
              }}
              
            radius={50000}
            editable={false}
            draggable={false}
            options={{ strokeWeight: 6, fillColor: "#ff4466", fillOpacity: 0.4, strokeOpacity: 0.1 }}
            />
        </GoogleMap>
      ));

    return (  !(longitude)? < CircularProgress /> : (
            <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfzPQSyJEov2pNQELey3g56OUilFiyNUY&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        )
          );
          
    
}

export default Citymap
