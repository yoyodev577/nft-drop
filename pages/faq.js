import React from 'react'
import tw from "tailwind-styled-components"

const Container = tw.div``

const Title = tw.h2`
  text-white
  font-bold
  text-3xl

`

const FAQ = () => {
  return (
    <Container id="faq">
      <Title>
        FAQ
        I have lots of questions
      </Title>
    </Container>
  )
}

export default FAQ