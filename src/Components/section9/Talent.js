import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import group2 from "../../images/group2.svg";

import AllContent from "../section8/AllContent";
import ResueableContent from "../section8/ResueableContent";

const Talent = () => {
  return (
    <Stack
      width={"100%"}
      backgroundColor={"#222151"}
      direction={{ lg: "row", md: "row", base: "column" }}
      marginTop={"0!important"}
    >
      <Stack width={{ lg: "50%", md: "50%", base: "100%" }} pt={"8"}>
        <Image width={"100%"} src={group2} />
      </Stack>
      <Stack width={{ lg: "50%", md: "60%", base: "100%" }} pb={{lg:'unset',base:'5'}}>
        <ResueableContent
          heading="For Recruiters"
          heading2=" Find Talents That Fit "
          heading3=" Your Culture"
          text=" Go beyond skilla, discover what that candidate"
          text1=" believe and care about."
          text2="search for candidates"
          text6="Easily find volunteeers"
          text9="See what employers are saying"
          btn="Get Started Today"
        />
      </Stack>
    </Stack>
  );
};

export default Talent;
