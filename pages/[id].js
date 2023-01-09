
import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Container, Divider, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
// import {useRouter} from "next/router"


const Page = ({data}) => {


    // console.log(data)

    // const router=useRouter()
    const router=useRouter()
    const handleClick=async()=>{
      await axios.post("http://localhost:8080/watchList",data)
      .then((res)=>{
      alert("Success");
      router.push("/watchlist");
       } )
      // .then((res)=>alert("success"))
      .catch((err)=>alert("error"))
    }
  return (
    <Box>
    <Heading textAlign="center"mb="10" mt="10">Single Movie</Heading>
    <Center>
  <Card maxW='sm' >
  <CardBody>
    <Image
    src={data.Images[0]}
    
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data.Title}</Heading>
      <Text>
       {/* {ele.Language} */}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       {/* Rating ${ele.imdbRating} */}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={handleClick}>
        Add to Watchlist
      </Button>
  

   
    
    </ButtonGroup>
  </CardFooter>
</Card>
</Center>
    </Box>
  )
}

export async function getServerSideProps(context){
    // console.log(context) 
    const {id}= context.params;

    const res=await fetch(`http://localhost:8080/movies/${id}`)
    const data=await res.json();

    return {
        props:{
            data,
        }
    }
}

export default Page