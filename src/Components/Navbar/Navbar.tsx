import { Flex, Spacer, Text, Image, Box } from "@chakra-ui/react"
import React from "react";
import NavButton from "./NavButton";
import Dropdown from "./Dropdown";
import Logo from "../../Components/Logo";
const NavBar = () => {
    return (
        <>
            <Flex
                height={{ base: '40px', md: '60px', lg: '70px', xl: '80px' }}
                bg="smcdarkgrey"
                paddingRight={{base:'20px', xl:'45px'}}
                alignItems='center'
                >
                <Box ml='1%'>
                    <Logo />
                </Box>
                <Spacer /> 
                <Flex>
                    <Dropdown label="Curriculum" items={[['Home', '/expeditions'], ['For Students', '/expeditions'], ['For Teachers', '/expeditions']]} w='145px'></Dropdown>
                    <Dropdown label="About" items={[['Project', '/about_project'], ['Team', '/about_team']]} w='105px'></Dropdown>
                    <NavButton label="Live Data" link="/"></NavButton>
                    <NavButton label="Resources" link="/resources"></NavButton>
                    <NavButton label="Contact Us" link="/contact"></NavButton>
                </Flex>    
            </Flex>
        </>
    )
}

export default NavBar;