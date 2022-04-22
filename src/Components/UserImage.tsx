import React from 'react';
import { Image } from '@chakra-ui/react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderImg?: string;
    errorImg?: string;
  }

  const UserImage = (props: ImageProps) => (
    <Image
      src={
        props.src ||
        'https://res.cloudinary.com/dsabyte/image/upload/v1630411853/users/user-svgrepo-com_vdq4rw.svg'
      }
      alt={props.name}
      boxSize="200px"
      borderRadius="full"
      fallbackSrc="hhttps://res.cloudinary.com/dsabyte/image/upload/v1630411853/users/user-svgrepo-com_vdq4rw.svg"
      mx="auto"
    />
  );
  
  export default UserImage;