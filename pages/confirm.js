import React, { useState, useEffect } from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter()
    const {pickup,dropoff} = router.query

    const [pickupCoordinates,setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates,setDropoffCoordinates] = useState([0,0])

    const getPickupCoordinates = (pickup) => {
        //const pickup = "Makurdi"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1IjoiYWJ5ZW1qIiwiYSI6ImNsa3N5aDgwdzA2MjczZ280MzU3c2h6aWQifQ.OITSHrQAV53FhWT7zPIusg`)
        .then(response=>response.json().then(data=>{setPickupCoordinates(data.features[0].center)}))
    }

    const getDropoffCoordinates = (dropoff) => {
        //const dropoff = "Lafia"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?access_token=pk.eyJ1IjoiYWJ5ZW1qIiwiYSI6ImNsa3N5aDgwdzA2MjczZ280MzU3c2h6aWQifQ.OITSHrQAV53FhWT7zPIusg`)
        .then(response=>response.json().then(data=>{setDropoffCoordinates(data.features[0].center)}))
    }

    useEffect(()=>{
        getPickupCoordinates(pickup)
        getDropoffCoordinates(dropoff)
    },[pickup,dropoff])

    return (
       <Wrapper>
         <Link href='/search'>
          <ButtonContainer>
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
          </ButtonContainer>
        </Link>
        <Map 
            pickupCoordinates = {pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}
        />
        <RideContainer>
          <RideSelector 
            pickupCoordinates = {pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}

            />

            <ConfirmButtonContainer>
                <ConfrimButon>
                 CONFIRM BENTAXI
                </ConfrimButon>
            </ConfirmButtonContainer>

        </RideContainer>
       </Wrapper>
    );
}
 
export default Confirm;

const Wrapper = tw.div`flex h-screen flex-col `
const RideContainer = tw.div`flex flex-col flex-1 h-1/2`
const ConfirmButtonContainer = tw.div`border-t-2`
const ConfrimButon = tw.div`bg-black text-white text-center my-4 mx-4 py-4 text-xl`
const ButtonContainer = tw.div`rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`;
const BackButton = tw.img`h-full object-contain`;