import { Stack } from "@chakra-ui/react";
import React from "react";
import AllContent from "./AllContent";

import Macbook from "./Macbook";

const PrpmoOrganization = () => {
  return (
    <Stack
      width={"100%"}
      backgroundColor={"#7333FC"}
      direction={{ lg: "row", md: "row", base: "column" }}
      mb={"0"}
    >
      <Stack width={{ lg: "50%", md: "60%", base: "100%" }} pt={{lg:'unset',base:'5'}}>
        <AllContent />
      </Stack>
      <Stack width={{ lg: "50%", md: "40%", base: "100%" }}>
        <Macbook width={"100%"} />
      </Stack>
    </Stack>
  );
};

export default PrpmoOrganization;
