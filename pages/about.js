import React from 'react'
import tw from 'tailwind-styled-components'
import AboutContent from '../components/AboutContent'

const Container = tw.div`

`

export default function About ()  {
  return (
    <Container id="about">
      <AboutContent />
    </Container>
  )
}
