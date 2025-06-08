
'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery } from "@jsmastery/utils";
const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("topic") || "";
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        if(searchQuery){
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "topic",
                value: searchQuery
            });
            router.push(newUrl,{scroll: false});

        }
    }, [pathname, searchQuery, searchParams, router]);
    return (
        <div className='relative border border-black gap-2 px-2 py-1 h-fit rounded-lg items-center flex'
        >
            <Image
                src="/icons/search.svg"
                alt="search"
                width={15}
                height={15}
            />
            <input
                type="text"
                placeholder="Search by topic"
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        router.push(`${pathname}?topic=${searchQuery}`);
                    }
                }}
            />
            
        </div>
    )
}

export default SearchInput
