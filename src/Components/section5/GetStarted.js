import { Button, Divider, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const GetStarted = () => {
  return (
    <Stack px={"14"} py={"7"} alignItems={"center"}>
      <Divider borderColor={"#A0A3BD"}></Divider>
      <Stack alignItems={"center"} py={"12"} gap={"5"}>
        <Heading fontSize={{ lg: "2xl", base: "lg" }}>
          Ready to get started?
        </Heading>

        <Button
          backgroundColor={"#7333FC"}
          color={"white"}
          fontSize={"sm"}
          width={"max-content"}
        >
          Sign up for free
        </Button>
      </Stack>
      <Divider borderColor={"#A0A3BD"}></Divider>
    </Stack>
  );
};

export default GetStarted;
