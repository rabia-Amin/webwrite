import {
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  SkeletonCircle,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import logo from "../../images/logo.svg";

import React from "react";
import Reuseablecard from "./Reuseablecard";

const Card = ({}) => {
  return (
    <Stack
      boxShadow={"md"}
      borderRadius={"2xl"}
      backgroundColor={"#f2f2f2"}
      bgGradient="linear(to-t,#F5F5F5 ,#f2f2f2 )"
      height={"max-content"}
      py={"4"}
      px={"5"}
    >
      <HStack direction={"row"} justifyContent={"space-between"}>
        <SkeletonCircle size="5" />
        <SkeletonCircle size="5" />
        <SkeletonCircle size="5" />
        <Spacer />

        <HStack>
          <Image src={logo} />
          <Text fontWeight={"bold"}>Erica Sam</Text>
        </HStack>
      </HStack>
      <Reuseablecard
        heading="Khan Academy"
        text="21/02/2021"
        text1="Role: Product Strategy"
        text2="Duration: 6 months"
        text3="Written By: Sam Jones"
        text4=" Lead Designer @ Khan Academy"
        text5="  Erica helped my team develop a digital transformation strategy. She is
        a team"
        text6=" player, I would like to work with her again"
      />
      <Reuseablecard
        heading="UNICEF"
        text="13/07/2020"
        text1="Role: UI/UX Designer"
        text2="Duration: 4 months"
        text3="Written By: Tom Charles"
        text4=" Lead Designer @ Unicef"
        text5=" “While working with Kendra on a project, she showed her design skills so wel..."
      />
      <Reuseablecard
        heading="UNICEF"
        text="13/07/2020"
        text1="Role: UI/UX Designer"
        text2="Duration: 4 months"
        text3="Written By: Tom Charles"
        text4=" Lead Designer @ Unicef"
        text5=" “While working with Kendra on a project, she showed her design skills so wel..."
      />
    </Stack>
  );
};

export default Card;
