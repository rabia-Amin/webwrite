import { Button, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

import rating from "../../images/rating.svg";
import star from "../../images/star.svg";
import image from "../../images/image.svg";
import home from "../../images/home.svg";
import home2 from "../../images/home2.svg";
import { GrFormLocation } from "react-icons/gr";
import logo1 from "../../images/logo1.svg";
import { BiShareAlt } from "react-icons/bi";

const ReuseableCards = (props) => {
  return (
    <Stack>
      <Stack boxShadow={"lg"} p={"3"}>
        <HStack>
          <Image src={logo1} />
          <Text fontWeight={"bold"}>Ralph Edwards</Text>
          <Text fontSize={"sm"} color={"#00BA88"}>
            Verified United Ways volunteer
          </Text>
          <Spacer />
          <Text fontSize={"sm"}>9/4/20</Text>
        </HStack>

        <HStack>
          <Image src={rating} />
          <Image src={rating} />
          <Image src={rating} />
          <Image src={star} />
          <Image src={image} />
          <Text fontSize={"sm"}>(2)</Text>
          <GrFormLocation />
          <Text fontSize={"sm"}>GrFormLocation</Text>
        </HStack>
        <Stack>
          <Text fontSize={"sm"}>
            Volunteering with United Ways this summer was smooth. The onboarding
            experience was so great I had to recommend the organization to my
            fr...see more
          </Text>
        </Stack>
        <HStack>
          <Image src={home} />
          <Image src={home2} />
          <Spacer />
          <Button variant={"outline"} gap={"1"} fontSize={"sm"}>
            <BiShareAlt />
            share
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default ReuseableCards;
