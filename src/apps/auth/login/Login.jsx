import {  
  Card, 
  CardBody,  
  Container,  
  Heading, 
  Image, 
  Stack, 
} from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth"
import React from "react";
import { FireConfig } from "../../../configs/firebase";
import { Hooks } from "../../../hooks";
import { centerStyles } from "../../../styles/style";

export default function Login() {
  const { auth, GoogleProvider} = FireConfig;
  const { actions} = Hooks.useLocations()

  const handleLogin = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res?.user.accessToken);
        localStorage.setItem("refreshToken", res?._tokenResponse.refreshToken);
        actions.goToMain()
      })
  }



  return (
    <Container {...centerStyles}>
      <Card maxW='sm'>
       <CardBody>
         <Image
           cursor={"pointer"}
           src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'
           alt='Green double couch with wooden legs'
           borderRadius='lg'
           onClick={handleLogin}
          />
          <Stack mt='6' spacing='3'>
          <Heading size='md'>Sign in with Google</Heading>
          </Stack>
       </CardBody>
      </Card>
    </Container>
  )
}; 