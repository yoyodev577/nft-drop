import React from 'react'
import tw from "tailwind-styled-components"


const Container = tw.div`
  flex
  justify-center
  my-5
`
const FooterContainer = tw.div`
  max-w-screen-lg
  w-full

`


const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        A limited NFT collection where the token itself doubles as your membership to join cat servant's club. <br />Join Us
      </FooterContainer>

    </Container>
  )
}

export default Footer