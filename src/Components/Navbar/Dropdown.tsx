import { Menu, MenuList, MenuItem, MenuButton, Button, Divider } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import React, { SetStateAction } from 'react';

interface DropdownProps {
    label: string;
    menu1: string;
    menu2: string;
    menu3: string;
    w: string;
}

const Dropdown = (props: DropdownProps) => {
    
    return (
        <Menu>
            <MenuButton 
                as={Button} 
                rightIcon={<TriangleDownIcon w={3} h={3}/>}
                width = {props.w}
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                bg='#212121'
                color='#FFFFFF'
                borderBottomWidth='3px'
                borderBottomColor='#103f53'
                height = "50px"
                borderRadius="0px"
                fontSize='18px'
                fontWeight='400'
                mr="10px"
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
            </MenuButton>
            <MenuList bg='#001a33' borderColor='#91d8f6'>
                <MenuItem 
                    _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                    color='#FFFFFF'
                    _focus={{
                        bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'
                    }}
                    >
                    {props.menu1}
                </MenuItem>
                <Divider />
                <MenuItem 
                    _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                    color='#FFFFFF'
                    _focus={{
                        bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'
                    }}
                    >
                    {props.menu2}
                </MenuItem>
                <Divider />
                <MenuItem 
                    _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                    color='#FFFFFF'
                    >
                    {props.menu3}
                </MenuItem>
            </MenuList>
        </Menu>
    )
}


 export default Dropdown;
