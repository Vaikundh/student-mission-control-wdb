import { Button } from "@chakra-ui/react";

interface ButtonProps {
  type: string;
  text: string;
  disabled: boolean;
}

const Buttons = (props: ButtonProps) => {
  return (
      <Button variant={props.type} isDisabled={props.disabled}>{props.text}</Button>
  );
};

Buttons.defaultProps = {
  type: "primary",
  disabled: false,
}

export default Buttons;
