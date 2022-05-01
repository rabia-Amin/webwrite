import { Stack } from "@chakra-ui/react";
import React from "react";
import ReuseableContent from "../section2/ReuseableContent";
import FacebookCard from "./FacebookCard";

const ShareExperience = () => {
  return (
    <Stack direction={{ lg: "row", md: "row", base: "column" }}>
      <Stack
        width={{ lg: "50%", md: "40%", base: "100%" }}
        justifyContent={"center"}
      >
        <ReuseableContent
          heading="Share your experience"
          text="Help other future volunteers decide on volunteering with an organization by writing a review about your experience."
          btn="Write a review"
        />
      </Stack>
      <Stack width={{ lg: "50%", md: "60%", base: "100%" }}>
        <FacebookCard />
      </Stack>
    </Stack>
  );
};

export default ShareExperience;
