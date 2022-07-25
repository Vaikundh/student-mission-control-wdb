import { Menu, MenuList, MenuItem, MenuButton, Button, Divider, Box } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import React, { SetStateAction } from 'react';


const productDetails = {
    title: "product title",
    stock: ["5", "1"],
    links: [["/about_project", "/about_project"], ["/about_proje", "/about_proj"]]
  };

interface DropdownProps {
    label: string;
    items: string[][]
    w: string;

}

const Dropdown = (props: DropdownProps) => {
    
    return (
        <Menu>
            <MenuButton  
                as={MenuButton}
                // rightIcon={<TriangleDownIcon w={3} h={3}/>}
                width='130px'
                height={{ base: '50px', md: '60px', lg: '70px', xl: '85px' }}
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'

                bg='smcdarkgrey'
                color='smcwhite'
                borderBottomWidth='3px'
                borderBottomColor='#103F53'
                px='8px'
                borderRadius='0px'
                fontSize='18px'
                fontWeight='400'
                mr="10px"
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
            
                >
                {props.label} <TriangleDownIcon ml="6px" w={3} h={3}/>
            </MenuButton>
            <MenuList bg='#001a33' borderColor='#91d8f6'>
                    {props.items
                .map((item, i) => {
                return <MenuItem
                        _hover={{ bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'}}
                        color='#FFFFFF'
                        _focus={{
                            bg: '#001a33',color: '#91d8f6',fontWeight: 'bold'
                        }}
                        as="a" href={item[1]}
                        key={i}>
                            {item[0]}
                        </MenuItem>;
                        <Divider />
                })}
                
            </MenuList>
        </Menu>
    )
}


 export default Dropdown;

