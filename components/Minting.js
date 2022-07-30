import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import { useAddress, useDisconnect, useMetamask, useEditionDrop } from "@thirdweb-dev/react";
import ReactLoading from 'react-loading';


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
    lg:w-1/3
    md:w-1/2
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
    flex
    justify-center
    items-center
    flex-1
    bg-[#bfc500] hover:bg-white text-black font-bold py-2 px-4 rounded uppercase

`
//copy and paste other properties
const UnfilledButton = tw(FilledButton)`
    bg-black
    text-[#bfc500]
    border-2
    border-[#bfc500]
    hover:bg-[#bfc500]
    hover:text-black
`
const Count = tw.div`
    flex
    grow
    items-center
    justify-center

`

const Minting = () => {

    const [totalSupply,setTotalSupply] = useState(0);
    const [inProgress,setInProgress] = useState(false);
    const [completed, setCompleted] = useState(false);

    const connectWithMetamask = useMetamask();
    const disconnectWithMetamask = useDisconnect();
    const address = useAddress();
    const editionDrop = useEditionDrop("0x60690480862d2884593478259B716D600fA40068");
    
    console.log(address)

    const mint = async () => {
        if(editionDrop && address){

            try{
            setInProgress(true);
            const tx = await editionDrop.claimTo(address,0,1);
            setInProgress(false);
            setCompleted(true);
            }
            catch(error){
                console.log(error);
                resetMinting();
            }
        }
    }

    const viewOpenSea = () =>{
        const url="https://testnets.opensea.io/collection/testdemo-vcodftmlug";
        window.open(url,"_blank");
    }

    const resetMinting = () =>{
        setInProgress(false);
        setCompleted(false);
        disconnectWithMetamask();
    }
    // update when it changes
    useEffect(()=> {
        const getTotal = async() => {
            if(editionDrop){
                const total = await editionDrop.totalSupply(0);
                console.log(total.toNumber());
                setTotalSupply(total.toNumber());
            }
        }
        getTotal();
    },[editionDrop])


  return (
    <Container>
        <Mint>
            <TitleContainer>
                <Title>Welcome to <br /> Be  a Cat Servant</Title>
                <Count>
                {
                    address && totalSupply
                }

                </Count>
            </TitleContainer> 
        <ButtonContainer>
            {
                address? 
                <>
                    {
                        completed
                        ? <FilledButton onClick={viewOpenSea}>
                            View Opensea
                        </FilledButton>
                        :
                        <FilledButton 
                        disabled={inProgress}
                        onClick={mint}>
                            {
                                inProgress
                                ?<ReactLoading type='bubbles' color='black' height={64} />
                                :<>Mint</>
                            }
                        </FilledButton>
                    }
                
                    <UnfilledButton 
                        disabled={inProgress}
                        onClick={resetMinting}>
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