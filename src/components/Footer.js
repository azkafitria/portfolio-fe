import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={"#D0E3FF"}
      color={"#081F5C"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>© 2023 Azka Fitria. All rights reserved</Text>
      </Container>
    </Box>
  );
}
