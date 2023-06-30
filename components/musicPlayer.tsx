import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import {
  HiMicrophone,
  HiDotsVertical,
  HiPause,
  HiPlay,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

// SeekBar component
const SeekBar = () => {
  // Replace this with your actual implementation of the seek bar
  return (
    <Box bg="linear-gradient(to right, #FF0080, #7928CA)" height="4px" borderRadius="full" mt={2} w="100%">
      {/* Seek bar implementation */}
    </Box>
  );
};

const MusicPlayer = () => {
  const isPlaying = false; // Replace this with your logic to determine if the song is playing or paused

  const handlePlayPause = () => {
    // Logic to handle play/pause button click
  };

  const handlePrevious = () => {
    // Logic to handle previous button click
  };

  const handleNext = () => {
    // Logic to handle next button click
  };

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      height="150px" // Adjust the height here
      bg="black"
      color="white"
      px={4}
      py={2}
    >
      <Flex align="center" height="100%">
        {/* Thumbnail and Song Details */}
        <Box flex="0 0 70px" mr={4}>
          {/* Thumbnail */}
          <Box
            width="100%"
            height="100%"
            bgGradient="linear-gradient(to bottom, #FF0080, #7928CA)"
            borderRadius="md"
            boxShadow="0px 0px 15px rgba(255, 0, 128, 0.5)"
          >
            {/* Add your thumbnail component here */}
          </Box>
        </Box>

        {/* Music Playing Options */}
        <Flex flex="1" flexDirection="column">
          {/* Song Details */}
          <Flex flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="sm" mb={1}>
              Song Title
            </Text>
            <Text color="gray.300" fontSize="xs" mb={2}>
              Artist Name
            </Text>
          </Flex>

          {/* Music Controls */}
          <Flex justifyContent="center" alignItems="center" mt={2}>
            {/* Previous Button */}
            <IconButton
              aria-label="Previous"
              icon={<HiChevronLeft />}
              colorScheme="gray"
              onClick={handlePrevious}
              size="sm"
              borderRadius="full"
              _hover={{ color: "white" }}
            />

            {/* Play/Pause Button */}
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <HiPause /> : <HiPlay />}
              colorScheme="green"
              onClick={handlePlayPause}
              size="lg"
              borderRadius="full"
              ml={4}
              _hover={{ color: "white" }}
            />

            {/* Next Button */}
            <IconButton
              aria-label="Next"
              icon={<HiChevronRight />}
              colorScheme="gray"
              onClick={handleNext}
              size="sm"
              borderRadius="full"
              ml={4}
              _hover={{ color: "white" }}
            />
          </Flex>

          {/* Seek Bar */}
          <Box alignSelf="center" mt={1} w="80%">
            <SeekBar />
          </Box>
        </Flex>

        {/* Lyrics Button and Menu */}
        <Flex align="center" justify="flex-end" flex="0 0 auto" mt={2}>
          {/* Lyrics Button */}
          <IconButton
            aria-label="Lyrics"
            icon={<HiMicrophone />}
            colorScheme="purple"
            borderRadius="full"
            size="sm"
            _hover={{ color: "white" }}
            mr={2}
          />

          {/* Vertical 3 Dot Menu */}
          <IconButton
            aria-label="Menu"
            icon={<HiDotsVertical />}
            colorScheme="gray"
            borderRadius="full"
            size="sm"
            _hover={{ color: "white" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MusicPlayer;
