import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image'
import gallery from '../assets/gallery.jpg'
import city from "../assets/city.png"
import photo from "../assets/photo.png"
import NavBar from './NavBar'
import { About } from './about'



const Container = tw.div` 
`
const Background = tw.div`
  bg-fixed
`

const BackgroundContainer = tw.div`
    flex
    justify-center
    items-center
    py-5

`

const Video = tw.video``


const HomeContent = () => {
  return (
    <Container>
      <NavBar />
      <BackgroundContainer>
        <Video src={"./bg-video-2.mp4/"} muted={true} autoPlay={true} loop={true}/>
      </BackgroundContainer>
      <About />
    </Container>
  )
}

export default HomeContent