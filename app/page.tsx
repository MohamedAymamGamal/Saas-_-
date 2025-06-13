import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import React from 'react'
import CTA from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
const Page =  async () => {
 
  const companions = await getAllCompanions({limit: 3});
  const recentSessionsCompanions = await getRecentSessions({limit: 3});
  return (
    <main className='text-2l  '>
      <h1 className='text-3xl font-bold'>
        Popular Compaions
      </h1>
      <section 
      className='home-section '
      >
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name}
            topic={companion.topic}
            duration={companion.duration}
            subject={companion.subject}
            color={getSubjectColor(companion.subject)} bookmarked={false}          />
        ))}
        
       
  


      </section>
      <section className='home-section'>
        <CompanionsList 
          title={'recently complelted sessions'}
          companions={recentSessionsCompanions}
          classNames='w-2/3 max:lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page