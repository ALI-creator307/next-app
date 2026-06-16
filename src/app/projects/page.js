'use client'
import { useState } from 'react'
import ProjectCard from '@/components/project/ProjectCard'
import ProjectsFilter from '@/components/project/ProjectsFilter'

const projects = [
    {
        title: 'DevKit Dashboard',
        desc: 'A full-featured admin dashboard with analytics, user management, and dark mode support.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        tags: [
            { label: 'Next.js', color: 'bg-sky-950 text-sky-400 border-sky-800' },
            { label: 'Tailwind', color: 'bg-indigo-950 text-indigo-400 border-indigo-800' },
        ],
        date: 'Jan 2024',
        category: 'Next.js',
    },
    {
        title: 'REST API Boilerplate',
        desc: 'Production-ready Express.js API with auth, rate limiting, and database integration.',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
        tags: [
            { label: 'Node.js', color: 'bg-green-950 text-green-400 border-green-800' },
            { label: 'Express', color: 'bg-sky-950 text-sky-400 border-sky-800' },
        ],
        date: 'Mar 2024',
        category: 'Node.js',
    },
    {
        title: 'Analytics Visualizer',
        desc: 'Interactive data visualization tool with real-time charts, filters, and export options.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80',
        tags: [
            { label: 'React', color: 'bg-indigo-950 text-indigo-400 border-indigo-800' },
            { label: 'D3.js', color: 'bg-orange-950 text-orange-400 border-orange-800' },
        ],
        date: 'Feb 2024',
        category: 'React',
    },
    {
        title: 'Code Snippet Manager',
        desc: 'Save and organize code snippets with syntax highlighting and tags.',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80',
        tags: [
            { label: 'Node.js', color: 'bg-green-950 text-green-400 border-green-800' },
            { label: 'MongoDB', color: 'bg-indigo-950 text-indigo-400 border-indigo-800' },
        ],
        date: 'Apr 2024',
        category: 'Node.js',
    },
    {
        title: 'Portfolio Template',
        desc: 'Minimal developer portfolio with dark mode, animations, and responsive layout.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
        tags: [
            { label: 'UI/UX', color: 'bg-orange-950 text-orange-400 border-orange-800' },
            { label: 'Figma', color: 'bg-indigo-950 text-indigo-400 border-indigo-800' },
        ],
        date: 'May 2024',
        category: 'UI/UX',
    },
    {
        title: 'SaaS Starter Kit',
        desc: 'Complete SaaS boilerplate with auth, payments, and subscription management.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        tags: [
            { label: 'Next.js', color: 'bg-sky-950 text-sky-400 border-sky-800' },
            { label: 'Stripe', color: 'bg-green-950 text-green-400 border-green-800' },
        ],
        date: 'Jun 2024',
        category: 'Next.js',
    },
]

export default function ProjectsPage() {
    const [filtered, setFiltered] = useState(projects)

    function handleFilter(category) {
        if (category === 'All') {
            setFiltered(projects)
        } else {
            setFiltered(projects.filter((p) => p.category === category))
        }
    }

    return (
        <section className="bg-slate-950 min-h-screen px-6 md:px-12 py-10">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-slate-100 tracking-tight mb-2">
                    Projects
                </h1>
                <p className="text-slate-500 text-sm">
                    A collection of work — web apps, tools, and experiments.
                </p>
            </div>

            {/* Filter Buttons */}
            <ProjectsFilter onFilter={handleFilter} />

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {filtered.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>

        </section>
    )
}