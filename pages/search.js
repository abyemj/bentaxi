import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";

const Search = () => {

    const [pickup,setPickup] = useState('')
    const [dropoff,setDropoff] = useState('')


    return (
       <Wrapper>

        <ButtonContainer>
            <Link href="/">
                <BackButton src = "https://img.icons8.com/?size=512&id=99704&format=png" />
            </Link>
        </ButtonContainer>

        <InputContainer>
            <FromToIcons>
                <Circle src ="https://img.icons8.com/?size=512&id=99634&format=png"/>
                <Line src = "https://img.icons8.com/?size=512&id=118836&format=png"/>
                <Square src = "https://img.icons8.com/?size=1x&id=98382&format=png"/>
            </FromToIcons>
            <InputBoxes>
                <Input placeholder='Enter pickup location' value={pickup} onChange={(e)=>{setPickup(e.target.value)}} />
                <Input placeholder='where to?' value={dropoff} onChange={(e)=>{setDropoff(e.target.value)}} />
            </InputBoxes>
            <PlusIcon src='https://img.icons8.com/?size=512&id=95749&format=png'/>
        </InputContainer>

        <SavedPlaces>
            <StarIcon src="https://img.icons8.com/?size=1x&id=84925&format=png"/>
            Saved Places
        </SavedPlaces>
        <Link href={{
            pathname:'/confirm',
            query:{pickup:pickup,dropoff:dropoff}
        }}>
        <ConfirmButtonContainer>
            CONFIRM LOCATIONS
        </ConfirmButtonContainer>
        </Link>
       </Wrapper>
    );
}
 
export default Search;

const Wrapper = tw.div`bg-gray-200 h-screen `
const ButtonContainer = tw.div`bg-white px-4`
const BackButton = tw.img` h-10 cursor-pointer`
const InputContainer = tw.div`bg-white flex items-center px-4 mb-2`
const FromToIcons = tw.div` w-10 flex flex-col mr-2 items-center`
const Circle = tw.img`h-2.5`
const Line = tw.img`h-10`
const Square = tw.img`h-3`
const InputBoxes = tw.div`flex flex-col flex-1`
const Input = tw.input`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none ml-3`
const PlusIcon = tw.img`w-10 h-10 bg-gray-200 rounded-full`
const SavedPlaces = tw.div` flex items-center bg-white px-4 py-2`
const StarIcon = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`
const ConfirmButtonContainer = tw.div`bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl`
//const ConfirmLocationButton = tw.button` text-white h-10`