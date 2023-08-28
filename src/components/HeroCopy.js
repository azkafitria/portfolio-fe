import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  HStack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Flex,
  Fade,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import '../Hero.css';


export default function Header({ color }) {
  const profile = ProfileArray();
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const linkedin = () => {
    window.open(
                `${profile.linkedin}`,
                "_blank",
                "noreferrer,noopener"
              );
  };
  return (
    <>
      <Heading>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Heading>

      <Container maxW={"4xl"} id="hero" bg={"#FFF9F0"}>
        <Stack
          className="animate"
          pb={{ base: 24, md: 48 }}
          pt={{ base: 24, md: 36 }}
          px={4}
        >
          <Stack spacing='52px' direction={{ base: 'column-reverse', md: 'row' }}>
            <Stack
              as={Box}
              textAlign={"right"}
              spacing={{ base: 8, md: 8 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                lineHeight={"110%"}
              >
                {/* <div className ="waviy">
                  <span color={"#7096D1"}>L</span>
                  <span color={"#7096D1"}>o</span>
                  <span color={"#7096D1"}>a</span>
                  <span color={"#7096D1"}>d</span>
                  <span color={"#7096D1"}>i</span>
                  <span color={"#7096D1"}>n</span>
                  <span color={"#7096D1"}>g</span>
                  <span color={"#7096D1"}>.</span>
                </div> */}
                <Text className="hello" fontSize='3xl' color={"#334EAC"}>
                    <span className="title-word title-word-1">H</span>
                    <span className="title-word title-word-2">E</span>
                    <span className="title-word title-word-3">L</span>
                    <span className="title-word title-word-4">L</span>
                    <span className="title-word title-word-5">O</span>
                    <span className="title-word title-word-6">!</span>
                </Text>
                {/* <Text as={"span"} color={"#7096D1"}>
                  {profile.headerName} <br />
                </Text> */}
                <Text as={"span"} color={"#334EAC"}>
                  {profile.headerRole}
                </Text>
              </Heading>
              <Text
                color={"gray.600"}
                fontSize={{ base: "sm", sm: "md", md: "md" }}
              >
                {profile.headerDesc}
              </Text>
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={"end"}
                position={"relative"}
              >
                <Button
                  // colorScheme={color}
                  color={"#FFF9F0"}
                  bg={"#7096D1"}
                  borderRadius={"none"}
                  px={6}
                  _hover={{
                    bg: "#7096D1",
                  }}
                  onClick={linkedin}
                >
                  Let's connect!
                </Button>
              </Stack>
            </Stack>
            <Flex minWidth='30%' justify={{ base: 'end', md: 'start' }} gap='2'>
              <Image objectFit='cover' src='/assets/profile-pics.jpeg' alt='Azka Fitria' />
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});