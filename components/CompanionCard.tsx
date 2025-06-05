import React from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react';
interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    duration: number;
    subject: string;
    color: string;
}
const CompanionCard = (props: CompanionCardProps) => {
    return (
        <article className='companion-card' style={{ backgroundColor: props.color }}>
            <div className='flex justify-between items-center'>
                <div className='subject-badge'>{props.subject}</div>
                <button className='companion-bookmark'>
                    <Image src="/icons/bookmark.svg"
                        alt='bookmark'
                        width={12.5}
                        height={15} />
                </button>

            </div>
            <h2 className='text-2xl font-bold'>{props.name}</h2>
            <p className='text-sm'>{props.topic}</p>
            <div className='flex items-center gap-2'>
                <Image src='icons/clock.svg'
                    alt='duration'
                    width={16} height={16}
                    className=''
                />
                <p className='texsm'>{props.duration} min</p>
            </div>
            <Link
                href={`/companion/${props.id}`}
                className='w-full'>
                    <button className='btn-primary'>
                        Launch Lesson
                    </button>
                </Link>
        </article>
    )
}

export default CompanionCard
