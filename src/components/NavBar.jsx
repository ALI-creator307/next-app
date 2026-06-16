'use client'
import { useState } from "react"
import Link from "next/link"
import React from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-slate-900 px-6 h-16 flex items-center justify-between relative">
            {/* Logo */}
            <div className="text-sky-400 text-lg font-medium">
                Dev<span className="text-white">Kit</span>
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-2 list-none">
                <li><Link href={"/"} className="text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm">Home</Link></li>
                <li><Link href={"/docs"} className="text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm">Docs</Link></li>
                <li><Link href={"/projects"} className="text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm">Projects</Link></li>
                <li><Link href={"/contact"} className="text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm">Contact</Link></li>
            </ul>

            {/* CTA button */}
            <Link
                href="/contact"
                className="hidden md:block bg-sky-400 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
                Get Started
            </Link>

            {/* Mobile menu button */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block w-5 h-0.5 bg-slate-400 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-slate-400 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-slate-400 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu — hamburger click pe khulega */}
            {isOpen && (
                <div className="absolute top-16 left-[50%] right-0 bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-2 items-center md:hidden z-50">
                    <Link href="/" className="text-slate-400 hover:text-white px-3 py-2.5 rounded-lg block">Home</Link>
                    <Link href="/docs" className="text-slate-400 hover:text-white px-3 py-2.5 rounded-lg block">Docs</Link>
                    <Link href="/projects" className="text-slate-400 hover:text-white px-3 py-2.5 rounded-lg block">Projects</Link>
                    <Link href="/contact" className="text-slate-400 hover:text-white px-3 py-2.5 rounded-lg block">Contact</Link>
                    <button className="mt-2 bg-sky-400 text-slate-900 py-2.5 rounded-lg font-medium w-full">
                        Get Started
                    </button>
                </div>
            )}
        </nav>

    )
}
