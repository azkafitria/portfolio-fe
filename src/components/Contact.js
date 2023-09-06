import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useState } from "react";
import ProfileArray from "./ProfileArray";
import { sendMessage } from "../api/Message";

export default function Contact({ color }) {
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');
  const [message, setMessage] = useState('');

  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    // setIsLoading(true);
    try {
      await sendMessage({nameMessage, emailMessage, phoneMessage, message})
      setNameMessage('');
      setEmailMessage('');
      setPhoneMessage('');
      setMessage('');
      // setIsLoggedIn(true);
      // setIsLoading(false);
    } catch (error) {
      toast.error("Error")
      // setError('Invalid username or password');
      // setIsLoading(false);
      // setEmail('');
      // setPassword('');
    }
  }
  return (
    <>
      <Container maxW={"4xl"} id="contact" bg={"#D0E3FF"}>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} align="center"
            justify="center">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 16, md: 16 }}
            pt={{ base: 8, md: 16 }}
          >
            {/* <Stack align="center" direction="row" p={4}>
              <HStack mx={4}>
                <Text color={"#334EAC"} fontWeight={800} fontSize={"2xl"}>
                  04
                </Text>
                <Text fontWeight={800} color={"gray.600"}>CONTACTS</Text>
              </HStack>
              <Divider orientation="horizontal" bg={"gray.600"} />
            </Stack> */}
            <Stack as={Container} maxW={"3xl"} textAlign={{ base: "center", md: "right"}} spacing={1}>
              {/* <Text color={"#334EAC"} fontWeight={600} fontSize={"xl"} px={4}>
              Let's connect!
              </Text> */}
              {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
                {profile.contact}
              </Text> */}
              <Text color={"gray.600"} fontSize={"md"}>
                {profile.name}
              </Text>
              <Text color={"gray.600"} fontSize={"md"}>
                {profile.address}
              </Text>
              <Text color={"gray.600"} fontSize={"md"}>
                {profile.email}
              </Text>
              <Text color={"gray.600"} fontSize={"md"}>
                {profile.phone}
              </Text>
              <Center>
                <HStack pt={4} spacing={4}>
                  <Button onClick={linkedin} variant="ghost" px={0} _hover={{
                    borderColor: "transparent"
                  }}>
                    <FaLinkedin size={28} color={"#FFF9F0"}/>
                  </Button>
                  <Button onClick={linkedin} variant="ghost" px={0} _hover={{
                    borderColor: "transparent"
                  }}>
                    <FaGithub onClick={github} size={28} color={"#FFF9F0"}/>
                  </Button>
                  <Button onClick={linkedin} variant="ghost" px={0} _hover={{
                    borderColor: "transparent"
                  }}>
                    <FaEnvelope onClick={email} size={28} color={"#FFF9F0"}/>
                  </Button>
                </HStack>
              </Center>
            </Stack>
          </Stack>
          <Center height={{ base: "0px", md: "300px"}}>
            <Divider orientation='vertical' bg={"#334EAC"} />
          </Center>
          <Container maxW={"md"}>
          <Stack
            as={Box}
            textAlign={{ base: "center", md: "left"}}
            // spacing={{ base: 8, md: 14 }}
            pb={{ base: 8, md: 16 }}
            pt={{ base: 16, md: 16 }}
            pl={{ base: 0, md: 5 }}
            // bg={"#EDF1F6"}
          >
            <Text color={"#334EAC"} fontWeight={600} fontSize={"xl"} px={4}>
              Let's connect!
            </Text>
            <form onSubmit={handleSendMessage}>
            <Stack spacing={3} maxW={"500px"} align={{ base: "center", md: "end"}}>
              <Input value={nameMessage} onChange={event => setNameMessage(event.currentTarget.value)}
                placeholder='Name' _placeholder={{ opacity: 1, color: 'gray.400' }} color={"gray.600"} bg={"#FFF9F0"} size="sm" variant='outline' focusBorderColor={"#F2F0DE"} borderRadius="none"/>
              <Input value={emailMessage} onChange={event => setEmailMessage(event.currentTarget.value)}
                type='email' placeholder='Email Address' _placeholder={{ opacity: 1, color: 'gray.400' }} color={"gray.600"} bg={"#FFF9F0"} size="sm" variant='outline' focusBorderColor={"#F2F0DE"} borderRadius="none"/>
              <Input value={phoneMessage} onChange={event => setPhoneMessage(event.currentTarget.value)}
                placeholder='Phone Number' _placeholder={{ opacity: 1, color: 'gray.400' }} color={"gray.600"} bg={"#FFF9F0"} size="sm" variant='outline' focusBorderColor={"#F2F0DE"} borderRadius="none"/>
              <Textarea value={message} onChange={event => setMessage(event.currentTarget.value)}
                placeholder='Message' _placeholder={{ opacity: 1, color: 'gray.400' }} color={"gray.600"} bg={"#FFF9F0"} size="sm" variant='outline' focusBorderColor={"#F2F0DE"} borderRadius="none"/>
              <Button 
                width="30%"
                size="sm"
                bg={"#F7F2EB"}
                borderRadius={"none"}
                borderColor={"#F7F2EB"}
                style={{
                  transition: "transform .15s",
                }}
                _hover={{
                  borderColor: "gray.400",
                  transform: "scale(1.02)"
                }}
                color={"gray.600"} 
                variant='outline'
                type="submit"
                // onClick={handleSendMessage}
                >
                Send
              </Button>
            </Stack>
            </form>
          </Stack>
          </Container>
        </Stack>
      </Container>
    </>
  );
}

