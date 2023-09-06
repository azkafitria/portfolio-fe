import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaGitlab } from "react-icons/fa";
import { Fade } from "react-reveal";
import { useState } from "react";
import ProjectsArray from "./ProjectsArray";
import OtherProjectsArray from "./OtherProjectsArray";
import TagsArray from "./TagsArray";

export default function Projects({ color }) {
    const projects = ProjectsArray();
    const others = OtherProjectsArray();
    const options = TagsArray("ProjectsTags");
    console.log(others)
    
    const [selected, setSelected] = useState("All");

    const handleSelected = (value) => {
      setSelected(value);
    };
    
  return (
    <>
      <Container maxW={"4xl"} id="projects" bg={"#FFF9F0"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 16, md: 16 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={"#334EAC"} fontWeight={800} fontSize={"2xl"}>
                03
              </Text>
              <Text fontWeight={800} color={"gray.600"}>PROJECTS</Text>
            </HStack>
            <Divider orientation="horizontal" bg={"gray.600"} />
          </Stack>
          {/* <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack> */}
          {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text> */}
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                // colorScheme={selected === "All" ? `${color}` : "yellow"}
                // colorScheme={color}
                  bg={"#F7F2EB"}
                  borderRadius={"none"}
                  variant="outline"
                  borderColor={selected === "All" ? "gray.400" : "#F7F2EB"}
                  // px={6}
                  style={{
                    transition: "transform .15s",
                  }}
                  _hover={{
                    borderColor: "gray.400",
                    transform: "scale(1.02)"
                  }}
                  color={"gray.600"} 
                onClick={() => handleSelected("All")}
              >
                All
              </Button>
              {options.map((option) => (
                <Button
                  key={option.value}
                  // colorScheme={selected === option.value ? `${color}` : "yellow"}
                  bg={"#F7F2EB"}
                  borderRadius={"none"}
                  borderColor={selected === option.value ? "gray.400" : "#F7F2EB"}
                  style={{
                    transition: "transform .15s",
                  }}
                  _hover={{
                    borderColor: "gray.400",
                    transform: "scale(1.02)"
                  }}
                  color={"gray.600"} 
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other) => (
                <Fade bottom>
                  <Card key={other.name} bg={"#F7F2EB"} variant='outline' borderColor={"#F2F0DE"} borderRadius="none" 
                  style={{
                    transition: "transform .15s",
                  }}
                  _hover={{
                    borderColor: "gray.400",
                    transform: "scale(1.02)"
                  }}
                  minHeight={"260px"}
                  >
                    {/* <Image objectFit="cover" src={other.image} h='100px' 
                      sytle={{
                        background: "rgba(0, 0, 0, 0.5)",
                      }}
                    /> */}
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        {/* <Heading size="sm">{other.name}</Heading> */}
                        <Text fontSize="lg" py={2} color={"gray.600"} fontWeight={600}>
                          {other.name}
                        </Text>
                        <Text fontSize="sm" py={2} color={"gray.600"}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`#334EAC`}
                              fontSize="sm"
                              isExternal
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              mb={2}
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
