import { Button, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";

const OrganizationCateogry = () => {
  return (
    <Stack px={"20"} py={"7"} alignItems={"center"} gap={"5"} flexWrap={"wrap"}>
      <Heading fontSize={{ lg: "2xl", base: "md" }} color={"#222151"}>
        Find Organizations Based On Cateogries
      </Heading>
      <Stack direction={{ lg: "row", base: "column" }}>
        <Stack direction={{ lg: "row", md: "row", base: "column" }}>
          <Button variant={"outline"}>Entertainment & Media</Button>

          <Button variant={"outline"}>Financial</Button>
          <Button variant={"outline"}>Food & Drink</Button>
        </Stack>
        <Stack
          direction={{ lg: "row", md: "row", base: "column" }}
          justifyContent={"center"}
        >
          <Button variant={"outline"}>Health</Button>
          <Button variant={"outline"}>Property</Button>
          <Button variant={"outline"}>Recruitment</Button>
        </Stack>
      </Stack>

      <Stack direction={{ lg: "row", base: "column" }}>
        <Stack direction={{ lg: "row", md: "row", base: "column" }}>
          <Button variant={"outline"}>Travel & Transport</Button>
          <Button variant={"outline"}>Legal</Button>
          <Button variant={"outline"}>Education & Training</Button>
        </Stack>
        <Stack
          direction={{ lg: "row", md: "row", base: "column" }}
          justifyContent={"center"}
        >
          <Button variant={"outline"}>Fashion</Button>
          <Button variant={"outline"}>Safety & Security</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrganizationCateogry;
