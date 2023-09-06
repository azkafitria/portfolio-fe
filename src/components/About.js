import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"4xl"} id="about" bg={"#FFF9F0"}>
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
                <Text fontWeight={800} color={"gray.600"}>ABOUT</Text>
              </HStack>
              <Divider orientation="horizontal" bg={"gray.600"} />
            </Stack>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.about}
            </Text>
          </Stack>
        </Container>
      </>
    );
}

