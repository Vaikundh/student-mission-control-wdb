import React from 'react';
import { Link, Text, Box, Flex, Image, Stack} from '@chakra-ui/react';
import Gradient from "../Assets/Gradients/gradientbackground.svg"



const AboutProject = () => {
  return (
    <div className="App">
      <Flex alignItems="center" direction="column" height="100%" justifyContent="space-between" backgroundImage={Gradient}>
        <Box height="77px" />
        <Box alignItems="left">
            <Text variant="H1" fontSize="60px">
                The Project
            </Text>
        </Box>
 
        <Box height="120px"/>
        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px">
                Mission and Goals
        </Text>
        
        <Box height="41px"/>
        <Box display="flex" width="50%" border="solid" borderColor="white" borderRadius="30px" flexDirection="column" alignContent="space-between"
        bg="linear-gradient(-30deg, #000000, #001A33)">
          <Text m={[203, 3]} variant="Body" fontSize="28px" lineHeight="41px" letterSpacing="0.37px" color="white" padding='15px'>
            EAGER Student Mission Control for the International Space Station
          </Text>
          <Text variant="Body" fontSize="20px" lineHeight="41px" letterSpacing="0.37px" color="white" padding='3%'>
            This EAGER award tests a bold concept, to engage high school students with direct access to data and experiments
             on the International Space Station, and to use these assets in computer science courses to help students develop
              skills of data inquiry, analysis and exploration. Results from this pilot will lead to subsequent work to develop
              and integrate these resources and activities into widely used high school computer science courses. This innovation
              confronts a real problem in computing education - how to have the data analysis components of computer science courses
              have richness, depth and engagement, so that students can develop and apply these essential skills. Taking advantage of
              the educational power and appeal of space exploration, and the many connections to key domains of computer science, the
              project will create and test an open-source Student Mission Control, providing high school students with centralized access
              to a wealth of data from on-orbit sensors, student experiments, science research and NASA&lsquo;s own mission control. We will also
              create and test a set of related learning activities with computer science applications, focusing specifically on data literacy,
              since this is of growing importance and a perennial challenge in computer science courses.
          </Text>
          <Text variant="Body" fontSize="20px" lineHeight="41px" letterSpacing="0.37px" color="white" padding='3%'>
            We will design and implement a pilot curriculum to improve data literacy by engaging students with real data from the 
            International Space Station. We will also design a Student Mission Control interface system that mimicks NASA&lsquo;s own Mission Control.
            The team will address the technical challenges of accessing data from the ISS, manage it in a dynamic data engine and create an engaging 
            and informative user interface and API. We will also develop the related inquiry-based investigations and simulations that engage students&lsquo;
            curiosity and promote data literacy skills. This pilot will work initially with the co-PI&lsquo;s computer science course for non-majors, and 
            then deploy and test in high schools, with 20 teachers of computer science and their students. Lessons learned from this pilot project, 
            if warranted, will in turn lead to a full proposal for large scale development, dissemination, training, and expansion of functions, 
            learning activities and educational activities.
          </Text>
        </Box>

        <Box height="128px"/>
          <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px">
                  Support and Sponsorship
          </Text>
          <Box height="41px" />
          <Box display="flex" width="900px" border="solid" borderColor="white" borderRadius="30px" flexDirection='column' alignItems="center">
              <Link href='https://nsf.gov/awardsearch/showAward?AWD_ID=2027260&HistoricalAwards=false' target="_blank"mt='5%'>
                <Image src='/images/NSFlogo.svg' boxSize='300px'/>
              </Link>
              <Text variant="BodyLarge" color="smcwhite" mb='5%'> National Science Foundation Grant #2027260</Text>
          </Box>
        <Box height="372px"/>
      </Flex>
    </div>
  );
};

export default AboutProject;