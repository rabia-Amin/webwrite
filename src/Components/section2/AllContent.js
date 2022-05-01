import { Stack } from "@chakra-ui/react";
import React from "react";

import ReuseableContent from "./ReuseableContent";

const AllContent = () => {
  return (
    <Stack>
      <ReuseableContent
        heading="Get the right career support"
        text="Not all volunteering experience are equal. Get all your verified
        volunteering recommendations in one place and download them whenever you
        want."
        btn="  Sign up for free"
      />
    </Stack>
  );
};

export default AllContent;
