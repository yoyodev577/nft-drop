import React from 'react'
import Image from 'next/image'
import roadmap from "../assets/roadmap2.png"
import tw from "tailwind-styled-components"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Container = tw.div`
    flex
    flex-col
    space-y-5
    py-5
    min-w-fit
`

const GridContainer =tw.div`
    mt-2
    pt-3
`

const TitleContainer = tw.div`
    flex
    justify-center
    
`

const Title = tw.div`
    min-w-fit
    underline
    uppercase
    text-7xl
    text-white
    font-bold
`

const ContentContainer = tw.div`
    text-center
    py-10
`


const ContentHeader =tw.div`
    text-3xl
    text-white
    uppercase
    underline
    font-bold
`

const ContentText = tw.h2`
    text-white
    text-2xl
    uppercase

`

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
                <ContentText>Whitelist & airdrop</ContentText>
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
                <ContentText>Charity Foundations</ContentText>
            </ContentContainer>

            <ContentContainer>
                <ContentHeader>Hold-for-experience</ContentHeader>
                <ContentText>Virtual Gallery</ContentText>
                <ContentText>Metaverse Game</ContentText>
            </ContentContainer>
        </GridContainer>
        <Footer />
    </Container>
  )
}

export default RoadMap