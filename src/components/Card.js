import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius={6} background={"white"}>
      <Image src={imageSrc} alt="Card-Image" borderRadius={6} />
      <VStack padding={4} spacing={4} color={"black"} alignItems={"start"}>
        <Heading size={"sm"}>{title}</Heading>
        <Text fontWeight={"normal"} color={"#65748b"}>{description}</Text>

        <HStack>
          <Text fontWeight={"semibold"} fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
