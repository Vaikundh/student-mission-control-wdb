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

interface ProfileProps {
  pic?: string;
  name?: string;
  role?: string;
  contact?: string;
}

const UserProfile = (props : ProfileProps) => {

    return (
      <Container mt={4}>
        <Flex color='black' flexDirection='column'>
        <div className="block">
          <Image src={props.pic} borderRadius='20px' boxSize='150px' alt={props.name} />
          <Text>{props.name}</Text>
          <Text>{props.role}</Text>
          <Text color="#91D8F6">{props.contact}</Text>
        </div>
        </Flex>
        
      </Container>
    );
  };
  
  export default UserProfile;