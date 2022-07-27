import React from 'react'
import tw from "tailwind-styled-components"


const Container = tw.div``

const VideoContainer = tw.div`

`
const Video = tw.video``

const Main = () => {
  return (
    <Container>
        <VideoContainer>
            <Video src="./bg-video.mp4/" muted={true} autoPlay={true} loop={true}/>
        </VideoContainer>
        Main
    </Container>
  )
}

export default Main