import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar/Navbar';
import Buttons from '../Components/Buttons';
import { Button, Text, Box, Spacer, Center, Flex} from '@chakra-ui/react';
import UserProfile from '../Components/UserProfile';
import ProfileGrid from '../Components/ProfileGrid';

const ISS = [{
    "pic": "samantha_thorstensen",
    "name": "Samantha Thorstensen",
    "role": "Education Program Manager",
    "contact": "sthorstensen@issnationallab.org"
  }, {
    "pic": "debbie_kowaleuski",
    "name": "Debbie Kowaleuski",
    "role": "Administrative Support",
    "contact": "dkowaleuski@issnationallab.org"
  }, {
    "pic": "courtney_black",
    "name": "Courtney Black",
    "role": "Education Project Manager",
    "contact": "dkowaleuski@issnationallab.org"
  }, {
    "pic": "default",
    "name": "Frank H Bauer",
    "role": "Executive Director Radio ISS",
    "contact": "ka3hdo@gmail.com"
  }, {
    "pic": "default",
    "name": "Leonard Weiser",
    "role": "Project Coordinator ARES and IT",
    "contact": "yugesiw@earthlink.net"
  }, {
    "pic": "default",
    "name": "Michael Wilkinson",
    "role": "Director of Education at magnitude.io",
    "contact": "wilkinson@magnitude.io"
  }, {
    "pic": "default",
    "name": "Randy Berger",
    "role": "ARISS",
    "contact": "rberger@rberger.com"
  }, {
    "pic": "liam_kennedy",
    "name": "Liam Kennedy",
    "role": "ISS-Above",
    "contact": "liam@issabove.com"
  }, {
    "pic": "default",
    "name": "Hunter McNamara",
    "role": "ARISS",
    "contact": "hunter.p.mcnamara@gmail.com"
  }, {
    "pic": "default",
    "name": "Justin Amado",
    "role": "Tech Expert",
    "contact": "jamado@issnationallab.org"
  }];

  const Berkeley = [{
    "pic": "dan_garcia",
    "name": "Dan Garcia",
    "role": "Co-Principal Investigator, Teaching Professor @ Berkeley",
    "contact": "sthorstensen@issnationallab.org"
  }, {
    "pic": "lauren_mock",
    "name": "Lauren Mock",
    "role": "BJC Project Manager",
    "contact": "lmock@berkeley.edu"
  }, {
    "pic": "default",
    "name": "Shirley Wu",
    "role": "Data Visualization Lead",
    "contact": "dkowaleuski@issnationallab.org"
  }, {
    "pic": "josh_hug",
    "name": "Josh Hug",
    "role": "Teaching Professor @ Berkeley, Data Science expert",
    "contact": "hug@cs.berkeley.edu"
  }, {
    "pic": "michael_ball",
    "name": "Michael Ball",
    "role": "Lecturer @ Berkeley, Data Science and API expert",
    "contact": "yugesiw@earthlink.net"
  }];

  const wdb = [{
    "pic": "vaikundh",
    "name": "Vaikundh Jagannathan",
    "role": "Product Manager",
    "contact": "vaikundh.j@berkeley.edu"
  }, {
    "pic": "aadhiti",
    "name": "Aadhiti Ghankota",
    "role": "Web Developer",
    "contact": "aadhitighankota@berkeley.edu"
  }, {
    "pic": "aniruddh",
    "name": "Aniruddh Chennapragada",
    "role": "Web Developer",
    "contact": "anic@berkeley.edu"
  }, {
    "pic": "ayaka",
    "name": "Ayaka Chou",
    "role": "Web Developer",
    "contact": "ayakachou@berkeley.edu"
  }, {
    "pic": "chanel",
    "name": "Chanel Zeng",
    "role": "Web Developer",
    "contact": "zengchanel@berkeley.edu"
  }, {
    "pic": "saketh",
    "name": "Saketh Panchumarthy",
    "role": "Web Developer",
    "contact": "saketh@berkeley.edu"
  },{
    "pic": "sebastian",
    "name": "Sebastiaan Szafir",
    "role": "Web Developer",
    "contact": "sebastiaan@berkeley.edu"
  },{
    "pic": "vihan",
    "name": "Vihan Bhargava",
    "role": "Web Developer",
    "contact": "vihan@berkeley.edu"
  }, {
    "pic": "cass",
    "name": "Chengyin Li",
    "role": "Web Designer",
    "contact": "chengyin@berkeley.edu"
  }, {
    "pic": "danielle",
    "name": "Danielle Wong",
    "role": "Web Designer",
    "contact": "daniellenwong@berkeley.edu"
  },];

const AboutTeam = () => {
  return (
    <div className="App">
      <NavBar />
      <Flex alignItems="center" bg="smcblack" direction="column" height="100%" justifyContent= "space-between">
        <Box height="77px"/>
        <Box alignItems="left">
            <Text variant="H1" fontSize="60px">
                The Team
            </Text>
        </Box>

        <Box height="128px"/>
        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px">
                ISS National Lab Team
        </Text>
        <Box height="43px"/>
        <ProfileGrid list={ISS} />

        <Box height="128px"/>
        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px">
                UC Berkeley Team 
        </Text>
        <Box height="43px"/>
        <ProfileGrid list={Berkeley} />

        <Box height="128px"/>
        <Text variant="H3" fontSize="32px" letterSpacing="0.23px">
                Web Dev @ Berkeley Team
        </Text>
        <Box height="43px"/>
        <ProfileGrid list={wdb} />

        <Box height="372px"/>
      </Flex>
      <Footer />
    </div>
  );
};

export default AboutTeam;