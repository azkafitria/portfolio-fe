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

export default function Resume({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"4xl"} id="skills" bg={"#FFF9F0"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 16 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={"#334EAC"} fontWeight={800} fontSize={"2xl"}>
                  02
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
            <Stack align="center" justify="center" direction="row" px={4}>
              {profile.skill.map((image) => (
                // <Box boxSize='sm'>
                //   <Image src={image} />
                // </Box>
                <Image boxSize='10%' objectFit='contain' src={image} />
              ))}
            </Stack>
            
            {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.skill}
            </Text> */}
          </Stack>
        </Container>
      </>
    );
}

