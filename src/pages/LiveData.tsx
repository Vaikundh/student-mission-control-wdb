import React, { useEffect, useState } from "react";
import SparklineBox from "../Components/SparklineBox";
import { useGeometryData, useEnergyData } from '../utils/hooks';
import { Box, Flex, Text } from "@chakra-ui/react";
import Gradient from '../Assets/Gradients/unitgradient.svg'


const LiveData = () => {
    // GEOMETRY
    const [currentData, setCurrentData] = useState([300] as number[])
    // ENERGY
    const [yaw, setYaw] = useState([-10, 10] as number[])
    const [pitch, setPitch] = useState([-10, 10] as number[])
    const [roll, setRoll] = useState([-10, 10] as number[])
    const truncate = function (value: number, num_digits: number) {
        const multiplier = Math.pow(10, num_digits),
            adjustedNum = value * multiplier,
            truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);
    
        return truncatedNum / multiplier;
      };

    const getCurrentAll = () => {
        const a = currentData;
      
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
            const a = currentData.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
            // const id = setInterval(() => setCurrentData(a.slice(a.length-300)), 1500);
            
            setCurrentData(a.slice(a.length-300));
            console.log(currentData);
            // return () => {
            //   clearInterval(id);
            // };
          // }
        })
        
        return truncate((useEnergyData().S4000002 
        + useEnergyData().S6000005 
        + useEnergyData().P4000002 
        + useEnergyData().P6000005 
        + useEnergyData().S4000005 
        + useEnergyData().S6000002 
        + useEnergyData().P4000005 
        + useEnergyData().P6000002),2);
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
            const a = yaw;
            const id = setInterval(() => setYaw(a.slice(a.length-75)), 1500);
            
            // setCurrentData(a.slice(a.length-75));
            console.log(yaw);
            return () => {
              clearInterval(id);
            };
          // }
        })
        
        return truncate((Math.atan2(2.0*(useGeometryData().Rx*useGeometryData().Ry 
        + useGeometryData().Rw*useGeometryData().Rz), useGeometryData().Rw*useGeometryData().Rw 
        + useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry 
        - useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI), 3);
      }
      
      const getGeoPitch = () => {
        const a = pitch;
      
        a.push(truncate((Math.asin(-2.0*(useGeometryData().Rx*useGeometryData().Rz 
        - useGeometryData().Rw*useGeometryData().Ry)))*(180/Math.PI),3));
        // }
        
        useEffect(()=> {
            // if (currentData.length !== a.length) {
            
            const a = pitch //.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
            setPitch(a.slice(a.length-50));
            // console.log(yaw);
          // }
        })
        
        return truncate((Math.asin(-2.0*(useGeometryData().Rx*useGeometryData().Rz 
        - useGeometryData().Rw*useGeometryData().Ry)))*(180/Math.PI),3);
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
            
            const a = roll //.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
            setRoll(a.slice(a.length-50));
            // console.log(roll);
          // }
        })
        
        return truncate((Math.atan2(2.0*(useGeometryData().Ry*useGeometryData().Rz 
        + useGeometryData().Rw*useGeometryData().Rx), useGeometryData().Rw*useGeometryData().Rw 
        - useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry 
        + useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI),3);
      }


    return (

        <Box minHeight="80vh" bgImage={Gradient}>
            <Flex justifyContent='space-evenly' minWidth='60vw'>
                <Flex direction='column' alignItems='center' width='20%'>
                    <Text variant='H4' pt="20px">Expedition 1: Geometry</Text>
                    <SparklineBox title='Yaw' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={yaw} data_limit={25} y_min={-10} y_max={10} />
                    <Text color="smcwhite">
                        Yaw: {getGeoYaw()}°
                    </Text>
                    <SparklineBox title='Pitch' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={pitch} data_limit={25} y_min={-10} y_max={10} />
                    <Text color="smcwhite">
                        Pitch: {getGeoPitch()}°
                    </Text>
                    <SparklineBox title='Roll' units='°' y_num_bins={5} graph_height={200} graph_width={500} data={roll} data_limit={25} y_min={-10} y_max={10} />
                    <Text color="smcwhite">
                        Roll: {getGeoRoll()}°
                    </Text>
                </Flex>
                <Flex direction='column' alignItems='center' width='20%'>
                    <Text variant='H4' pt="20px">Expedition 2: Energy</Text>
                    <SparklineBox title='Current-All' units='A' y_num_bins={5} graph_height={200} graph_width={500} data={currentData.filter((value, index, array) => value > 300)} data_limit={75} y_min={300} y_max={450} />
                    <Text color="smcwhite">
                        Current: {getCurrentAll()} Amps
                    </Text>
                </Flex>
                <Flex direction='column' alignItems='center' width='20%'>
                    <Text variant='H4' pt="20px">Expedition 3: Life Support</Text>
                    <SparklineBox title='Current-All' units='A' y_num_bins={5} graph_height={200} graph_width={500} data={[288, 285, 289, 283, 284, 290, 279]} data_limit={75} y_min={273} y_max={290} />
                    <Text color="smcwhite">
                        Cabin Temperature: {getCurrentAll()} K
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default LiveData;