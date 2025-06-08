import CompanionCard from '@/components/CompanionCard'
import { getAllCompanions } from '@/lib/actions/companion.actions'
import React from 'react'
import {getSubjectColor} from '@/lib/utils'
import { Search } from 'lucide-react'
import SearchInput from '@/components/SearchInput'
import SubjectFilter from '@/components/SubjectFilter'
const CompanionsLibrary = async ({searchParams}:SearchParams) => {
 const filters = await searchParams
 const topic = filters.topic ? filters.topic : ""
 const subject = filters.subject ? filters.subject : ""
 const companions = await getAllCompanions({topic, subject})


  return (

    <main >
        <section className='flex justify-between gap-4 max-sm:flex-col'>
          <h1>Companions Library</h1>
          <div className='flex gap-4 '>
            <SearchInput/>
            <SubjectFilter/>
          
          </div>
        </section>
        <section className='companions-grid'>
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))}
        </section> 
    </main>
  )
}

export default CompanionsLibrary
