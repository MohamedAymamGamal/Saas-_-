
import CompanionForm from '@/components/CompanionForm'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server'
import { newCompanionPermissions } from '@/lib/actions/companion.actions'
import { redirect } from 'next/navigation'
const page = async () => {
    const { userId } = await auth();
    if (!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();
    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">

            {canCreateCompanion ? (<article className="w-full gap-4 flex flex-col">
                <h1>Companion Builder</h1>

                <CompanionForm />
            </article>) : (

                <article className='companion-limit'>
                    <Image src='/images/limit.svg' alt='limit' width={360} height={360} />

                    <div className='cta-badge'>
                        upgrade your plan
                    </div>
                    <h1>you have reached your companion limit</h1>
                    <p>upgrade your plan to add more companions</p>
                    <Link href='/subscription' className='btn-primary'>upgrade now</Link>
                </article>
            )}

        </main>
    )
}

export default page
