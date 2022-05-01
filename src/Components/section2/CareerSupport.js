import { Stack } from "@chakra-ui/react";
import React from "react";
import AllContent from "./AllContent";
import Card from "./Card";

const CareerSupport = () => {
  return (
    <Stack
      width={"100%"}
      direction={{ lg: "row", md: "row", base: "column" }}
      px={{ lg: "14px", base: "5px" }}
    >
      <Stack width={{ lg: "55%", md: "60%" }}>
        <Card width={"100%"} />
      </Stack>
      <Stack width={{ lg: "45%", md: "40%" }} justifyContent={"center"}>
        <AllContent />
      </Stack>
    </Stack>
  );
};

export default CareerSupport;
