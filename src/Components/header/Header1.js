import {
  Divider,
  Image,
  Stack,
  Text,
  Center,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import icon from "../../images/icon.svg";
import DrawerHeader from "./DrawerHeader";

const Header1 = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"end"}
        px={{ lg: "14", md: "14", base: "3" }}
        backgroundColor={"white"}
      >
        <Stack>
          <Image h={{ lg: "32px", base: "50px" }} src={icon} />
        </Stack>
        <Spacer />
        <DrawerHeader />
        <HStack
          width={{ lg: "50%", md: "70%" }}
          justifyContent={"space-evenly"}
          display={{ lg: "inherit", base: "none" }}
        >
          <Text color={"#222151"} fontSize={"small"}>
            Write A Review
          </Text>
          <HStack>
            <Text color={"#222151"} fontSize={"small"}>
              Login
            </Text>
            <Center height="30px">
              <Divider orientation="vertical" />
            </Center>
            <Text color={"#222151"} fontSize={"small"}>
              Sign Up
            </Text>
          </HStack>
          <Button
            backgroundColor={"#7333FC"}
            color={"white"}
            width={"max-content"}
            fontSize={"sm"}
            size="md"
          >
            For Organization
          </Button>
        </HStack>
      </Stack>
    </>
  );
};

export default Header1;
