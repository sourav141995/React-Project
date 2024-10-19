import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box textAlign="left" bg="white" borderRadius="lg" overflow="hidden" boxShadow="lg">
      <Image src={imageSrc} alt={title} />
      <Box p={6}>
        <Heading as="h4" size="md" color="black" mb={2}>
          {title}
        </Heading>
        <Text color="black" py="2">
          {description}
        </Text>
        <Text color="black" fontSize="sm">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
