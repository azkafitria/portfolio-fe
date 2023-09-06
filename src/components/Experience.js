import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);
  
  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"4xl"} id="experience" bg={"#FFF9F0"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 16, md: 16 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4} minW="100%">
              <Text color={"#334EAC"} fontWeight={800} fontSize={"2xl"}>
                02
              </Text>
              <Text fontWeight={800} color={"gray.600"}>INTERNSHIP EXPERIENCE</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          {/* <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center> */}
          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => exp.tags.includes(selected))
              .map((exp) => (
                <Fade bottom>
                  <Card key={exp.company} bg={"#F7F2EB"} variant='outline' borderColor={"#F2F0DE"} borderRadius="none" size="sm"
                  style={{
                    transition: "transform .15s",
                  }}
                  _hover={{
                    borderColor: "gray.400",
                    transform: "scale(1.005)"
                  }}
                  >
                  {/* <Card key={exp.company} size="sm"> */}
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} w={100}/>
                          <Box px={2} align="left">
                            {/* <Text fontWeight={600}>{exp.company}</Text> */}
                            <Text fontSize="lg" color={"gray.600"} fontWeight={600}>{exp.company}</Text>
                            <Text fontSize="sm" color={"gray.600"}>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300} fontSize="sm" color={"gray.600"}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index} fontSize="sm" color={"gray.600"} align="left">
                              <ListIcon
                                // boxSize={6}
                                as={ChevronRightIcon}
                                color={"#7096D1"}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    {/* <CardFooter>
                      <HStack spacing={2}>
                        {exp.badges.map((badge) => (
                          <Badge
                            key={badge.name}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter> */}
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
