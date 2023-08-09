import React, { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJ5ZW1qIiwiYSI6ImNsa3N5aDgwdzA2MjczZ280MzU3c2h6aWQifQ.OITSHrQAV53FhWT7zPIusg';



const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/navigation-day-v1',
          center: [6.465422,3.406448],
          zoom: 3,
        })

        if (props.pickupCoordinates){addToMap(map,props.pickupCoordinates)}
        if (props.dropoffCoordinates){addToMap(map,props.dropoffCoordinates)}
        
        if (props.pickupCoordinates && props.dropoffCoordinates){ map.fitBounds([props.dropoffCoordinates,props.pickupCoordinates],{padding:60})}
        
      },[props.pickupCoordinates,props.dropoffCoordinates])
    
      const addToMap = (map,coordinates) => {
        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }


    return (
        <Wrapper id="map">Map</Wrapper> 
    );
}
 
export default Map;

const Wrapper = tw.div`flex-1 h-1/2 `