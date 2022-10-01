import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Header from '../components/Header'
import Minting from '../components/Minting'
import RoadMap from './roadmap'
import Footer from '../components/Footer'
import Project from './project'
import HomeContent from '../components/HomeContent'
import Team from './team'
import FAQ from './faq'
import { Cursor } from '../components/Cursor'

const Container =tw.div`
    min-w-fit
`



export default function HomePage () {
    return(

        <Container>
            <Cursor />
            <HomeContent />
            <Footer />
            <Cursor />
        </Container>

    )
}