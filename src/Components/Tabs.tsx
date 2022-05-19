import { Menu, MenuList, MenuItem, MenuButton, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, { SetStateAction } from 'react';

interface DropdownProps {
    color: string;
}

const Dropdown = (props: DropdownProps) => {
    
    return (
        <Menu>
            <MenuButton 
                as={Button} 
                rightIcon={<ChevronDownIcon />}
                bg='#212121'
                color='#FFFFFF'
                _hover={{ bg: '#ccd0d5' }}
                _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
                }}
                >
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>For Students</MenuItem>
                <MenuItem>Teachers</MenuItem>
            </MenuList>
        </Menu>
    )
}


 export default Dropdown;

