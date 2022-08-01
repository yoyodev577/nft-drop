import React from 'react'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import gallery from '../assets/gallery.jpg'
import photo from "../assets/photo.png"
import city from "../assets/city.png"


const Container = tw.div`
    flex
    flex-col
    p-6

`

const Title = tw.div`
    flex
    p-5
    justify-center
    uppercase
    text-white
    text-5xl
    underline
`

const Content = tw.div`
    flex
    justify-center
    text-center
    text-white
    text-3xl
    uppercase
`

const BackgroundContainer = tw.div`
    flex
    justify-center

`

const AboutContent = () => {
  return (
    <Container>
        <Title>About Us</Title>
        <Content>Catshadow-graph is a collection of 1111 randomly generated on the polygon blockchain 
        Each photograph is unique and comes with cat inside the shadow city.
        </Content> 
        
        <BackgroundContainer>
            <Image
            src={photo}
            alt="photo"
            />
        </BackgroundContainer>
    </Container>
  )
}

export default AboutContent