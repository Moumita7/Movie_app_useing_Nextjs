import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


const Page = ({data}) => {
    const router=useRouter()

    const refereshData=()=>{
        router.replace(router.asPath)
    }

        const handleDelete=async(id)=>{
            await axios.delete(`http://localhost:8080/watchList/${id}`)
            .then((res)=>{
                alert("Done")
                refereshData()
            })
            .catch((err)=>{alert("err")})
        }

  return (
    <Box>
        <Heading>this is WatchList page</Heading>
        <Grid gap="10" gridTemplateColumns='repeat(4,1fr)'>

        {data.map((ele,ind)=>(
            <>
            {/* <Link herf={`/movies/{ele.id}`} > */}
            <Card maxW='sm' id={ind}>
  <CardBody>
    <Image
      src={ele.Images[0]}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{ele.Title}</Heading>
      <Text>
       {ele.Language}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       Rating ${ele.imdbRating}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={()=>handleDelete(ele.id)}>
           

        Remove

      </Button>
    
    </ButtonGroup>
  </CardFooter>
</Card>
{/* // </Link> */}
            </>
        ))}


     </Grid>




    </Box>
   
  )
}

export async function getServerSideProps(context){
    const res=await fetch("http://localhost:8080/watchList")
   
    const data=await res.json()
    return {
        props:{
            data:data
        }
    }
}

export default Page