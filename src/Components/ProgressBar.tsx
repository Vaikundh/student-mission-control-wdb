import React from 'react';
import { Image } from '@chakra-ui/react';
import satellite from '../images/satellite.svg';

interface ProgressProps {
  progress: number;
}

const ProgressBar = (props: ProgressProps) => {
  if(props.progress > 0) {
    return (
      <div style={{
        height: 10,
        width: '80%',
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
  } else {
    return (
      <div style={{
        height: 10,
        width: '80%',
        backgroundColor: '#212121',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        
      }}>
          <Image ml="-50px" src={satellite}></Image>
      </div>
    );
  }
};

export default ProgressBar;
