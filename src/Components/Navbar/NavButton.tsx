import { Box } from '@chakra-ui/react'
import React, { SetStateAction } from 'react';

interface NavButtonProps {
    label: string;
}

const NavButton = (props: NavButtonProps) => {
    
    return (
        <Box
            as='button'
            width='120px'
            height='50px'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            borderBottomWidth='3px'
            borderBottomColor='#103F53'
            px='8px'
            borderRadius='0px'
            fontSize='18px'
            fontWeight='400'
            bg='#212121'
            color='#FFFFFF'
            marginRight='10px'
            _hover={{
                bg: '#001A33',
                color: '#91D8F6',
                borderBottomColor: '#91D8F6',
                fontWeight:'700',
            }}
            _active={{
                bg: '#212121',
                transform: 'scale(0.98)',
                borderBottomColor: '#91D8F6',

            }}
            _focus={{
                boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            >
            {props.label}
        </Box>
    )
}


 export default NavButton;

