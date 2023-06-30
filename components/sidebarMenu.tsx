import { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, Button, VStack } from "@chakra-ui/react";
import { HiHome, HiLibrary, HiSearch, HiHeart } from "react-icons/hi";

const SidebarMenu = () => {
  const handleCreatePlaylist = () => {
    // Logic to handle create playlist button click
  };

  // Dummy data for search history
  const searchHistory = [
    "Lorem ipsum",
    "Dolor sit amet",
    "Consectetur adipiscing",
    "Elit sed do",
    "Eiusmod tempor",
    "Incididunt ut",
    "Labore et dolore",
    "Magna aliqua",
    "Ut enim ad",
    "Minim veniam"
  ];

  const [bgColor, setBgColor] = useState(generateRandomGradient());

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(generateRandomGradient());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function generateRandomGradient() {
    const colors = ["#08aeea", "#2af598", "#b4ec51", "#f5ab00"];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  }

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="280px"
      height="100vh"
      bg={bgColor}
      color="white"
      px={4}
      py={6}
      overflowY="auto"
      transition="background-color 2s ease"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        {/* Home */}
        <Flex align="center" mb={4} _hover={{ color: "white" }}>
          <IconButton
            aria-label="Home"
            icon={<HiHome />}
            colorScheme="gray"
            variant="ghost"
            size="lg"
            borderColor="neonGreen"
            borderWidth="2px"
            borderRadius="50%"
          />
          <Text ml={2} fontSize="lg" fontWeight="bold">
            Home
          </Text>
        </Flex>

        {/* Your Library */}
        <Flex align="center" mb={4} _hover={{ color: "white" }}>
          <IconButton
            aria-label="Your Library"
            icon={<HiLibrary />}
            colorScheme="gray"
            variant="ghost"
            size="lg"
            borderColor="neonGreen"
            borderWidth="2px"
            borderRadius="50%"
          />
          <Text ml={2} fontSize="lg" fontWeight="bold">
            Your Library
          </Text>
        </Flex>

        {/* Search */}
        <Flex align="center" mb={4} _hover={{ color: "white" }}>
          <IconButton
            aria-label="Search"
            icon={<HiSearch />}
            colorScheme="gray"
            variant="ghost"
            size="lg"
            borderColor="neonGreen"
            borderWidth="2px"
            borderRadius="50%"
          />
          <Text ml={2} fontSize="lg" fontWeight="bold">
            Search
          </Text>
        </Flex>

        {/* Create Playlist */}
        <Button
          colorScheme="purple"
          size="md"
          mb={4}
          onClick={handleCreatePlaylist}
          _hover={{ bg: "purple.700" }}
          width="100%"
        >
          Create Playlist
        </Button>

        {/* Liked Songs */}
        <Flex align="center" mb={4} _hover={{ color: "white" }}>
          <IconButton
            aria-label="Liked Songs"
            icon={<HiHeart />}
            colorScheme="gray"
            variant="ghost"
            size="lg"
            borderColor="neonGreen"
            borderWidth="2px"
            borderRadius="50%"
          />
          <Text ml={2} fontSize="lg" fontWeight="bold">
            Liked Songs
          </Text>
        </Flex>

        {/* Search History */}
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Search History
        </Text>
        <VStack align="flex-start" spacing={1} maxHeight="200px" overflowY="auto"  >
          {searchHistory.map((search, index) => (
            <Text key={index} fontSize="md" fontWeight="light" padding="1px">
              {search}
            </Text>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default SidebarMenu;
