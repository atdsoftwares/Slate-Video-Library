import React from "react";
import { Button, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useExplorePageContext } from "../../Context/IndexAllContext";

function Chips() {
  const { dispatch } = useExplorePageContext();

  const chipOptions = ["All", "HTML", "CSS", "JS", "React", "Others"];

  return (
    <Wrap spacing={4} justify="center" py={4} marginLeft={"20rem"}>
      <Text>Filter Videos :</Text>
      {chipOptions.map((option) => (
        <WrapItem key={option}>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() =>
              dispatch({
                type: option,
              })
            }
          >
            {option}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default Chips;
