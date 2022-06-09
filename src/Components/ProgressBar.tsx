import React from 'react';
import { flexbox, Progress, Image, Box } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import satellite from '../images/satellite.svg'

interface ProgressProps {
  progress: number;
}

const ProgressBar = (props: ProgressProps) => {
  // TODO: figure out how to position satellite image relative to progress
  // const Parentdiv = {
  //   height: 30,
  //   width: '100%',
  //   backgroundColor: '#212121',
  //   borderRadius: 20,
  // };

  // const Childdiv = {
  //   height: '100%',
  //   width: props.progress,
  //   backgroundColor: '#91D8F6',
  //   borderRadius: 20,
  //   backgroundImage: "../images/satellite.svg",
  //   backgroundPosition: props.progress,
  // };

  // return (
  //   <div style={Parentdiv}>
  //     <div style={Childdiv}>
  //     </div>
  //   </div>
  // );
  return (
    <>
        <Progress borderRadius="20px" colorScheme="smcblue" value={props.progress} />
    </>
  );
};

export default ProgressBar;
