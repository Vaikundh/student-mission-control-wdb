import React from 'react';
import { Image } from '@chakra-ui/react';
import satellite from '../images/satellite.svg';

interface ProgressProps {
  progress: number;
}

const ProgressBar = (props: ProgressProps) => {
  return (
    <div style={{
      height: 10,
      width: '100%',
      backgroundColor: '#212121',
      borderRadius: 20,
    }}>
      <div
        style={{
          height: '100%',
          width: props.progress + '%',
          backgroundColor: '#91D8F6',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Image ml="calc(100% - 50px)" src={satellite}></Image>
      </div>
    </div>
  );
};

export default ProgressBar;
