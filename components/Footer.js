import React from 'react';
import tw from "tailwind-styled-components";
import Clients from './Clients';


const Container = tw.div`
  flex
  justify-center
  my-5
`
const FooterContainer = tw.div`
  flex
  max-w-screen-lg
  w-full
  justify-center
`

// A limited NFT collection where the token itself doubles as your membership to join cat servant's club. <br />Join Us

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
      </FooterContainer>

    </Container>
  )
}

export default Footer