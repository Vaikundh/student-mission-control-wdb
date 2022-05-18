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

interface ProfileProps {
  pic?: string;
  name?: string;
  role?: string;
  contact?: string;
}

const ProfileGrid = (props : ProfileProps) => {
    
    
      const menuItems = [{
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }, {
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }, {
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }, {
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }, {
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }, {
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }, {
        "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
        "name": "Oski",
        "role": "Cheerleader",
        "contact": "oski@berkeley.edu"
      }];


    return <Box w='700px' p={4} color='white'>{<Grid gap={3} templateColumns='repeat(3, 1fr)' h='800px'>{menuItems.map(data=> {
        return (
            
            <GridItem>
                <UserProfile pic={data.pic} name={data.name} role={data.role} contact={data.contact}/>
                </GridItem>
            
        )
    })
}</Grid>}</Box>;
}

  export default ProfileGrid;