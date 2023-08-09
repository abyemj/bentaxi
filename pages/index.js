import logo from "../public/images/bentaxi-logo1.png";
//import userIcon from "../public/images/bentaxi-logo1.png";
//import Image from 'next/bentaxi-logo1.png';
import { useEffect,useState } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from 'next/link';
import {auth} from '../firebase'
import {onAuthStateChanged,signOut} from 'firebase/auth'
import {useRouter} from 'next/router'

export default function Home() {

  const [user,setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth , user => {
      if(user){
        setUser({
          name: user.displayName,
          photoUrl : user.photoURL,
        })
      }
      else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (

      <Wrapper>
        <Map />
        <ActionItems>
          <Header>
            {/* <BentaxiLogo src = {logo}/> */}
            <h6>BENTAXI</h6>
            <Profile>
              <Name>{user && user.name} </Name>
              <UserImage src = {"https://img.icons8.com/?size=512&id=67418&format=png"} onClick={()=> signOut(auth)}/>

            </Profile>
          </Header>
          <ActionButtons>
            <Link href="/search">
              <ActionButton>
                <ActionButtonImage src="https://cdn.iconscout.com/icon/free/png-512/free-car-1080-449858.png?f=avif&w=256"/>
                Ride
              </ActionButton>
            </Link>
            <ActionButton>
              <ActionButtonImage src="https://img.icons8.com/?size=512&id=15130&format=png"/>
              Bike</ActionButton>
            <ActionButton>
              <ActionButtonImage src="https://cdni.iconscout.com/illustration/premium/thumb/tuk-tuk-thailand-taxi-auto-rickshaw-tricycle-taxi-thailand-public-service-5066964-4246741.png"/>
              Tricycle</ActionButton>
          </ActionButtons>
          <InputButton>Where to?</InputButton>
        </ActionItems>
      </Wrapper>

  )
}

const Wrapper = tw.div` flex flex-col h-screen `

const ActionItems = tw.div` flex-1 p-4`
const Header = tw.div` flex justify-between items-center`
const Profile = tw.div` flex items-center `
const Name = tw.div`mr-4 w-20 text-sm`
const UserImage = tw.img` h-12 w-12 rounded-full border border-gray-200 p-px`
const BentaxiLogo = tw.img` `
const ActionButtons = tw.div` flex`
const ActionButton = tw.div` flex flex-col justify-center bg-gray-200 flex-1 m-1 h-32 items-center rounded-lg transform hover:scale-105 transition text-xl`
const ActionButtonImage =tw.img`h-3/5`
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`