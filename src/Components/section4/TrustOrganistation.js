import { Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import group from "../../images/group.svg";

const TrustOrganistation = () => {
  return (
    <Stack px={{ lg: "20px", base: "5" }} py={"7"} gap={"4"}>
      <Heading fontSize={{ lg: "2xl", base: "lg" }} textAlign={"center"}>
        Organizations that Trust Volunteered
      </Heading>
      <Image width={"100%"} src={group} />
    </Stack>
  );
};

export default TrustOrganistation;
