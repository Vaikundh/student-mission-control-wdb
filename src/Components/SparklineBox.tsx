import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from "react-sparklines";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

interface SparklineProps {
    data: number[];
    title: string;
    y_min: number;
    y_max: number;
    y_num_bins: number;
    data_limit: number;
    graph_width: number;
    graph_height: number;
    units: string;
}

const SparklineBox = (props: SparklineProps) => {
    return(
        <Flex height={props.graph_height} width={props.graph_width+10} borderRadius='10' bgGradient="linear(to-br, smcblack, smcdarkblue)">
            <Flex direction='column' justifyContent='space-between' h={props.graph_height-5} mt='2.5px'>
                <Text color='smcwhite'>{props.y_max +'(' + props.units+')'}</Text>
                <Text color='smcwhite'>{props.y_min +'(' + props.units+')'}</Text>
            </Flex>
            <Flex w='90%'>
                <Box ml='5px'>
                    <Box position='absolute' bg='smcwhite' width='1px' ml='5px' height={props.graph_height-20} mt='10px'/>
                    <Grid  w='10px' h={props.graph_height-20} mt='10px' templateRows='repeat(4,1fr)' templateColumns='repeat(1,1fr)' >
                                <GridItem h='1px' rowSpan={1} colSpan={1} bg='smcwhite'/>
                                <GridItem h='1px' rowSpan={1} colSpan={1} bg='smcwhite'/>
                                <GridItem h='1px' rowSpan={1} colSpan={1} bg='smcwhite'/>
                                <GridItem h='1px' rowSpan={1} colSpan={1} bg='smcwhite'/>
                                <GridItem h='1px' rowSpan={1} colSpan={1} bg='smcwhite'/>
                    </Grid>
                </Box>
                <Flex h={props.graph_height-20} w='95%' mt='10px'>
                    <Sparklines data={props.data} limit={props.data_limit}>
                        <SparklinesLine style={{ fill: "smcdarkblue" }} color="#91D8F6"/>
                        <SparklinesSpots size={0.5} style={{ stroke: "lightblue", strokeWidth: 1, fill: "black" }}/>
                        <SparklinesReferenceLine type="mean"/>
                    </Sparklines>
                </Flex>
            </Flex>
            
        </Flex>
        
    )
}

export default SparklineBox;