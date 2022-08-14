import React from 'react'
import Image from 'next/dist/client/image'
import tw from 'tailwind-styled-components'
import Header from './Header'
import Link from 'next/link'
import Logo from '../assets/logo.png'

import Discord from '../assets/discord.png'
import Twitter from '../assets/Twitter.png'

const Container = tw.div`
    flex
    min-w-fit
    justify-center
    p-3
    py-5
`

const IconContainer = tw.div`
    flex
    justify-start
`

const NavContainer = tw.div`
    p-1
    flex
    space-x-5
    font-bold
    text-2xl
    text-white
    uppercase
`



const NavBar = () => {

    return (
    <Container>
        <IconContainer>
        </IconContainer>
        <NavContainer>

            <Link href="/">
                <a>
                    Intro
                </a>
            </Link> 


            <Link href="/home">
                <a>
                    Home
                </a>
            </Link>

            <Link href="/project">
                <a>
                    Project
                </a>
            </Link> 

            <Link href='/roadmap' scroll={true}>
                <a>
                    RoadMap
                </a>
            </Link>
        
        </NavContainer>


    </Container>

  )
};

export default NavBar