import { Button } from "@chakra-ui/react";

interface ButtonProps {
  color: string;
  text: string;
}

const Buttons = () => {
  return (
    <Button colorScheme="blue" variant="outline">
      Test
    </Button>
  );
};

export default Buttons;
