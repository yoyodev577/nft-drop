import React from 'react'
import tw from "tailwind-styled-components"
import Minting from './Minting'
import Image from 'next/image'
import Gallery from '../assets/gallery.jpg'


const Container = tw.div`
  flex
  flex-col
  items-center
`

const VideoContainer = tw.div`
  flex
  flex-col
  max-w-screen-xl
`
const Video = tw.video``

const Main = () => {
  return (
    <Container>
        <VideoContainer>
            <Video src={"./bg-video-2.mp4/"} muted={true} autoPlay={true} loop={true}/>
            <Minting />
        </VideoContainer>
    </Container>
  )
}

export default Main