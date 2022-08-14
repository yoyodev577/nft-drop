import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import photo from "../assets/photo.png"
import Minting from '../components/Minting'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Container = tw.div`
    flex
    flex-col
    min-w-fit

`

const Title = tw.div`
    flex
    text-center
    p-10
    justify-center
    uppercase
    text-white
    text-5xl
    underline
    font-bold
`

const Content = tw.div`
    flex
    p-3
    justify-center
    text-center
    text-white
    text-2xl
    uppercase
    font-bold
`

const BackgroundContainer = tw.div`
    max-w-screen
    flex
    justify-center
    items-center

`


const project = () => {
  return (
    <Container id="project">
        <NavBar />
        <Title>Cats-dow-graph</Title>
            <Content>Cats-dow-graph is a collection of 3333 NFTs  on the polygon blockchain.
            <br /> Each shadowgraph is unique which owns Cat Servants Club's membership <br /> and grants access to member-only benefits.

            </Content> 

            <Minting />
        <BackgroundContainer>
            <Image
            src={photo}
            alt="photo"
            />
        </BackgroundContainer>

        <Footer />
    </Container>
  )
}

export default project