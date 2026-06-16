export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">

            <div className="absolute w-96 h-96 rounded-full bg-sky-500/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
                {/*                                          ↑ yahan text-center */}

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-sky-950 text-sky-400 border border-sky-800 px-3 py-1 rounded-full text-xs mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    New — v2.0 now available
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-semibold text-slate-100 leading-tight tracking-tight mb-4">
                    Build your Next.js project{' '}
                    <span className="text-sky-400">faster than ever</span>
                </h1>

                {/* Description */}
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
                    Build modern web apps with DevKit — ready-made components,
                    clean code, and full documentation included.
                </p>

                {/* Buttons */}
                <div className="flex gap-3 justify-center flex-wrap">
                    <button className="bg-sky-400 text-slate-900 px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        Get Started Free
                    </button>
                    <button className="text-slate-400 px-6 py-2.5 rounded-lg text-sm border border-slate-800 hover:border-sky-400 hover:text-slate-100 transition-colors">
                        View Live Demo
                    </button>
                </div>

                {/* Stats */}
                <div className="flex gap-8 justify-center mt-12 flex-wrap">
                    <div className="text-center">
                        <div className="text-slate-100 text-2xl font-semibold">10k+</div>
                        <div className="text-slate-500 text-xs mt-1">Developers</div>
                    </div>
                    <div className="w-px bg-slate-800" />
                    <div className="text-center">
                        <div className="text-slate-100 text-2xl font-semibold">50+</div>
                        <div className="text-slate-500 text-xs mt-1">Components</div>
                    </div>
                    <div className="w-px bg-slate-800" />
                    <div className="text-center">
                        <div className="text-slate-100 text-2xl font-semibold">4.9★</div>
                        <div className="text-slate-500 text-xs mt-1">Rating</div>
                    </div>
                </div>

            </div>
        </section>
    )
}