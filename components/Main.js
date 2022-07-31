import React from 'react'
import tw from "tailwind-styled-components"
import Minting from './Minting'
import Image from 'next/image'
import Gallery from '../assets/gallery.jpg'
import RoadMap from './RoadMap'

import Link from 'next/link'
import MintPage from '../pages/homepage'


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
const TitleContainer = tw.div`
    flex
`

const Video = tw.video``


const Title = tw.h2`
    uppercase
    text-1xl
    italic
    font-bold
    mt-3
`
const ButtonContainer = tw.div`
    flex
    mt-2
    gap-4
`

const FilledButton = tw.button`
    flex
    justify-center
    items-center
    flex-1
    bg-black
    border-2
    text-white

    hover:bg-white 
    hover:text-black font-bold py-2 px-4 rounded uppercase

`

const Main = () => {
  return (
    <Container>
        <VideoContainer>
            <Video src={"./bg-video-2.mp4/"} muted={true} autoPlay={true} loop={true}/>
        </VideoContainer>

        <TitleContainer>
          <Title>Welcome to explore the cat's civilizations</Title>
        </TitleContainer>

        <ButtonContainer>
          <Link href='/homepage'>
            <a>
                <FilledButton>
                    More
                </FilledButton>
              </a>
            </Link>

        </ButtonContainer>
    </Container>
  )
}

export default Main