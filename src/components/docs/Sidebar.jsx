'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarLinks = [
    {
        title: 'Getting Started',
        links: [
            { label: 'Introduction', href: '/docs' },
            { label: 'Installation', href: '/docs/installation' },
            { label: 'Project Structure', href: '/docs/structure' }
        ]
    },
    {
        title: 'Components',
        links: [
            { label: 'Navbar', href: '/docs/navbar' },
            { label: 'Hero Section', href: '/docs/hero' },
            { label: 'Footer', href: '/docs/footer' }
        ]
    },
    {
        title: 'API Reference',
        links: [
            { label: 'Authentication', href: '/docs/auth' },
            { label: 'Endpoints', href: '/docs/endpoints' }
        ]
    }
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-60 min-w-60 border-r border-slate-800 h-[calc(100vh-64px)] overflow-y-auto py-6 sticky top-16 hidden md:block">
            {sidebarLinks.map((group) => (
                <div key={group.title} className="mb-6">
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest px-4 mb-2">
                        {group.title}
                    </p>
                    {group.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-4 py-1.5 text-sm border-l-2 transition-colors ${pathname === link.href ? 'text-sky-400 border-sky-400 bg-sky-950/50' : 'text-slate-500 border-transparent hover:text-slate-200 hover:bg-slate-800/50'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            ))}
        </aside>
    )
}