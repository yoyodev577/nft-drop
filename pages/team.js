import React from 'react'
import tw from "tailwind-styled-components"


const Container = tw.div``


const Title = tw.h2`
  text-white
`
const Team = () => {
  return (
    <Container id="team">
        <Title>
          Team :Yoyo
      </Title>
     </Container>
  )
}

export default Team