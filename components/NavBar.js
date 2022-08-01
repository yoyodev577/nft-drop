import React from 'react'
import Image from 'next/dist/client/image'
import tw from 'tailwind-styled-components'
import Header from './Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import About from '../pages/About'
import styled from 'styled-components'

import Logo from '../assets/logo.png'

const Container = tw.div`
    flex
    justify-between
    p-3
`

const IconContainer = tw.div`
    
`

const NavContainer = tw.div`
    flex
    space-x-5

    text-3xl
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

        </NavContainer>

    </Container>

  )
};

export default NavBar