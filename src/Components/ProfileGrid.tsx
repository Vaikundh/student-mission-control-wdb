import React from 'react';
import {
  Container,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';
import UserProfile from './UserProfile';

interface ProfileGridProps {
  list: {
    pic?: string;
    name?: string;
    role?: string;
    contact?: string;
  }[]
}

const ProfileGrid = (props : ProfileGridProps) => {

    return <Box left='320px' w='800px' p={4} border='solid' borderColor="white" borderRadius="30px">{<Grid gap={3} templateColumns='repeat(3, 1fr)' >{props.list.map(data=> {
        return (
            <GridItem key={data.name}>
                <UserProfile pic={data.pic} name={data.name} role={data.role} contact={data.contact} />
            </GridItem>
            
        )
    })
}</Grid>}</Box>;
}

  export default ProfileGrid;