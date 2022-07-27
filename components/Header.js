import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image'
import Logo from '../assets/logo.png'

const Container = tw.div`
    flex
    justify-center
`

const HeaderContainer = tw.div``

const Header = () => {
  return (
    <Container>
        <HeaderContainer>
            <Image
                width={150}
                height={150}
                src={Logo}
                alt="Logo"
            />
        </HeaderContainer>
    </Container>
  )
}

export default Header