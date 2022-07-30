import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image'
import Logo from '../assets/logo.png'

const Container = tw.div`
    flex
    justify-center
`

const HeaderContainer = tw.div`
  mt-[10px]
`

const Header = () => {
  return (
    <Container>
        <HeaderContainer>
            <Image
                width={120}
                height={120}
                src={Logo}
                alt="Logo"
            />
        </HeaderContainer>
    </Container>
  )
}

export default Header