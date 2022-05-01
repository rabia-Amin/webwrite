import {
  Heading,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Divider,
  Center,
  HStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import help from "../../images/help.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import React from "react";

const Volunteers = () => {
  return (
    <>
      <Stack
        direction={{ lg: "row", md: "row", base: "column" }}
        width={"100%"}
        backgroundColor={"#7333FC"}
        p={{ lg: "9", md: "8", base: "3" }}
      >
        <Stack width={{ lg: "50%", md: "50%", base: "100%" }} p={"7"} gap={"4"}>
          <Heading
            color={"white"}
            fontSize={{ lg: "4xl", md: "2xl", base: "2xl" }}
          >
            Help volunteers <br /> grow their career
          </Heading>
          <Text color={"white"} fontSize={{ lg: "md", md: "sm" }}>
            Build your organization with Volunteered. Advance your <br />
            career. Influence the organizations you care about.
          </Text>
          <Stack
            direction={"row"}
            p={"2"}
            px={"3"}
            alignItems={"center"}
            backgroundColor={"white"}
            width={"fit-content"}
          >
            <AiOutlineSearch color={"#A0A3BD"} />
            <Text
              fontSize={{ lg: "sm", md: "x-small", base: "8" }}
              color={"#A0A3BD"}
            >
              Search for name of organization
            </Text>
            <Center height="30px">
              <Divider orientation="vertical" />
            </Center>
            <GoLocation color={"#A0A3BD"} />
            <Text
              fontSize={{ lg: "sm", md: "x-small", base: "8" }}
              color={"#A0A3BD"}
            >
              Location
            </Text>
            <Spacer />
            <Button
              backgroundColor={"#7333FC"}
              width={"max-content"}
              color={"white"}
              fontSize={"sm"}
            >
              Search
            </Button>
          </Stack>
          {/* <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<AiOutlineSearch color='gray.300' />}
    />
    <Input placeholder='Search for name of organization' />

    
    <InputRightElement width='4.5rem'>
        <Button size='sm' >
        Search
        </Button>
      </InputRightElement>

  </InputGroup> */}
        </Stack>
        <Stack width={{ lg: "50%", md: "50%", base: "100%" }}>
          <Image width={"100%"} src={help} />
        </Stack>
      </Stack>
    </>
  );
};

export default Volunteers;
