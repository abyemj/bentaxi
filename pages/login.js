import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
  }, []);

  return (
    <Wrapper>
      <Brand>BENTAXI</Brand>
      <Logo src='https://ouch-cdn2.icons8.com/njSl2QkK3NA4TPb7Yas01KU87oePf6rCaQvFW6n-ZwA/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTU5/LzE2ZWE1NWE4LWE0/MzQtNGI3Mi04NjBk/LTdhOTcxMjE1Y2Rm/MS5wbmc.png' />
      <Title>Log in to access your account</Title>
      {/* <HeadImage src='./singup_mobile.svg'></HeadImage> */}
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200 p-4`;
const SignInButton = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full `;
const Brand = tw.div`text-2xl font-bold pt-4 text-black-500`;
const Logo = tw.img`h-64 w-auto object-contain `;
const Title = tw.div`text-xl pt-4 text-gray-500`;
const HeadImage = tw.img`object-contain w-full h-64 `;