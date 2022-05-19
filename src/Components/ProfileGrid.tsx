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


    return <Box left='320px' w='800px' p={4} border='solid' borderColor="white" borderRadius="30px">{<Grid gap={3} templateColumns='repeat(3, 1fr)' >{props.list.map(data=> {
        return (
            
            <GridItem>
                <UserProfile pic={data.pic} name={data.name} role={data.role} contact={data.contact}/>
            </GridItem>
            
        )
    })
}</Grid>}</Box>;
}

  export default ProfileGrid;