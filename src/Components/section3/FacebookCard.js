import { Stack } from "@chakra-ui/react";
import React from "react";
import ReuseableCards from "./ReuseableCards";
import logo1 from "../../images/logo1.svg";

const FacebookCard = () => {
  return (
    <Stack>
      <ReuseableCards imag="logo1" />
      <Stack px={"8"}>
        <ReuseableCards />
      </Stack>
      <ReuseableCards imag="logo1" />
    </Stack>
  );
};

export default FacebookCard;
