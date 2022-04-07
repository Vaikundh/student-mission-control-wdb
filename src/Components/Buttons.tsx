import { Button, propNames } from "@chakra-ui/react";

interface ButtonProps {
  style: string;
  text: string;
}

const Buttons = (props: ButtonProps) => {
  return (
      <Button>{props.text}</Button>
  );
};

export default Buttons;
