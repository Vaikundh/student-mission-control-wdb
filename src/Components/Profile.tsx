import React from 'react';
import {
  Container,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Tag
} from '@chakra-ui/react';
import UserImage from './UserImage';

interface ProfileProps {
  pic?: File;
  name?: string;
}

const UserProfile = (props : ProfileProps) => {

    return (
      <Container mt={4}>
        <UserImage src={props.pic} name={props.name} />
        <Center>
          <VStack>
            <Heading>{props.name}</Heading>
          </VStack>
        </Center>
      </Container>
    );
  };
  
  export default UserProfile;