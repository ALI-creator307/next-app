'use client'
import { useState } from 'react'

const filters = ['All', 'Next.js', 'React', 'Node.js', 'UI/UX']

export default function ProjectsFilter({ onFilter }) {
    const [active, setActive] = useState('All')

    function handleClick(filter) {
        setActive(filter)
        onFilter(filter)
    }

    return (
        <div className="flex gap-2 flex-wrap mb-8">
            {filters.map((f) => (
                <button
                    key={f}
                    onClick={() => handleClick(f)}
                    className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${active === f
                            ? 'bg-sky-950 border-sky-400 text-sky-400'
                            : 'border-slate-800 text-slate-500 hover:border-sky-400 hover:text-sky-400'
                        }`}
                >
                    {f}
                </button>
            ))}
        </div>
    )
}