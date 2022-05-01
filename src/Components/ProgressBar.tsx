import React from 'react';
import { flexbox, Progress } from '@chakra-ui/react';
import { lowercaseSVGElements } from 'framer-motion/types/render/svg/supported-elements';

interface ProgressProps {
  progress: number;
}

const ProgressBar = (props: ProgressProps) => {
  return (
    <>
        <Progress value={props.progress} />
    </>
  );
};

export default ProgressBar;
