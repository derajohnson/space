import React from 'react'
import {
    Flex,
    Box,
    Text,
    Select,
    FormControl,
    FormLabel,
    Input,
    Grid,
    Button,
    Image,
    Link,
    Switch
  } from '@chakra-ui/react';
import Navbar from './Navbar'


const Search = () => {
    return (
        <Box>
            <Navbar />
<Box mt={{base: '2', md: '8'}} mx='14'>
                <Box>
                <FormControl id="apartmentDetails">
            <Flex justifyContent="space-between">
              <Grid templateColumns={{base: "repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(5, 1fr)"}} gap={6}>
                  <Box  mb="4">
                <FormLabel>Looking to...</FormLabel>
                <Select placeholder="Rent">
                  <option>option 1</option>
                  <option>option 2</option>
                </Select>
</Box>
              <Box mb="4">
                <FormLabel>Type</FormLabel>
                <Select placeholder="3 bedroom flat">
                  <option>option 1</option>
                  <option>option 2...</option>
                </Select>
              </Box>
              <Box mb="4">
                <FormLabel>Area</FormLabel>
                <Input placeholder="Choba, Port Harcourt" type='text'/>
              </Box>
              <Box mb="4">
                <FormLabel>Prices</FormLabel>
                <Input placeholder="₦200,000 - ₦500,000" type='number' />
              </Box>
              </Grid>
              <Box mb="4" mr='4' >
              <Switch id="search-property" size='lg'/>
              </Box>
            </Flex>
          </FormControl>     
                </Box>
</Box>       
        </Box>
    )
}

export default Search