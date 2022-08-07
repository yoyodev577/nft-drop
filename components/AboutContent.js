import React from 'react'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import gallery from '../assets/gallery.jpg'
import photo from "../assets/photo.png"
import city from "../assets/city.png"
import cat from "../assets/cat.png"


const Container = tw.div`
    flex
    flex-col
    p-6

`

const Title = tw.div`
    flex
    p-3
    font-bold
    justify-center
    uppercase
    text-white
    text-5xl
    underline
`

const BackgroundContainer = tw.div`
    relative
`

const Content = tw.div`
    absolute
    top-3 
    text-white
    text-2xl
    uppercase
    font-bold
`


const AboutContent = () => {
  return (
    <Container>
      <Title>
        About Us
      </Title>
      <BackgroundContainer>
        <Image
          src={city}
          alt="city"
        />
        <Content>
          Cat Servants Club is the community of cat servants ,<br /> which brings a new perspective of cat civilization in the metaverse. 
          <br />Cats are the best dominators of the world -- No..to the moon!  In the metaverse! <br />
        
        <Image
        width={420}
        height={380}
        src={cat}
        alt="cat"
        />
        
        </Content>
      </BackgroundContainer>

    </Container>
  )
}

export default AboutContent