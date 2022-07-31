import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Header from '../components/Header'
import Minting from '../components/Minting'
import RoadMap from '../components/RoadMap'
import Footer from '../components/Footer'
import Main from '../components/Main'
import HomeContent from '../components/HomeContent'

const Container =tw.div``

const Title = tw.h1`
    text-white
`

export default function HomePage () {
    return(
        <Container>
            <Header />
            <HomeContent />
            <Minting />
            <RoadMap />
            <Footer />
        </Container>
    )
}