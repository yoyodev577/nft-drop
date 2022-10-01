import React from 'react';
import tw from "tailwind-styled-components";

const Container = tw.div`
    max-w-screen
    flex
    flex-col
    items-center
`
const TitleContainer = tw.div`
    flex
`

const Title = tw.div`
    uppercase
    text-1xl
    text-white
    italic
    font-bold
    mt-3
`

const FilledButton = tw.button`
    flex
    py-3
    bg-black
    border-2
    text-white
    items-center
    hover:bg-white 
    hover:text-black font-bold py-2 px-4 rounded uppercase

`

export const Opensea = () => {

    const viewOpenSea = () =>{
        const url = 'https://opensea.io/catservantsclub';
        window.open(url,"_blank");
    }

  return (
    <Container>
        <TitleContainer>
            <Title></Title>
        </TitleContainer>
        <FilledButton onClick={viewOpenSea}>View In Opensea</FilledButton>
    </Container>

  )
}
