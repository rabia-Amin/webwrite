import {
  Divider,
  Heading,
  HStack,
  Image,
  SkeletonCircle,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logoo from "../../images/logoo.svg";

const Reuseablecard = (props) => {
  return (
    <Stack
      border={"2px dashed black"}
      py={"5"}
      px={"4"}
      backgroundColor={"#F7EDED"}
    >
      <HStack>
        <Image src={logoo} />
        <Heading fontSize={{ lg: "md", base: "sm" }} fontWeight={"normal"}>
          {props.heading}
        </Heading>
        <Spacer />

        <Text fontSize={"sm"}> {props.text}</Text>
      </HStack>
      <HStack>
        <Text fontSize={"sm"}>{props.text1}</Text>
        <Text fontSize={"sm"}>{props.text2}</Text>
      </HStack>
      <Divider />
      <HStack>
        <Text fontSize={"sm"}>{props.text3}</Text>
        <Divider orientation="vertical" />
        <Text fontSize={"sm"}>{props.text4}</Text>
      </HStack>
      <Divider />
      <Text fontSize={"sm"}>{props.text5}</Text>
      <Text fontSize={"sm"}>{props.text6}</Text>
    </Stack>
  );
};

export default Reuseablecard;
