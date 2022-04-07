import { Menu, MenuList, MenuItem, MenuButton, Button } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { SetStateAction } from 'react';

interface DropdownProps {
    color: string;
}

const Dropdown = (props: DropdownProps) => {
    
    return (
        <Menu>
            <MenuButton 
                as={Button} 
                rightIcon={<TriangleDownIcon />}
                width='110px'
                height='50px'
                bg='#212121'
                color='#FFFFFF'
                borderBottomWidth='3px'
                borderBottomColor='#103f53'
                _hover={{ 
                    bg: '#001a33',
                    color: '#91d8f6' 
                }}
                _active={{
                    bg: '#001a33',
                    color: '#91d8f6',
                    fontWeight: 'bold'
                }}
                >
                Actions
            </MenuButton>
            <MenuList bg='#001a33' borderColor='#91d8f6'>
            <MenuItem 
                _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                color='#FFFFFF'
                >
                Home
            </MenuItem>
            <MenuItem 
                _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                color='#FFFFFF'
                >
                For Students
            </MenuItem>
            <MenuItem 
                _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                color='#FFFFFF'
                >
                For Teachers
            </MenuItem>
            </MenuList>
        </Menu>
    )
}


 export default Dropdown;

