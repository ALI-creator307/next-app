export default function DocContent() {
    return (
        <main className="
      flex-1 max-w-3xl
      px-4 md:px-12
      py-6 md:py-10
      w-full
    ">

            <p className="text-xs text-slate-500 mb-6">
                Docs / Getting Started / <span className="text-sky-400">Installation</span>
            </p>

            <h1 className="text-2xl md:text-3xl font-semibold text-slate-100 tracking-tight mb-2">
                Installation
            </h1>
            <p className="text-slate-500 text-sm md:text-base mb-8">
                Get DevKit up and running in your Next.js project in under 5 minutes.
            </p>

            <hr className="border-slate-800 mb-8" />

            <h2 className="text-lg font-medium text-slate-200 mb-3">Prerequisites</h2>
            <p className="text-slate-500 text-sm mb-4">
                Make sure you have the following installed before getting started:
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-8 overflow-x-auto">
                <pre className="text-sky-300 text-sm font-mono leading-relaxed">
                    {`# Check versions
node --version   # v18 or higher
npm --version    # v9 or higher`}
                </pre>
            </div>

            <hr className="border-slate-800 mb-8" />

            <h2 className="text-lg font-medium text-slate-200 mb-6">Quick Setup</h2>

            {/* Step 1 */}
            <div className="flex gap-4 mb-4">
                <div className="w-6 h-6 min-w-6 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 text-xs font-medium">
                    1
                </div>
                <div>
                    <h3 className="text-sm font-medium text-slate-200 mb-1">
                        Create a new Next.js project
                    </h3>
                    <p className="text-slate-500 text-sm">Run the following command in your terminal:</p>
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6 ml-10 overflow-x-auto">
                <pre className="text-sky-300 text-sm font-mono">npx create-next-app@latest my-app</pre>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 mb-4">
                <div className="w-6 h-6 min-w-6 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 text-xs font-medium">
                    2
                </div>
                <div>
                    <h3 className="text-sm font-medium text-slate-200 mb-1">Install dependencies</h3>
                    <p className="text-slate-500 text-sm">Navigate into your project and install packages:</p>
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6 ml-10 overflow-x-auto">
                <pre className="text-sky-300 text-sm font-mono">{`cd my-app\nnpm install`}</pre>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 mb-4">
                <div className="w-6 h-6 min-w-6 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 text-xs font-medium">
                    3
                </div>
                <div>
                    <h3 className="text-sm font-medium text-slate-200 mb-1">
                        Start development server
                        <span className="ml-2 text-xs bg-sky-950 text-sky-400 border border-sky-800 px-2 py-0.5 rounded">
                            localhost:3000
                        </span>
                    </h3>
                    <p className="text-slate-500 text-sm">Your app will be live at http://localhost:3000</p>
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-8 ml-10 overflow-x-auto">
                <pre className="text-sky-300 text-sm font-mono">npm run dev</pre>
            </div>

            <button className="text-sm text-slate-500 border border-slate-800 px-5 py-2.5 rounded-lg hover:border-sky-400 hover:text-sky-400 transition-colors">
                Next: Project Structure →
            </button>

        </main>
    )
}   