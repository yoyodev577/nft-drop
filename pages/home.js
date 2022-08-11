import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Header from '../components/Header'
import Minting from '../components/Minting'
import RoadMap from './roadmap'
import Footer from '../components/Footer'
import About from './about'
import Project from './project'
import HomeContent from '../components/HomeContent'
import Team from './team'
import FAQ from './faq'

const Container =tw.div``


export default function HomePage () {
    return(
        <Container>
            <HomeContent />
            <About />
            <RoadMap />
            <Team />
            <FAQ />
        </Container>
    )
}