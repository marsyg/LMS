
import CallToAction from "./_component/call-to-action"
import DashboardSnippet from "./_component/dashboard-snippets"

export default function Home() {
    return (
        <main className="flex min-h-screen md:px-10 flex-col items-center justify-between py-20">
            <div>
                <CallToAction></CallToAction>
                <DashboardSnippet></DashboardSnippet>
            </div>
        </main>
    )
}
