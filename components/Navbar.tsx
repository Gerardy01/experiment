import Link from "next/link"

interface NavItem {
    text : string;
    url : string;
}

const navItem : NavItem[] = [
    {
        text: 'Home',
        url: '/'
    },
    {
        text: 'Scroll 2',
        url: '/scroll-2'
    },
    {
        text: 'Scroll 3',
        url: '/scroll-3'
    },
]

export default function Navbar() {
    return (
        <div className="w-screen py-4 fixed z-[100]">
            {navItem.map((e : NavItem, i : number) => {
                return (
                    <Link href={e.url} key={i} className="px-4">
                        {e.text}
                    </Link>
                )
            })}
        </div>
    )
}