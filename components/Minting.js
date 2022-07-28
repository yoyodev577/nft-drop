import React, { useEffect } from 'react';
import tw from "tailwind-styled-components";
import { useAddress, useDisconnect, useMetamask, useEditionDrop } from "@thirdweb-dev/react";


const Container = tw.div`
    max-w-screen-lg
    w-full
    z-50
`

const TitleContainer = tw.div`
    flex
`
const Title = tw.h2`
    uppercase
    text-3xl
    italic
    font-bold
    mt-3
`

const Mint =tw.div`
    max-w-screen-sm
    bg-black
    mt-[-200px]
    w-1/3
    flex
    flex-col
    pb-4
    pr-4
`

const ButtonContainer = tw.div`
    flex
    mt-2
    gap-4
`
const FilledButton = tw.button`
    flex-1
    bg-[#bfc500] hover:bg-white text-black font-bold py-2 px-4 rounded uppercase

`
//import properties
const UnfilledButton = tw(FilledButton)`
    bg-black
    text-[#bfc500]
    border-2
    border-[#bfc500]
    hover:bg-[#bfc500]
    hover:text-black
    h-15
`


const Minting = () => {

    const connectWithMetamask = useMetamask();
    const disconnectWithMetamask = useDisconnect();
    const address = useAddress();
    const editionDrop = useEditionDrop("0x60690480862d2884593478259B716D600fA40068");
    
    console.log(address)

    const mint = async () => {
        if(editionDrop && address){
            const tx = await editionDrop.claimTo(address,0,1);
            console.log(tx);
        }
    }

    // update when it changes
    useEffect(()=> {
        const getTotal = async() => {
            if(editionDrop){
                const total = await editionDrop.totalSupply(0);
                console.log(total.toNumber());
            }
        }
        getTotal();
    },[editionDrop])


  return (
    <Container>
        <Mint>
            <TitleContainer>
                <Title>Welcome to <br /> Be  a Cat Servant</Title>
            </TitleContainer> 
        <ButtonContainer>
            {
                address? 
                <>
                   <FilledButton onClick={mint} >
                        Mint
                    </FilledButton>
                
                    <UnfilledButton onClick={disconnectWithMetamask} >
                        Disconnect
                    </UnfilledButton>
                </>
                : <FilledButton onClick={connectWithMetamask} >
                    Connect Wallet
                </FilledButton>
            }
         
        </ButtonContainer>

        </Mint>

    </Container>
  )
}

export default Minting