import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import groupmac from "../../images/groupmac.svg";
import React from "react";

const Recuritor = () => {
  return (
    <Stack width={"100%"} direction={{ lg: "row", base: "column" }}>
      <Stack width={{ lg: "50%", base: "100%" }}>
        <Image src={groupmac} />
      </Stack>
      <Stack
        pl={"16"}
        justifyContent={"center"}
        width={{ lg: "50%", base: "100%" }}
      >
        <Heading fontSize={"2xl"}>Get found by Recruiters</Heading>
        <Text fontSize={"sm"}>
          Recruiters use volunteers to find interns and workers whose values
          align with their organization’s values.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Recuritor;
