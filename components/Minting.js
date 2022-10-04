import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import { useAddress, useDisconnect, useMetamask, useEditionDrop, useNFTDrop, ChainId } from "@thirdweb-dev/react";
import ReactLoading from 'react-loading';


const Container = tw.div`
    max-w-screen
    z-50
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

const Mint =tw.div`
    max-w-screen
    flex
    flex-col
    items-center
    bg-black

`

const ButtonContainer = tw.div`
    flex
    mt-2
    gap-4
`
const FilledButton = tw.button`
    flex
    py-3
    justify-center
    items-center
    flex-1
    bg-black
    border-2
    text-white

    hover:bg-white 
    hover:text-black font-bold py-2 px-4 rounded uppercase

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

    const contract = useNFTDrop("0x07F4cca5753076456926D0FC74B1F1c415641C54");
    const tokenId =0;
    const quantity = 1;

    
    console.log(address)

    const mint = async () => {
        if(contract && address){

            try{
            setInProgress(true);
            const data = await contract.claimTo(address,quantity);
            const receipt = tx.receipt;
            tokenId = tx.id;
            const claimedNFT = await tx.data();
            setInProgress(false);
            setCompleted(true);
            }
            catch(error){
                resetMinting();
            }
        }
    }

    const viewOpenSea = () =>{
        const contractAddress ="0x07F4cca5753076456926D0FC74B1F1c415641C54";
        const chain ="mumbai";
        const url=`https://testnets.opensea.io/assets/${chain}/${contractAddress}/${tokenId}`;
        window.open(url,"_blank");
    }

    const viewOwnedNFT = async () => {
        
        const nfts = await contract.getOwned(address);
        console.log(nfts);
    }


    const resetMinting = () =>{
        setInProgress(false);
        setCompleted(false);
        disconnectWithMetamask();
    }

    // update when it changes
    useEffect(()=> {
        const getTotal = async() => {
            if(contract){
                const total = await contract.totalClaimedSupply();
                console.log(total.toNumber());
                setTotalSupply(total.toNumber());
            }
        }
        getTotal();
    },[contract])


  return (
    <Container>
        <Mint>
            <TitleContainer>
                <Title>Mint Now</Title>
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

                    <FilledButton onClick={viewOpenSea}>
                            View Opensea
                        </FilledButton>
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