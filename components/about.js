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
    flex
    justify-center
`

const Content = tw.div`
    flex
    justify-center 
    p-3
    text-white
    text-center
    text-2xl
    font-bold
`
const Text = tw.div``


export const About = () => {
  return (
    <Container>
 
      <Content>  
          <Text>
            Cat Servants Club is a community of cat servants,<br /> which constructs cat civilizations in the metaverse.
            <br />Cats are the best dominators of the world -- No..to the moon!  In the metaverse! <br />
          </Text>
      </Content>
      <BackgroundContainer>  


      </BackgroundContainer>

    </Container>
  )
}
