import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import { Button } from '@/components/ui/button'
import React from 'react'
import CTA from '@/components/CTA'
const Page = () => {
  return (
    <main className='text-2l  '>
      <h1 className='text-3xl font-bold'>
        Popular Compaions
      </h1>
      <section 
      className='home-section '
      >
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color="#E5D0FF"
        />
        <CompanionCard
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color="#E7D0FF"

        />
         <CompanionCard
          id="3"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color="#E5D0F0"

        />
       


      </section>
      <section className='home-section'>
        <CompanionsList title={''} />
        <CTA />
      </section>
    </main>
  )
}

export default Page