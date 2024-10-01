import { Container, Flex, VStack ,Box, Image } from '@chakra-ui/react';
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={"4"}>
        <Container maxW={"container.md"} padding={0}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
             {/* left hand-side*/}
          <Box display={{base:"none,",md:"block"}}>   
          <Image src='auth.png' h="650px" alt="Phone Img"/>       
          </Box>   

           {/*Right sidee*/}
        <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}> Get the App</Box>
            <Flex gap={5} justifyContent={"center"}>
                <Image src='/playstore.png' h={"10"} alt='Playstore Logo' />
                <Image src='/microsoft.png' h={"10"} alt='Microsoft Logo' />

            </Flex>


        </VStack>
           
     </Flex>

           
        
      
       



    </Container>


</Flex>
   
  );
};

export default AuthPage;