import { Divider, Stack, Text, Circle, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <Stack px={"14"} p={"4"}>
      <Divider borderColor="#D8DBDF" />
      <Stack direction={"row"} alignItems={"center"}>
        <Text fontSize={"sm"}>Follow us</Text>
        <HStack>
          <Circle size="40px" border={"1px solid gray"} color="white">
            <AiFillLinkedin color="#222151" />
          </Circle>
          <Circle size="40px" border={"1px solid gray"} color="white">
            <AiOutlineInstagram color="#222151" />
          </Circle>
          <Circle size="40px" border={"1px solid gray"} color="white">
            <AiOutlineTwitter color="#222151" />
          </Circle>
        </HStack>
        <Spacer />
        <Text fontSize={"sm"}>Mobile app</Text>
        <Circle size="40px" border={"1px solid gray"} color="white">
          <BsApple color="#222151" />
        </Circle>
      </Stack>
      <Divider borderColor="#D8DBDF" />
    </Stack>
  );
};

export default Footer;
