"use client"
import { useState } from "react"

const socials = [
    { label: "GitHub", short: "Github", href: "https://github.com" },
    { label: "LinkedIn", short: "Linkedin", href: "https://linkedin.com" },
    { label: "Twitter", short: "Twiter", href: "https://twitter.com" },
]

const infoCards = [
    {
        title: "Email us",
        desc: "For general inquiries and support",
        value: "hello@devkit.com",
        href: "mailto:hello@devkit.com",
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
        title: "Documentation",
        desc: "Find answers in our detailed docs",
        value: "Browse docs →",
        href: "/docs",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
        title: "Response time",
        desc: "We typically respond within",
        value: "24 hours",
        href: null,
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
]

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [sent, setSent] = useState(false)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSent(true)
    }

    function handleReset() {
        setSent(false)
        setForm({ name: "", email: "", message: "" })
    }

    return (
        <section className="bg-slate-950 min-h-screen py-16 px-6 md:px-12">
            <div className="max-w-5xl mx-auto mb-12">
                <p className="text-sky-400 text-xs uppercase tracking-widest mb-2">Contact</p>
                <h1 className="text-3xl font-semibold text-slate-100 tracking-tight mb-3">Get in touch</h1>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                    Have a question about DevKit, want to report a bug, or just want to say hi? We will get
                    back to you as soon as possible.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                    {sent ? (
                        <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                            <div className="w-14 h-14 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center mb-5">
                                <svg
                                    className="w-6 h-6 text-sky-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-slate-100 text-lg font-medium mb-2">Message sent!</h3>
                            <p className="text-slate-500 text-sm mb-8 max-w-xs">
                                Thanks for reaching out. We will get back to you within 24 hours.
                            </p>
                            <button
                                onClick={handleReset}
                                className="text-sky-400 text-sm border border-sky-800 px-5 py-2 rounded-lg hover:bg-sky-950 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-slate-200 text-base font-medium mb-6">Send a message</h2>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs text-slate-500 mb-1.5">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ali Ahmed"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-slate-200 text-sm placeholder-slate-700 focus:outline-none focus:border-sky-400 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs text-slate-500 mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="ali@example.com"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-slate-200 text-sm placeholder-slate-700 focus:outline-none focus:border-sky-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-slate-500 mb-1.5">Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us how we can help..."
                                        rows={6}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-slate-200 text-sm placeholder-slate-700 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-sky-400 text-slate-900 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Send Message
                                </button>
                            </form>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    {infoCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4 items-start"
                        >
                            <div className="w-9 h-9 min-w-9 bg-sky-950 border border-sky-800 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                                </svg>
                            </div>
                            <div>
                                <p className="text-slate-200 text-sm font-medium mb-0.5">{card.title}</p>
                                <p className="text-slate-500 text-xs mb-1">{card.desc}</p>
                                {card.href ? (
                                    <a href={card.href} className="text-sky-400 text-sm hover:underline">
                                        {card.value}
                                    </a>
                                ) : (
                                    <p className="text-sky-400 text-sm font-medium">{card.value}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <p className="text-slate-400 text-sm font-medium mb-4">Follow us</p>
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.label}
                                    className="flex-1 py-2 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 text-xs font-medium hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/40 transition-colors"
                                >
                                    {s.short}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}