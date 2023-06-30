import { Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import { useDisclosure,useBreakpointValue } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import MusicPlayer from "./musicPlayer";
import SidebarMenu from "./sidebarMenu"

const PlayerLayout = ({ children }) => {
  const sidebarWidth = useBreakpointValue({ base: "100%", md: "20%" });
  const isMobileOrTablet = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="100vw" height="100vh" position="relative">
      {isMobileOrTablet && (
        <>
          <Box position="absolute" top="0" right="0" p={4}>
            <IconButton
              aria-label="Open Menu"
              icon={<HiMenu />}
              colorScheme="gray"
              onClick={onOpen}
            />
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bg="gray.800" color="white">
                  <SidebarMenu/>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
      {!isMobileOrTablet && (
        <Box
          position="absolute"
          top="0"
          width={sidebarWidth}
          height="100%"
          bg="gray.800"
          color="white"
        >
         <SidebarMenu/>
        </Box>
      )}
      <Box
        ml={isMobileOrTablet ? 0 : sidebarWidth}
        p={4}
        height="100%"
        overflowY="auto"
        bg="gray.100"
      >
        {children}
      </Box>
     <MusicPlayer/>
    </Box>
  );
};

export default PlayerLayout;
