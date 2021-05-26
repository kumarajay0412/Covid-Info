import React, { useState } from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker,Circle} from "react-google-maps";

function Districtmap( ){
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
               
                position => {
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                }
            )
        } else {
            console.log("error")
        }
    }
    getGeoLocation()
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={10.5}
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
              
            radius={4000}
            editable={false}
            draggable={false}
            options={{ strokeWeight: 6, fillColor: "#ff4466", fillOpacity: 0.4, strokeOpacity: 0.1 }}
            />
        </GoogleMap>
      ));
    return ( <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfzPQSyJEov2pNQELey3g56OUilFiyNUY&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `50%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      );
}
export default Districtmap;

