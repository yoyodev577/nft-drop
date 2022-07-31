import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image'
import city from "../assets/city.png"
import photo from "../assets/photo.png"

const Container = tw.div` 

`

const BackgroundContainer = tw.div``


const HomeContent = () => {
  return (
    <Container>
        <BackgroundContainer>
            <Image
            src={photo}
            alt="city"
            />
        </BackgroundContainer>
    </Container>
  )
}

export default HomeContent