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
  Wrap,
  WrapItem
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

    return <Grid p={12} justifyContent="space-between" border='solid' borderColor="white" borderRadius="30px" templateColumns='repeat(3, 1fr)' >{props.list.map(data=> {
        return (
            <GridItem key={data.name} marginLeft="20px" marginBottom="15px">
                <UserProfile pic={data.pic} name={data.name} role={data.role} contact={data.contact} />
            </GridItem>
        )
    })
}</Grid>;
}

  export default ProfileGrid;