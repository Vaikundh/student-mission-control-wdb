import React from 'react';
import { useForm } from 'react-hook-form'
import { Box, Button, Text, Flex, VStack, Input, FormControl, FormLabel, Textarea, FormErrorMessage } from '@chakra-ui/react';
import Gradient from '../Assets/Gradients/gradientbackground.svg'

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }
    return (
      <div>
      <Box padding="120px" bgImage={Gradient} paddingTop="40px" overflow="hidden">
        <Text variant="H1">Get in Contact!</Text>
        <Box float="left" width="65%" paddingRight="100px" mt="30px">
          <Text variant="H4" mb="10px">Send a Message</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack alignItems="flex-start">
              <FormControl>
                <FormLabel mt="25px">
                  <Text variant="Body" color="#fff">Name*</Text>
                </FormLabel>
                <Input width="60%" height="45px" borderRadius="2xl"
                       borderColor="#91D8F6" color="#ffffff"
                       background="linear-gradient(0deg, rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.2)), url(.png),
                       radial-gradient(90.16% 143.01% at 15.32% 21.04%,
                       rgba(165, 239, 255, 0.2) 0%,
                       rgba(110, 191, 244, 0.0447917) 77.08%,
                       rgba(70, 144, 213, 0) 100%)"
                       {...register('name', {required: true})}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel mt="25px">
                  <Text variant="Body" color="#fff">Email address*</Text>
                </FormLabel>
                <Input width="70%" height="45px" borderRadius="2xl"
                       borderColor="#91D8F6" color="#ffffff"
                       background="linear-gradient(0deg, rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.2)), url(.png),
                       radial-gradient(90.16% 143.01% at 15.32% 21.04%,
                       rgba(165, 239, 255, 0.2) 0%,
                       rgba(110, 191, 244, 0.0447917) 77.08%,
                       rgba(70, 144, 213, 0) 100%)"
                       {...register('email', {
                         required: true,
                         pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "invalid email address"
                         }})}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel mt="25px">
                  <Text variant="Body" color="#fff">With which school(s) are you associated?</Text>
                </FormLabel>
                <Input width="80%" height="45px" borderRadius="2xl"
                       borderColor="#91D8F6" color="#ffffff"
                       background="linear-gradient(0deg, rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.2)), url(.png),
                       radial-gradient(90.16% 143.01% at 15.32% 21.04%,
                       rgba(165, 239, 255, 0.2) 0%,
                       rgba(110, 191, 244, 0.0447917) 77.08%,
                       rgba(70, 144, 213, 0) 100%)"
                       {...register('school')}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel mt="25px">
                  <Text variant="Body" color="#fff">What is your role?</Text>
                </FormLabel>
                <Input width="60%" height="45px" borderRadius="2xl"
                       borderColor="#91D8F6" color="#ffffff"
                       background="linear-gradient(0deg, rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.2)), url(.png),
                       radial-gradient(90.16% 143.01% at 15.32% 21.04%,
                       rgba(165, 239, 255, 0.2) 0%,
                       rgba(110, 191, 244, 0.0447917) 77.08%,
                       rgba(70, 144, 213, 0) 100%)"
                       {...register('role')}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel mt="25px">
                  <Text variant="Body" color="#fff">Subject*</Text>
                </FormLabel>
                <Input width="80%" height="45px" borderRadius="2xl"
                       borderColor="#91D8F6" color="#ffffff"
                       background="linear-gradient(0deg, rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.2)), url(.png),
                       radial-gradient(90.16% 143.01% at 15.32% 21.04%,
                       rgba(165, 239, 255, 0.2) 0%,
                       rgba(110, 191, 244, 0.0447917) 77.08%,
                       rgba(70, 144, 213, 0) 100%)"
                       {...register('subject', {required: true})}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel mt="25px">
                  <Text variant="Body" color="#fff">Message*</Text>
                </FormLabel>
                <Textarea width="90%" minHeight="200px"  borderRadius="2xl"
                       borderColor="#91D8F6" color="#ffffff"
                       background="linear-gradient(0deg, rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.2)), url(.png),
                       radial-gradient(90.16% 143.01% at 15.32% 21.04%,
                       rgba(165, 239, 255, 0.2) 0%,
                       rgba(110, 191, 244, 0.0447917) 77.08%,
                       rgba(70, 144, 213, 0) 100%)"
                       {...register('message', {required: true})}
                ></Textarea>
              </FormControl>
              <FormControl>
                <Button variant="primary" mt="25px" isLoading={isSubmitting} type='submit'>Submit</Button>
              </FormControl>
            </VStack>
          </form>
        </Box>
        <Box width="35%" float="right">
          <Text variant="H4" mt="60px" mb="30px">Address</Text>
          <Text variant="Body" color="#fff" lineHeight="30px">
          The Beauty and Joy of Computing <br />
          777 Soda Hall <br />
          Berkeley, CA 94720
          </Text>
          <Text variant="H4" mt="100px" mb="30px">Email Address</Text>
          <Text variant="Body" color="#fff">
            contact@bjc.berkeley.edu
          </Text>
        </Box>
      </Box>
      </div>
    )
}

export default Contact;