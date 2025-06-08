import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CTA = () => {
  return (
    <section className='cta-section '>
      <div className='cat-badge'> Start lreaning on your way.</div>
      <h2 className='text-3xl font-bold'>
        build and Personalize lreaning Companion

      </h2>
      <p>Pick a name, subject, voice and style and start learning
        through voice conversations that feel natural and fun

      </p>
      <Image
        src="/images/cta.svg"
        alt='cta'
        width={362}
        height={232}
      />
      <button className='btn-primary'>
        <Image
          src="/icons/plus.svg"
          alt='arrow-right'
          width={12}
          height={12}
        />
        <Link href='/companions/new' >
          Build a New Companion
        
        </Link>

      </button>
    </section>
  )
}

export default CTA
