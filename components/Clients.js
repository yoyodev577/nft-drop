import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image';
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";
import clients5 from "../assets/clients5.png";



const Container = tw.div` 
   p-2 
`

const ClientsContainer =tw.div`
    grid
    grid-cols-5
    space-x-3

`
const Client = tw.div`

`

const Clients = () => {

    const data=[clients1,clients2,clients3,clients4,clients5];


  return (
    <Container>
        <ClientsContainer>
            {data.map((client,index)=> (
                <div className='Client' key={index}>
                    <Image 
                    src={client} 
                    alt="client"
                    />
                </div>
            ))}
         
        </ClientsContainer>

    </Container>
  )
}

export default Clients