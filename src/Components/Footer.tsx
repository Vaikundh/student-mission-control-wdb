import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
  LinkOverlay,
} from '@chakra-ui/react';
import * as React from 'react';

const Footer = () => {
  return (
    <Box bg="#212121" >
      <Container as={Stack} maxW={'6xl'} py={7} align={'center'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }}
          spacing={9}>
          <Stack align={'flex-start'}>
          <Image src='/images/SMC.svg'/>
          <Link href='https://www.grants.gov/learn-grants/grant-making-agencies/national-science-foundation.html'>
            <Image src='/images/NSFLogo.svg'/>
          </Link>
          </Stack>
          <Stack align={'center'}>
            <Link href='https://www.issnationallab.org/'>
              <Image src='/images/ISSLogo.svg'/>
            </Link>
            <Link href='https://www.berkeley.edu'>
              <Image src='/images/berkeleylogo.svg'/>
            </Link> 
          </Stack>
          <Stack align={'flex-start'}>
            <Text variant="FootnoteBold"> Home </Text>
            <Link variant="footer" href={'#'}>
              About Us
            </Link>
            <Link variant="footer" href={'#'}>
              The Project
            </Link>
            <Link variant="footer" href={'#'}>
              The Team
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text variant="FootnoteBold"> Curriculum </Text>
            <Link variant="footer" href={'#'}>
              Table of Contents
            </Link>
            <Link variant="footer" href={'#'}>
              For Students
            </Link>
            <Link variant="footer" href={'#'}>
              For teachers
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text variant="FootnoteBold"> Resources </Text>
            <Link variant="footer" href={'#'}>
              Live Data
            </Link>
            <Link variant="footer" href={'#'}>
              Contact Us
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Link href='https://webatberkeley.org/'>
              <Image src = '/images/WebDevCredit.svg'/>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;