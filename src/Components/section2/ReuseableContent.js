import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ReuseableContent = (props) => {
  return (
    <Stack pl={"16"}>
      <Heading fontSize={{ lg: "2xl", base: "lg" }}>{props.heading}</Heading>
      <Text fontSize={"sm"}>{props.text}</Text>
      <Button
        fontSize={"sm"}
        backgroundColor={"#7333FC"}
        color={"white"}
        width={"max-content"}
      >
        {props.btn}
      </Button>
    </Stack>
  );
};

export default ReuseableContent;
