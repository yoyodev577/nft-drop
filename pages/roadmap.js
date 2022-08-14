import React from 'react'
import Image from 'next/image'
import roadmap from "../assets/roadmap2.png"
import tw from "tailwind-styled-components"
import NavBar from '../components/NavBar'

const Container = tw.div`
    flex
    flex-col
    space-y-5
    py-5
`

const GridContainer =tw.div`
    w-full
    grid
    grid-cols-3
    mt-2
    pt-3
`

const TitleContainer = tw.div`
    flex
    justify-center
    
`

const Title = tw.div`
    underline
    uppercase
    text-5xl
    text-white
    font-bold
`

const ContentContainer = tw.div`
    flex
    flex-col
    text-center
    py-10
`


const ContentHeader =tw.div`
    text-3xl
    text-white
    uppercase
    font-bold
`

const ContentText = tw.h2`
    text-white
    text-2xl

`

const ContentImage = tw.div``


const RoadMap = () => {
  return (

    <Container id="roadmap">
        <NavBar />
        <TitleContainer>
            <Title>RoadMap</Title>
        </TitleContainer>
       
        <GridContainer>
            <ContentContainer>
                <ContentHeader> CSC Community </ContentHeader>
                <ContentText>DAO system</ContentText>
                <ContentText>Community Voting</ContentText>
            </ContentContainer>

            <ContentContainer>
                <ContentHeader> membership </ContentHeader>
                <ContentText>Personalized Benefits</ContentText>
                <ContentText>VIP Access</ContentText>
            </ContentContainer>

            <ContentContainer>
                <ContentHeader>Minting & airdrop</ContentHeader>
                <ContentText>Whitelist</ContentText>
                <ContentText>Presale & Public sale</ContentText>
            </ContentContainer>

            <ContentContainer>
                <ContentHeader>Marketing Campaign</ContentHeader>
                <ContentText>Free Giveaway</ContentText>
                <ContentText>Special Event</ContentText>
            </ContentContainer>


            <ContentContainer>
                <ContentHeader>Branding Collaboration</ContentHeader>
                <ContentText>Brand Collaboration</ContentText>
                <ContentText>Charity</ContentText>
            </ContentContainer>

            <ContentContainer>
                <ContentHeader>Hold-for-experience</ContentHeader>
                <ContentText>Virtual Gallery</ContentText>
                <ContentText>Metaverse Game</ContentText>
            </ContentContainer>
        </GridContainer>
    </Container>
  )
}

export default RoadMap