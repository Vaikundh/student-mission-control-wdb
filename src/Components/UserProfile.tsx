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
} from '@chakra-ui/react';

const images = require.context('../Assets/Profile_Images', true);

interface ProfileProps {
  pic?: string;
  name?: string;
  role?: string;
  contact?: string;
}

const UserProfile = (props : ProfileProps) => {
  
    return (
      <Container mt={4}>
        <Flex color='white' flexDirection='column' justify="flex-start">
          <Image src={images(`./${props.pic}.png`).default} borderRadius='20px' boxSize='150px' alt={props.name} fallbackSrc='https://via.placeholder.com/150'/>
          <Text marginTop="8px" align="left">{props.name}</Text>
          <Text align="left">{props.role}</Text>
          <Text color="#91D8F6" align="left">{props.contact}</Text>
        </Flex>
      </Container>
    );
  };
  
  export default UserProfile;