import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Text,
  Center,
  Divider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const DrawerHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Stack>
      <Button
        ref={btnRef}
        backgroundColor={"#7333FC"}
        color={"white"}
        outline={"none"}
        onClick={onOpen}
        display={{ lg: "none", base: "inherit" }}
      >
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody py={"20"}>
            <Stack
              width={{ lg: "50%", md: "70%" }}
              justifyContent={"space-evenly"}
              gap={"5"}
            >
              <Text color={"#222151"}>Write A Review</Text>
              <Stack>
                <Text color={"#222151"}>Login</Text>
                <Center height="30px">
                  <Divider />
                </Center>
                <Text color={"#222151"}>Sign Up</Text>
              </Stack>
              <Button
                backgroundColor={"#7333FC"}
                color={"white"}
                width={"max-content"}
                fontSize={"sm"}
                size="md"
              >
                For Organization
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button backgroundColor={"#7333FC"} color={"white"}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default DrawerHeader;
