import React from 'react'
import tw from 'tailwind-styled-components'

const Container = tw.div`
  flex

`

const Title = tw.div`
  flex
  justify-center
  text-white
  text-3xl
`
const Content = tw.div`
  text-white
  text-3xl
`


const About = () => {
  return (
    <Container id="about">
       <Title>About Us avd</Title>
       <Content>Catshadow is a collection a 1000</Content> 
    </Container>
  )
}

export default About