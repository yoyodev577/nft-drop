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
    justify-between
    p-2
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
const CommunityContainer = tw.div`
    flex
    space-x-3

`



const NavBar = () => {

    return (
    <Container>
        <IconContainer>
            <Image
                width={50}
                height={50}
                src={Logo}
                alt="logo"
            />
        </IconContainer>
        <NavContainer>

            <Link href="/">
                <a>
                    Intro
                </a>
            </Link> 


            <Link href="home#project">
                <a>
                    Project
                </a>
            </Link> 

            <Link href='home#roadmap' scroll={true}>
                <a>
                    RoadMap
                </a>
            </Link>

            <Link href='home#team' scroll={true}>
                <a>
                    Team
                </a>
            </Link>

            <Link href='home#faq' scroll={true}>
                <a>
                    FAQ
                </a>
            </Link>          
        </NavContainer>

        <CommunityContainer>

            <Link href="https://discord.gg/qBRDFxcX">
                <a>
                    <Image
                    width={40}
                    height={48}
                    src={Discord}
                    alt="Discord"
                    />
                </a>
            </Link>

            <Link href="https://twitter.com/catboss21397820">
                <a>
                    <Image
                    width={50}
                    height={40}
                    src={Twitter}
                    alt="Twitter"
                    />
                </a>

            </Link>
        </CommunityContainer>

    </Container>

  )
};

export default NavBar