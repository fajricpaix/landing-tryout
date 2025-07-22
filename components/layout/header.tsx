import CardComponents from "@/components/content/card"
import Image from "next/image"
import Link from "next/link"


export default function Header() {
    return <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center gap-x-2">
            <Image
                src="/logo.webp"
                width='0'
                height='0'
                sizes='100vw'
                className='w-10 h-auto'
                alt="CPNS Preparation"
            />
            <span className="text-sm font-semibold leading-5">CANDRAMAWA<br />STUDIO</span>
        </Link>
    </header>
}
