import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import photo from "../assets/photo_01.png"
import Minting from '../components/Minting'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Catsdowgraph from '../components/Catsdowgraph'

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
    py-5
`


const project = () => {
  return (
    <Container id="project">
        <NavBar />
            <Catsdowgraph />
            
        <Footer />
    </Container>
  )
}

export default project