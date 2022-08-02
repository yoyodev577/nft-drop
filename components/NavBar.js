import React from 'react'
import Image from 'next/dist/client/image'
import tw from 'tailwind-styled-components'
import Header from './Header'
import Link from 'next/link'


import Logo from '../assets/logo.png'

const Container = tw.div`
    flex
    justify-between
    p-3
`

const IconContainer = tw.div`
    
`

const NavContainer = tw.div`
    p-3
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
            <Image
                width={150}
                height={150}
                src={Logo}
                alt="logo"
            />
        </IconContainer>
        <NavContainer>

            <Link href='#about' scroll={true}>
                <a>
                    About
                </a>
            </Link>

            <Link href='#roadmap' scroll={true}>
                <a>
                    RoadMap
                </a>
            </Link>

            <Link href='#team' scroll={true}>
                <a>
                    Team
                </a>
            </Link>

            <Link href='#faq' scroll={true}>
                <a>
                    FAQ
                </a>
            </Link>

        </NavContainer>

    </Container>

  )
};

export default NavBar