import Image from 'next/image'

export default function ProjectCard({ title, desc, tags, date, image }) {
    return (
        <div className="break-inside-avoid mb-4 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">

            {/* Image */}
            {image && (
                <div className="relative w-full h-48">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Tags */}
            <div className="p-4 pb-0 flex gap-2 flex-wrap">
                {tags.map((tag) => (
                    <span
                        key={tag.label}
                        className={`text-xs px-2 py-0.5 rounded border font-medium ${tag.color}`}
                    >
                        {tag.label}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-slate-200 text-sm font-medium mb-1">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-800">
                    <span className="text-slate-600 text-xs">{date}</span>
                    <a href="#" className="text-sky-400 text-xs hover:underline">View →</a>
                </div>
            </div>

        </div>
    )
}