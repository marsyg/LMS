`use client`
import dynamic from "next/dynamic"
import CallToAction from "./_component/call-to-action"
import DashboardSnippet from "./_component/dashboard-snippets"
const PricingSection = dynamic(
    () =>
        import("./_component/pricing/index").then(
            (component) => component.default,
        ),
    { ssr: true },
)
export default function Home() {
    return (
        <main className="flex min-h-screen md:px-10 flex-col items-center justify-between py-20">
            <div>
                <CallToAction></CallToAction>
                <DashboardSnippet></DashboardSnippet>
                <PricingSection></PricingSection>
            </div>
        </main>
    )
}
