import React from 'react';
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
  Link
} from '@chakra-ui/react';
import Navbar from './Navbar';


import {SearchIcon, ChevronRightIcon} from '@chakra-ui/icons';

const LandingPage = () => {
  const places = [
    {
      location: 'Victoria Island',
      img: './assets/victoria-island.png'
    },
    {
      location: 'Lagos Creek',
      img: './assets/lagos-creek.png'
    },
    {
      location: 'Lekki',
      img: './assets/lekki.png'
    },
    {
      location: 'Ikoyi',
      img: './assets/ikoyi.png'
    }
  ]

  const property = [
    {
      image: './assets/apartment-1.png',
      saleUpdate: 'FOR SALE',
      propertyDescription: 'A mini self-contain apartment ',
      location: 'Choba',
      bedroom: 1,
      bathroom: 1,
      kitchen: 1,
      price: '₦200,000.00',
    },
    {
      image: './assets/apartment2.png',
      saleUpdate: 'FOR SALE',
      propertyDescription: 'A mini self-contain apartment ',
      location: 'Choba',
      bedroom: 1,
      bathroom: 1,
      kitchen: 1,
      price: '₦200,000.00',
    },
    {
      image: './assets/apartment3.png',
      saleUpdate: 'FOR SALE',
      propertyDescription: 'A mini self-contain apartment ',
      location: 'Choba',
      bedroom: 1,
      bathroom: 1,
      kitchen: 1,
      price: '₦200,000.00',
    },
  ];
  const year = new Date ().getFullYear ();
  return (
    <Box>
      <Navbar />

      <Box ml="14" mr={{base: '14', lg: '0'}}>
        <Box pos="relative">
          <Flex direction={{base: 'column', lg: 'row'}}>
            <Box flex="1" mb="5" mt='20'>
              <Text
                mt={{base: '0',lg: '68px'}}
                fontSize={{base: '25px', md: '38px', lg: '48px'}}
                fontWeight="700"
                color={'black100'}
                textAlign={{base: 'center',lg:'left'}}
              >
                Search for your
                ideal property in Nigeria
                anywhere, anytime!
              </Text>
              <Text mt='4' pr={{base: '1px', md: '16px'}} fontSize="20px" color={'black200'} textAlign={{base: 'center',lg:'left'}}>
                Search our listing for spaces on the go at your fingertip with no stress.
              </Text>
            </Box>

            <Box flex="1" mx='14'>
              <Image src='./assets/hero-img.png' alt="hero-img" />
            </Box>
          </Flex>

          <Box>
      <Box
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="transparent"
          pos={{base: 'none', lg: 'absolute'}}
          top={{base: '0', lg: '70%'}}
          w={{base: '100%', lg: '85%'}}
          ml={{base: '0', lg: '14'}}
          mt={{base: '8', lg: '0'}}
        >
          <FormControl id="apartmentDetails">
            <Flex
              justifyContent="space-between"

              direction={{base: 'column', lg: 'row'}}
            >
              <Box mb="4">
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
                  <option>option 2</option>
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
              <Box mb="4" mt='7' alignSelf="center">
                <Button
                bg='green'
                  type="submit"
                  color="white"
                  _hover="none"
                >
                  <Text fontSize='12px' mr='3'>
                  Search

                  </Text>
                  <SearchIcon />
                </Button>
              </Box>
            </Flex>
          </FormControl>
        </Box>
      </Box>
        </Box>
      </Box>
<Box mt={{base: '2', md: '8'}} mx='14'>
  <Text textAlign='center' fontSize='3xl' fontWeight='bold' mt='20' mb='7'>
    Explore Spacefinder
    </Text>
<Grid templateColumns={{base: 'repeat(1,1fr)',lg:"repeat(3, 1fr)"}} gap={6}>
  <Box w="100%" border='1px solid #cccccc' borderRadius='10px'>
    <Flex>
      <Box>
<Image borderBottomLeftRadius='9px' borderTopLeftRadius='9px' src='./assets/apartment.png' />
      </Box>
      <Box alignSelf='center' ml='4'>
<Text>
  Shortlet Apartment
</Text>
      </Box>
    </Flex>
    </Box>
  <Box w="100%" border='1px solid #cccccc' borderRadius='10px'>
  <Flex>
      <Box>
<Image borderBottomLeftRadius='9px' borderTopLeftRadius='9px' src='./assets/land.png' />
      </Box>
      <Box alignSelf='center' ml='4'>
<Text>
  Lands
</Text>
      </Box>
    </Flex>
    </Box>
  <Box w="100%" border='1px solid #cccccc' borderRadius='10px'>
  <Flex>
      <Box>
<Image borderBottomLeftRadius='9px' borderTopLeftRadius='9px' src='./assets/shortlet.png' />
      </Box>
      <Box alignSelf='center' ml='4'>
<Text>
  Shortlet apartment
</Text>
      </Box>
    </Flex>
    </Box>
</Grid>

<Box>
  <Text fontWeight='bold' fontSize='3xl' textAlign='center' mt='20' mb='7'>Find the perfect listing</Text>
  <Text textAlign='center' my='7'>Browse through our listing and get connected to agent and vendor easily</Text>

  <Grid templateColumns={{base:'repeat(1, 1fr)', sm:"repeat(2, 1fr)",lg:"repeat(4, 1fr)"}} gap={6}>
    {places.map(item => 
      <Box w="100%" bgImage={item.img} bgRepeat='no-repeat' h='350px' pos='relative'>
<Text color='white' fontWeight='bold' fontSize='24px' ml='7' pos='absolute' top='64'>{item.location}</Text>
        </Box>
      )}
</Grid>
</Box>
<Box>
<Text fontWeight='bold' fontSize='3xl' textAlign='center' mt='20' mb='7'>Find the perfect listing</Text>
  <Text textAlign='center' my='7'>Browse through our listing and get connected to agent and vendor easily</Text>

  <Grid templateColumns={{base: "repeat(1, 1fr)",lg: "repeat(3, 1fr)"}} gap={6}>
  <Box w="100%">
    <Text fontSize='24px' fontWeight='bold' color='white' bg={'purple100'} w='10%' textAlign='center' borderRadius='20px'>
      1
    </Text>
    <Text fontSize='24px' my='4' fontWeight='bold'>Find your desired property</Text>
    <Text fontSize='18px' color='black200'>
    Search for a home or space from our search bar. Enter your specific location and property type.
    </Text>
    </Box>
    <Box w="100%">
    <Text fontSize='24px' fontWeight='bold' color='white' bg={'purple100'} w='10%' textAlign='center' borderRadius='20px'>
      2
    </Text>
    <Text fontSize='24px' my='4' fontWeight='bold'>Find your desired property</Text>
    <Text fontSize='18px' color='black200'>
    Search for a home or space from our search bar. Enter your specific location and property type.
    </Text>
    </Box>
    <Box w="100%">
    <Text fontSize='24px' fontWeight='bold' color='white' bg={'purple100'} w='10%' textAlign='center' borderRadius='20px'>
      3
    </Text>
    <Text fontSize='24px' my='4' fontWeight='bold'>Find your desired property</Text>
    <Text fontSize='18px' color='black200'>
    Search for a home or space from our search bar. Enter your specific location and property type.
    </Text>
    </Box>
</Grid>


</Box>

<Box mt='20' bg='bg'>
<Box
          py="14"
          pl={{base: '6', md: '14'}}
          bg="propertyListing"
          mb="28"
          bgImage='./assets/property.png'
          bgPosition="right"
          bgRepeat="no-repeat"
        >
          <Text fontSize='14px' color='purple100'>WIDEN YOUR HORIZONS</Text>
          <Text fontSize={{base: '20px', md: '30px',lg:'40px'}} color='purple100' mt='4'>
            Get Your Properties 
          </Text>
          <Text fontSize={{base: '20px', md: '30px',lg:'40px'}} color='purple100' mb='4'>
          Listed on Spacefinder
            </Text>
          <Link _hover="none" href="#" >
            <Button bg='white100' color='purple100' py='6'>
              List Your Property <ChevronRightIcon  ml='4'/>
            </Button>
          </Link>
        </Box>


</Box>

<Box>

<Text fontWeight='bold' fontSize='3xl' textAlign='center' mt='20' mb='7'>Find the perfect listing</Text>
  <Text textAlign='center' my='7'>Browse through our listing and get connected to agent and vendor easily</Text>

  <Flex
            justifyContent="space-between"
            direction={{base: 'column', lg: 'row'}}
          >
            {property.map (item => (
              <Box mr="4" alignSelf={{base: 'center', lg: 'normal'}} mb="4">
                <img src={item.image} alt="apartment" />
                <Text my="2" fontSize="10px" color='red100'>
                  {item.saleUpdate}
                </Text>
                <Text fontSize="18px">{item.propertyDescription}</Text>
                <Text my="2" color="black200">
                  {item.location} &bull; {item.bedroom} bedroom - {item.bathroom} bathroom - {item.kitchen} kitchen
                </Text>
                <Text color='green'>{item.price}</Text>
              </Box>
            ))}
          </Flex>
</Box>
</Box>
<Box bg='white200'>

<Text fontWeight='bold' fontSize='2xl' textAlign='center' mt='20' pt='14' mb='4'>Email Newsletter</Text>
  <Text textAlign='center' mb='7'>Get firsthand information on spacefinder deal and information</Text>
  <FormControl id="newsletter" pb='14'>
          <Flex justifyContent="center">
            <Box flex="0.4">
              <Input bg="white" type="email" placeholder="Enter your Email" required={true}/>
            </Box>
            <Box ml="4">
              <Button _hover="none" type="submit" bg='green' color='white'>
                Subscribe
              </Button>
            </Box>
          </Flex>
        </FormControl>
</Box>
<Box mx="14" my="14">
        <Flex
          pb="8"
          justifyContent="space-between"
          textAlign={{base: 'center', md: 'left'}}
          direction={{base: 'column', md: 'row'}}
        >
          <Box alignSelf={{base: 'center', md: 'start'}}>
            <Link href="/">
              <Image
                pl={{base: '20', md: '0'}}
                src='./assets/logo.png'
                alt="spacefiner-logo"
              />
            </Link>
            <Text mt="6">A better way to find space</Text>
          </Box>
          <Box>
            <Text
              mt={{base: '4', md: 0}}
              fontSize="16px"
              fontWeight="bold"
              mb="6"
            >
              Company
            </Text>
            <Link href="#"><Text>About us</Text></Link>
            <Link href="#"><Text>Blog</Text></Link>
            <Link href="#"><Text>Career</Text></Link>
            <Link href="#"><Text>Contact</Text></Link>

          </Box>
          <Box>
            <Text
              mt={{base: '4', md: 0}}
              fontSize="16px"
              fontWeight="bold"
              mb="6"
            >
              About
            </Text>
            <Link href="#"><Text>About us</Text></Link>
            <Link href="#"><Text>T & C</Text></Link>
            <Link href="#"><Text>Privacy</Text></Link>
            <Link href="#"><Text>Contact</Text></Link>

          </Box>
          <Box>
            <Text
              mt={{base: '4', md: 0}}
              fontSize="16px"
              fontWeight="bold"
              mb="6"
            >
              Support
            </Text>
            <Link href="#"><Text>FAQ</Text></Link>
            <Link href="#"><Text>Customer Service</Text></Link>
            <Link href="#"><Text>City guide</Text></Link>

          </Box>
        </Flex>
        <hr />
        <Box mt="8">
          <Flex
            alignItems={{base: 'center', md: 'start'}}
            justifyContent="space-between"
            direction={{base: 'column', md: 'row'}}
          >
            <Box>
              &copy; {year} Rillcod Technologies - All rights reserved
            </Box>
            <Box mt={{base: 4, md: '0'}}>
              <Flex>
                <Box mr="4">
                  <Link href="#"><i class="fab fa-instagram" /></Link>

                </Box>
                <Box mr="4">
                  <Link href="#">
                    <i class="fab fa-linkedin-in" />

                  </Link>
                </Box>
                <Box mr="4">
                  <Link href="#">
                    <i class="fab fa-facebook-f" />
                  </Link>
                </Box>
                <Box>
                  <Link href="#">
                    <i class="fab fa-twitter" />

                  </Link>
                </Box>
              </Flex>
            </Box>

          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
