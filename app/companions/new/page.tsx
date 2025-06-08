
import CompanionForm from '@/components/CompanionForm'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils'
import { newCompanionPermissions } from '@/lib/actions/companion.actions'
const page  = async () => {
    const { userId } = await auth();
    if (!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();
  return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            
                <article className="w-full gap-4 flex flex-col">
                    <h1>Companion Builder</h1>

                    <CompanionForm />
                </article> 
            
        </main>
    )
}

export default page
