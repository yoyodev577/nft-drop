import React from 'react'
import Image from 'next/image'
import roadmap from "../assets/roadmap2.png"
import tw from "tailwind-styled-components"

const Container = tw.div`
    flex
    flex-col
    pt-10
`

const TitleContainer = tw.div`
    flex
    justify-center
    pb-10
    
`

const Title = tw.div`
    uppercase
    text-3xl
    text-white
    font-bold
    
`

const ContentContainer = tw.div`
    flex
    justify-center

`


const ContentHeader =tw.div`
    flex
    flex-col
    mr-10
    text-white

`

const Content = tw.div`
    uppercase
    text-white

`

const ContentImage = tw.div``


const RoadMap = () => {
  return (

    <Container id="roadmap">
        <TitleContainer>
            <Title>RoadMap</Title>
        </TitleContainer>

        <ContentContainer>
            <ContentHeader>CSC Community</ContentHeader>
            
         </ContentContainer>
    </Container>
  )
}

export default RoadMap