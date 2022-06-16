import { Flex, Spacer, Text, Image, Box } from "@chakra-ui/react"
import React from "react";
import NavButton from "./NavButton";
import Dropdown from "./Dropdown";
import Logo from "../../Components/Logo";

const NavBar = () => {
    return (
        <>
            <Flex
                height={{ base: '50px', md: '60px', lg: '70px', xl: '85px' }}
                bg="smcdarkgrey"
                paddingRight="45px"
                >
                <Box as="a" href="/">
                    <Logo />
                </Box>
                <Spacer /> 
                <Flex color="white">
                    <Dropdown label="Curriculum" items={[['Home', '/'], ['For Students', '/'], ['For Teachers', '/']]} w='145px'></Dropdown>
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