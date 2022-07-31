import React from 'react'
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

const Title = tw.h2`
    uppercase
    text-3xl
    font-bold
    
`

const ContentContainer = tw.div`
    flex
    justify-center

`



const ContentHeader =tw.h3`
    mr-10
    

`

const Content = tw.h3`
    
    uppercase

`

const RoadMap = () => {
  return (
    <Container>
        <TitleContainer>
            <Title>RoadMap</Title>
        </TitleContainer>

        <ContentContainer>
            <ContentHeader>Phrase 1</ContentHeader>
            <Content>Expand the team <br /> Launch the website and discord </Content>
         </ContentContainer>
    </Container>

  )
}

export default RoadMap