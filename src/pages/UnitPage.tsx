import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Gradient from '../Assets/Gradients/unitgradient.svg'
import { useGeometryData, useEnergyData } from '../utils/hooks';
// import { useTimer } from 'react-timer-hook';

import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine} from 'react-sparklines';

import SparklineBox from '../Components/SparklineBox';

interface UnitPageProps {
  unit: number;
}

const UnitPage = (props: UnitPageProps, expiryTimestamp: Date) => {
  const navigate = useNavigate();
  const [numLabs, setNumLabs] = useState(0);
  const [labsArr, setLabsArr] = useState([] as number[]);

  // GEOMETRY
  const [currentData, setCurrentData] = useState([300] as number[])
  // ENERGY
  const [yaw, setYaw] = useState([] as number[])
  const [pitch, setPitch] = useState([] as number[])
  const [roll, setRoll] = useState([] as number[])

  
  useEffect(() => {
    getNumLabs();
  }, []);

  const getNumLabs = () => {
    const requireComponent = require.context('../curriculum', true, /.mdx$/);
    let count = 0;
    let a: number[] = new Array(numLabs);
    a = [];
    requireComponent.keys().forEach((fileName: string) => {
      if (
        fileName.slice(2, 7) === `unit${props.unit}` &&
        !a.includes(parseInt(fileName.slice(11, 12)))
      ) {
        count++;
        a.push(parseInt(fileName.slice(11, 12)));
        setNumLabs(count);
        console.log(count);
      }
    });
    setLabsArr(a);
  };

  const nav = (lab: number) => {
    const s = '/expedition' + props.unit + '/mission' + lab;
    navigate(s);
  };

  //TODO: change button to arrow ..
  const goToUnits = () => {
    navigate('/expeditions');
  };

  const truncate = function (value: number, num_digits: number) {
    const multiplier = Math.pow(10, num_digits),
        adjustedNum = value * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
  };

  const getCurrentAll = () => {
    let a = currentData;
  
    a.push(truncate((useEnergyData().S4000002 

      + useEnergyData().S6000005 
      + useEnergyData().P4000002 
      + useEnergyData().P6000005 
      + useEnergyData().S4000005 
      + useEnergyData().S6000002 
      + useEnergyData().P4000005 
      + useEnergyData().P6000002),2));
    // }
    
    useEffect(()=> {
        // if (currentData.length !== a.length) {
        a = a.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
        const id = setInterval(() => setCurrentData(a.slice(a.length-300)), 1500);
        
        // setCurrentData(b.slice(b.length-300));
        // console.log(currentData);
        return () => {
          clearInterval(id);
        };
      // }
    }, [])
    
    return a[a.length - 1];
  }

  function onlyUnique(value: number, index: number, array: number[]) {
    return array.indexOf(value) === index && value !== 0;
  }
  const getGeoYaw = () => {
    const a = yaw;
  
    a.push(truncate((Math.atan2(2.0*(useGeometryData().Rx*useGeometryData().Ry 
    + useGeometryData().Rw*useGeometryData().Rz), useGeometryData().Rw*useGeometryData().Rw 
    + useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry 
    - useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI), 3));
    // }
    
    useEffect(()=> {
        // if (currentData.length !== a.length) {
        
        // const a = yaw; //.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
        
        // // console.log(yaw);
        // const id = setInterval(() => setYaw(a.slice(a.length-50)), 3000);
        
        // // setCurrentData(a.slice(a.length-75));
        // console.log(yaw);
        // // return () => {
        // //   clearInterval(id);
        // // };
        
        const id = setInterval(() => setYaw(a.filter(onlyUnique).slice(a.length-75)), 1500);
        
        // setCurrentData(a.slice(a.length-75));
        console.log(yaw);
        return () => {
          clearInterval(id);

        };
      // }
    }, [])
    
    // return truncate((Math.atan2(2.0*(useGeometryData().Rx*useGeometryData().Ry 
    // + useGeometryData().Rw*useGeometryData().Rz), useGeometryData().Rw*useGeometryData().Rw 
    // + useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry 
    // - useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI), 3);
    return a.filter(onlyUnique)[a.filter(onlyUnique).length - 1]
  }
  
  const getGeoPitch = () => {
    const a = pitch;
  
    a.push(truncate((Math.asin(-2.0*(useGeometryData().Rx*useGeometryData().Rz 
    - useGeometryData().Rw*useGeometryData().Ry)))*(180/Math.PI),3));
    // }
    // }
    
    

    useEffect(()=> {
        // if (currentData.length !== a.length) {
        
        // const a = pitch //.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
        const id = setInterval(() => setPitch(a.filter(onlyUnique).slice(a.length-75)), 1500);
        // setPitch(a.filter(onlyUnique).slice(a.length-75));
        return () => {
          clearInterval(id);
        };
        // console.log(yaw);
      // }
    }, [])

    return a[a.length - 1];
  }

  const getGeoRoll = () => {
    const a = roll;
  
    a.push(truncate((Math.atan2(2.0*(useGeometryData().Ry*useGeometryData().Rz 
    + useGeometryData().Rw*useGeometryData().Rx), useGeometryData().Rw*useGeometryData().Rw 
    - useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry 
    + useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI),3));
    // }
    
    useEffect(()=> {
        // if (currentData.length !== a.length) {
        
        // const a = roll //.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
        // setRoll(a.slice(a.length-50));
        const id = setInterval(() => setRoll(a.filter(onlyUnique).slice(a.length-75)), 1500);
        // setPitch(a.filter(onlyUnique).slice(a.length-75));
        return () => {
          clearInterval(id);
        };
        // console.log(roll);
      // }
    }, [])
    
    return a[a.length - 1];
  }

  if (props.unit === 1){
    {/* GEOMETRY */}
    return (
      <Box minHeight="80vh" bgImage={Gradient}>
        <Flex direction='column' alignItems='center' height='30%' width='50%' ml='58%' mt='1%' position='absolute'>
          <SparklineBox title='Yaw' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={yaw.filter(onlyUnique)} data_limit={25} y_min={truncate(Math.min.apply(Math, yaw.filter((value, index, array) => value != 0)),3)} y_max={truncate(Math.max.apply(Math, yaw.filter((value, index, array) => value != 0)),3)} />
          <SparklineBox title='Pitch' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={pitch.filter(onlyUnique)} data_limit={25} y_min={truncate(Math.min.apply(Math, pitch.filter((value, index, array) => value != 0)),3)} y_max={truncate(Math.max.apply(Math, pitch.filter((value, index, array) => value != 0)),3)} />
          <SparklineBox title='Roll' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={roll.filter(onlyUnique)} data_limit={25} y_min={truncate(Math.min.apply(Math, roll.filter((value, index, array) => value < 180)),3)} y_max={truncate(Math.max.apply(Math, roll.filter((value, index, array) => value != 0)),3)}/>
        </Flex>
        <Box pt="100px" pl="140px">
          <ArrowBackIcon role="img" cursor="pointer" focusable={true} onClick={goToUnits} color="smcwhite" boxSize={39}
            _hover={{
              hadow: "0 0 15px #FFFFFF"
            }}
            _active={{
  
            }}
            ></ArrowBackIcon>
        </Box>
        <Text variant='H2' pt="20px" pl="230px" color="#FFFFFF">
          Expedition {props.unit}
        </Text>
  
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Yaw: {getGeoYaw()}°
          {/* Yaw: -4.019° */}
        </Text>
        
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Pitch: {getGeoPitch()}°
          {/* Pitch: -8.567° */}
        </Text>
  
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Roll: {getGeoRoll()}°
          {/* Roll: 0.955° */}
        </Text>
  
        <Flex direction="row" pl="230px">
          {labsArr.map((val) => {
            return (
              <>
                <Flex justifyContent="left">
                  <Button
                    mr="5%"
                    mt="10%"
                    variant="unit"
                    fontSize="22"
                    w={{base:'100px', xl:'250px'}}
                    h="78px"
                    // color="#FFFFFF"
                    onClick={() => nav(val)}>
                      <Text variant='BodyLarge'>
                      Mission {val}
                      </Text>
                  </Button>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    );
  }
  else if (props.unit === 2){
    {/* Energy */}
    return (
      <Box minHeight="80vh" bgImage={Gradient}>

        <Flex alignItems='center' height='30%' width='50%' ml='60%' mt='1%' position='absolute'>
          <SparklineBox title='Current-All' units='A' y_num_bins={5} graph_height={200} graph_width={500} data={currentData.filter((value, index, array) => value > 350)} data_limit={75} y_min={truncate(Math.min.apply(Math, currentData.filter((value, index, array) => value > 350)),1)} y_max={truncate(Math.max.apply(Math, currentData.filter((value, index, array) => value > 350)),1)} />
        </Flex>

        <Box pt="100px" pl="140px">
          <ArrowBackIcon role="img" cursor="pointer" focusable={true} onClick={goToUnits} color="smcwhite" boxSize={39}
            _hover={{
              hadow: "0 0 15px #FFFFFF"
            }}
            _active={{
  
            }}
            ></ArrowBackIcon>
        </Box>
        <Text variant='H2' pt="20px" pl="230px" color="#FFFFFF">
          Expedition {props.unit}
        </Text>
        
        
        <Text color="#FFFFFF" pt="20px" pl="230px">

          Current-All: {truncate(getCurrentAll()*-1,2)} Amps

        </Text>
  
        
  
        <Flex direction="row" pl="230px">
          {labsArr.map((val) => {
            return (
              <>
                <Flex justifyContent="left">
                  <Button
                    mr="5%"
                    mt="10%"
                    variant="unit"
                    fontSize="22"
                    w={{base:'100px', xl:'250px'}}
                    h="78px"
                    // color="#FFFFFF"
                    onClick={() => nav(val)}>
                      <Text variant='BodyLarge'>
                      Mission {val}
                      </Text>
                  </Button>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    );
  }
  else {
    {/* Life Support */}
    return (
      <Box minHeight="80vh" bgImage={Gradient}>
        <Box pt="100px" pl="140px">
          <ArrowBackIcon role="img" cursor="pointer" focusable={true} onClick={goToUnits} color="smcwhite" boxSize={39}
            _hover={{
              hadow: "0 0 15px #FFFFFF"
            }}
            _active={{
  
            }}
            ></ArrowBackIcon>
        </Box>
        <Text variant='H2' pt="20px" pl="230px" color="#FFFFFF">
          Expedition {props.unit}
        </Text>
        
        
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Current-All: {useEnergyData().S4000002 + useEnergyData().S6000005 + useEnergyData().P4000002 + useEnergyData().P6000005 + useEnergyData().S4000005 + useEnergyData().S6000002 + useEnergyData().P4000005 + useEnergyData().P6000002} Amps
        </Text>
  
  
        {/* <Sparklines data={useRollData()} limit={20 }>
          <SparklinesLine style={{ fill: "none" }} />
          <SparklinesSpots />
        </Sparklines> */}
        {/* {useRollData()} */}
  
        <Flex direction="row" pl="230px">
          {labsArr.map((val) => {
            return (
              <>
                <Flex justifyContent="left">
                  <Button
                    mr="5%"
                    mt="10%"
                    variant="unit"
                    fontSize="22"
                    w={{base:'100px', xl:'250px'}}
                    h="78px"
                    // color="#FFFFFF"
                    onClick={() => nav(val)}>
                      <Text variant='BodyLarge'>
                      Mission {val}
                      </Text>
                  </Button>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    );
  }
};
// as='button' mt='2%' bg='#C4C4C433;' w='20%' h='380px' justifyContent='center' borderRadius='lg' mr="5%"

export default UnitPage;
