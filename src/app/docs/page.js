import Sidebar from '@/components/docs/Sidebar'
import DocContent from '@/components/docs/DocContent'

export default function DocsPage() {
    return (
        <div className="flex bg-slate-950 min-h-screen">
            <Sidebar />
            <DocContent />
        </div>
    )
}