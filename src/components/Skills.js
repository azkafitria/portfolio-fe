import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function Skills({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"4xl"} id="skills" bg={"#FFF9F0"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 16, md: 16 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={"#334EAC"} fontWeight={800} fontSize={"2xl"}>
                  01
                </Text>
                <Text fontWeight={800} color={"gray.600"}>SKILLS</Text>
              </HStack>
              <Divider orientation="horizontal" bg={"gray.600"} />
            </Stack>
            {/* <Flex
              w="100%"
              direction={{ base: 'column-reverse', md: 'row' }}
            >
            {profile.skill.map((image) => (
                <Image boxSize='95px' objectFit='contain' src={image} />
              ))}
            </Flex> */}
            {/* <Stack align="center" justify="center" direction="row" px={4}>
              {profile.skill.map((i, image) => (
                // <Box boxSize='sm'>
                //   <Image src={image} />
                // </Box>
                <Image key={i} boxSize='10%' objectFit='contain' src={image} />
              ))}
            </Stack> */}
            <Stack align="center" justify="center" direction="row" px={4}>
              <Image boxSize='10%' objectFit='contain' src={"assets/python-logo.png"} />
              <Image boxSize='10%' objectFit='contain' src={"assets/django-logo.png"} />
              <Image boxSize='10%' objectFit='contain' src={"assets/java-logo.png"} />
              <Image boxSize='10%' objectFit='contain' src={"assets/springboot-logo.png"} />
              <Image boxSize='10%' objectFit='contain' src={"assets/postgresql-logo.png"} />
              <Image boxSize='10%' objectFit='contain' src={"assets/javascript-logo.png"} />
              <Image boxSize='10%' objectFit='contain' src={"assets/react-logo.png"} />
            </Stack>            
            {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.skill}
            </Text> */}
          </Stack>
        </Container>
      </>
    );
}

