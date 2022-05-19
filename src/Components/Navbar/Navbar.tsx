import { Flex, Spacer, Text, Image } from "@chakra-ui/react"
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
                <Logo/>
                <Spacer /> 
                <Flex>
                    <Dropdown label="Curriculum" menu1="Home" menu2="For Students" menu3="For Teachers" w='145px'></Dropdown>
                    <Dropdown label="About" menu1="TBD" menu2="TBD" menu3="TBD" w='105px'></Dropdown>
                    <NavButton label="Live Data"></NavButton>
                    <NavButton label="Resources"></NavButton>
                    <NavButton label="Contact Us"></NavButton>
                </Flex>    
            </Flex>
        </>
    )
}

export default NavBar;