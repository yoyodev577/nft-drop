import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image'
import gallery from '../assets/gallery.jpg'
import city from "../assets/city.png"
import photo from "../assets/photo.png"
import NavBar from './NavBar'

import {Canvas} from "@react-three/fiber"
import GalleryModels from './GalleryModels'


const Container = tw.div` 
  
  
`

const BackgroundContainer = tw.div`
    flex
    justify-center
    items-center

`

const Video = tw.video``


const HomeContent = () => {
  return (
    <Container>
      <NavBar />
        <BackgroundContainer>
          <Video src={"./bg-video-3.mp4/"} muted={true} autoPlay={true} loop={true}/>
        </BackgroundContainer>
    </Container>
  )
}

export default HomeContent