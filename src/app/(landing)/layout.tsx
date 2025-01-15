type Props = {}
import { LandingPageNavbar } from "./_component/Navbar"
const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col container  relative">
            <LandingPageNavbar></LandingPageNavbar>
            {children}
        </div>
    )
}

export default LandingPageLayout
