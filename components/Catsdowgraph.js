import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import photo from "../assets/photo_01.png"
import Minting from './Minting'
import { Opensea } from './Opensea'

const Container = tw.div`
    flex
    flex-col
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
    py-5
`


const Catsdowgraph = () => {
  return (
    <Container id="cats-dow-graph">
        <Title>Cats-dow-graph</Title>
        
            <BackgroundContainer>
                
                <Image
                width={843}
                height={500}
                src={photo}
                alt="photo"
                />
        
            </BackgroundContainer>


            <Content>Cats-dow-graph is a collection of 3333 NFTs  on the polygon blockchain.
            <br /> Each shadowgraph is unique which owns Cat Servants Club's membership <br /> and grants access to member-only benefits.
            </Content>
            <Opensea /> 

    </Container>
  )
}

export default Catsdowgraph