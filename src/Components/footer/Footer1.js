import { Heading, Stack, Text, Center, Divider, Image } from "@chakra-ui/react";
import React from "react";
import icon from "../../images/icon.svg";

const Footer1 = () => {
  return (
    <>
      <Stack
        direction={{ lg: "row", md: "column", base: "column" }}
        px={"14"}
        py={"14"}
      >
        <Stack
          direction={{ lg: "row", md: "row", base: "column" }}
          width={{ lg: "50%", md: "100%" }}
          justifyContent={"space-evenly"}
          textAlign={{ lg: "unset", base: "center" }}
        >
          <Stack direction={"column"}>
            <Image h={"32px"} src={icon} />
            <Text fontSize={"sm"}>© Volunteered 2021</Text>
          </Stack>
          <Center height={{ lg: "150px", base: "0" }}>
            <Divider orientation="vertical" />
          </Center>
          <Stack>
            <Heading fontSize={"lg"}>About us</Heading>
            <Text fontSize={"sm"}>About us</Text>
            <Text fontSize={"sm"}>Write a review</Text>
            <Text fontSize={"sm"}>Volunteered for mobile</Text>
            <Text fontSize={"sm"}>Careers</Text>
          </Stack>

          <Center height={{ lg: "150px", base: "0" }}>
            <Divider borderColor={"#D8DBDF"} orientation="vertical" />
          </Center>

          <Stack>
            <Heading fontSize={"lg"}>Volunteers</Heading>
            <Text fontSize={"sm"}>HOW IT WORKS</Text>
            <Text fontSize={"sm"}>Volunteered for volunteers</Text>
            <Text fontSize={"sm"}>Open a free account</Text>
          </Stack>
        </Stack>
        <Stack
          direction={{ lg: "row", md: "row", base: "column" }}
          width={{ lg: "50%", md: "100%" }}
          textAlign={{ lg: "unset", base: "center" }}
          gap={"3"}
        >
          <Center height={{ lg: "150px", base: "0" }}>
            <Divider orientation="vertical" />
          </Center>

          <Stack>
            <Heading fontSize={"lg"}>Buisness</Heading>
            <Text fontSize={"sm"}>HOW IT WORKS</Text>
            <Text fontSize={"sm"}>Volunteered for Business</Text>
            <Text fontSize={"sm"}>Create company account</Text>
          </Stack>
          <Center height={{ lg: "150px", base: "0" }}>
            <Divider orientation="vertical" />
          </Center>
          <Stack>
            <Heading fontSize={"lg"}>Recruiters</Heading>F
            <Text fontSize={"sm"}>HOW IT WORKS</Text>
            <Text fontSize={"sm"}>Volunteered for Recruiters</Text>
            <Text fontSize={"sm"}>Create account</Text>
          </Stack>
          <Center height={{ lg: "150px", base: "0" }}>
            <Divider orientation="vertical" />
          </Center>
          <Stack>
            <Heading fontSize={"lg"}>Support</Heading>
            <Text fontSize={"sm"}>FAQ</Text>
            <Text fontSize={"sm"}>Privacy policy</Text>
            <Text fontSize={"sm"}>Terms of sevice</Text>
            <Text fontSize={"sm"}>Contact us</Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer1;
