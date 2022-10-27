import { Box, Text} from '@chakra-ui/react'
import React, { SetStateAction } from 'react';

interface NavButtonProps {
    label: string;
    link: string;
}

const NavButton = (props: NavButtonProps) => {
    
    return (
        <Box
            as='a'
            width={{base:'75px', md:'90px', lg:'100px', xl: '120px'}}
            height={{ base: '40px', md: '60px', lg: '70px', xl: '85px' }}
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            borderBottomWidth='3px'
            borderBottomColor='#103F53'
            px='8px'
            borderRadius='0px'
            fontSize={{base:'10px', xl:'18px'}}
            fontWeight='400'
            bg='smcdarkgrey'
            color='smcwhite'
            marginRight={{base:'3px', xl:'10px'}}

            _hover={{
                bg: 'smcdarkblue',
                color: 'smclightblue',
                borderBottomColor: 'smclightblue',
                fontWeight:'700',
            }}
            _active={{
                bg: 'smcdarkgrey',
                transform: 'scale(0.98)',
                borderBottomColor: 'smclightblue',

            }}
            _focus={{
                boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            href={props.link}
            display="flex"
            alignItems= "center"
            justifyContent="center" 
            flexDirection="column" 
            >
                <Text>
                {props.label}
            </Text>
        </Box>
    )
}


 export default NavButton;

