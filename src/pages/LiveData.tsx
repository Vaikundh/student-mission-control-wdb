import React, { useEffect, useState } from "react";
import SparklineBox from "../Components/SparklineBox";
import { useGeometryData, useEnergyData } from '../utils/hooks';
import { Box, Flex, Text } from "@chakra-ui/react";
import Gradient from '../Assets/Gradients/unitgradient.svg'


const LiveData = () => {
    // GEOMETRY
    const [currentData, setCurrentData] = useState([300] as number[])
    // ENERGY

    const [yaw, setYaw] = useState([] as number[])
    const [pitch, setPitch] = useState([] as number[])
    const [roll, setRoll] = useState([] as number[])

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
        })
        
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
        })
        
        // return truncate((Math.atan2(2.0*(useGeometryData().Rx*useGeometryData().Ry 
        // + useGeometryData().Rw*useGeometryData().Rz), useGeometryData().Rw*useGeometryData().Rw 
        // + useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry 
        // - useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI), 3);
        return a[a.length - 1]
      }
      
      const getGeoPitch = () => {
        const a = pitch;
      
        a.push(truncate((Math.asin(-2.0*(useGeometryData().Rx*useGeometryData().Rz 
        - useGeometryData().Rw*useGeometryData().Ry)))*(180/Math.PI),3));
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
        })
    
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
        })
        
        return a[a.length - 1];
      }
    



    return (

        <Box minHeight="80vh" bgImage={Gradient}>
            <Flex justifyContent='space-evenly' minWidth='60vw'>
                <Flex direction='column' alignItems='center' width='20%'>
                    <Text variant='H4' pt="20px">Expedition 1: Geometry</Text>
                    <SparklineBox title='Yaw' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={yaw.filter(onlyUnique)} data_limit={25} y_min={truncate(Math.min.apply(Math, yaw.filter((value, index, array) => value != 0)),3)} y_max={truncate(Math.max.apply(Math, yaw.filter((value, index, array) => value != 0)),3)} />
                    <Text color="smcwhite">
                        Yaw: {getGeoYaw()}°
                    </Text>
                    <SparklineBox title='Pitch' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={pitch.filter(onlyUnique)} data_limit={25} y_min={truncate(Math.min.apply(Math, pitch.filter((value, index, array) => value != 0)),3)} y_max={truncate(Math.max.apply(Math, pitch.filter((value, index, array) => value != 0)),3)} />
                    <Text color="smcwhite">
                        Pitch: {getGeoPitch()}°
                    </Text>
                    <SparklineBox title='Roll' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={roll.filter(onlyUnique)} data_limit={25} y_min={truncate(Math.min.apply(Math, roll.filter((value, index, array) => value > 0)),3)} y_max={truncate(Math.max.apply(Math, roll.filter((value, index, array) => value != 0)),3)}/>

                    <Text color="smcwhite">
                        Roll: {getGeoRoll()}°
                    </Text>
                </Flex>
                <Flex direction='column' alignItems='center' width='20%'>
                    <Text variant='H4' pt="20px">Expedition 2: Energy</Text>
                    <SparklineBox title='Current-All' units='A' y_num_bins={5} graph_height={200} graph_width={500} data={currentData.filter((value, index, array) => value > 350)} data_limit={75} y_min={truncate(Math.min.apply(Math, currentData.filter((value, index, array) => value > 350)),1)} y_max={truncate(Math.max.apply(Math, currentData.filter((value, index, array) => value > 350)),1)} />
                    <Text color="smcwhite">
                        Current: {getCurrentAll()*-1} Amps
                    </Text>
                </Flex>
                <Flex direction='column' alignItems='center' width='20%'>
                    <Text variant='H4' pt="20px">Expedition 3: Life Support</Text>
                    <SparklineBox title='Current-All' units='A' y_num_bins={5} graph_height={200} graph_width={500} data={[288, 285, 289, 283, 284, 290, 279]} data_limit={75} y_min={273} y_max={290} />
                    <Text color="smcwhite">
                        Cabin Temperature: 288 K
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default LiveData;