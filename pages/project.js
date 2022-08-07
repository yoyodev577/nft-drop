import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import photo from "../assets/photo.png"
import Minting from '../components/Minting'
import NavBar from '../components/NavBar'

const Container = tw.div`
    flex
    flex-col

`

const Title = tw.div`
    flex
    p-5
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
        <Title>Cats-dow-graph</Title>
            <Content>Cats-dow-graph is a collection of 3333 NFTs  on the polygon blockchain.
            <br /> Each shadowgraph is unique which owns Cat Servants Club's membership <br /> and grants access to member-only benefits.

            </Content> 

        <BackgroundContainer>
            <Image
            src={photo}
            alt="photo"
            />
        </BackgroundContainer>

        <Minting />

    </Container>
  )
}

export default project