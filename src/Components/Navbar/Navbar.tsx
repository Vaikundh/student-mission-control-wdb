import { Flex, Spacer, Text } from "@chakra-ui/react"
import React from "react";
import NavButton from "./NavButton";
import Dropdown from "./Dropdown";

const NavBar = () => {
    return (
        <>
            <Flex
                height="50px"
                bg="#212121"
                paddingRight="45px"
                >
                <Text color='white'>SMC</Text>
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