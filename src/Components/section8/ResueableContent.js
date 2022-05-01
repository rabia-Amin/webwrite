import React from "react";
import {
  Button,
  Heading,
  ListItem,
  Radio,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const ResueableContent = (props) => {
  return (
    <>
      <Stack
        px={{ lg: "28", base: "5" }}
        color={"white"}
        gap={"4"}
        py={{ lg: "28", md: "10" }}
      >
        <Heading fontSize={"md"}>{props.heading}</Heading>
        <Heading fontSize={"lg"}>
          {" "}
          {props.heading2}
          <br />
          {props.heading3}
        </Heading>
        <Text fontSize={"sm"}>
          {props.text}
          <br /> {props.text1}
        </Text>
        <Stack direction={"row"} gap={"4"}>
          <Stack>
            <UnorderedList>
              <ListItem fontSize={"sm"}> {props.text2} </ListItem>
            </UnorderedList>
            <Text fontSize={"sm"}>
              {props.text3} <br />
              {props.text4} <br />
              {props.text5}
            </Text>
          </Stack>
          <Stack>
            <UnorderedList>
              <ListItem fontSize={"sm"}>{props.text6}</ListItem>
            </UnorderedList>

            <Text fontSize={"sm"}>{props.text7}</Text>
            <Text fontSize={"sm"}> {props.text8}</Text>
          </Stack>
          <Stack>
            <UnorderedList>
              <ListItem fontSize={"sm"}> {props.text9}</ListItem>
            </UnorderedList>
            <Text fontSize={"sm"}>
              {props.text10}
              <br /> {props.text11}
            </Text>
          </Stack>
        </Stack>
        <Button
          backgroundColor={"white"}
          color={"#7333FC"}
          width={"max-content"}
        >
          {props.btn}
        </Button>
      </Stack>
    </>
  );
};

export default ResueableContent;
