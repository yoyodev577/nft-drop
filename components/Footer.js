import React from 'react';
import tw from "tailwind-styled-components";
import Image from 'next/image';
import Link from 'next/link';
import Clients from './Clients';
import Teams from '../pages/team';

import Discord from '../assets/discord.png'
import Twitter from '../assets/Twitter.png'

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
const CommunityContainer = tw.div`
    flex
    space-x-3

`


// A limited NFT collection where the token itself doubles as your membership to join cat servant's club. <br />Join Us

const Footer = () => {
  return (
    <Container>
      <FooterContainer>

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
      </FooterContainer>

    </Container>
  )
}

export default Footer