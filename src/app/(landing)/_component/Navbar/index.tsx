import { GlassSheet } from "@/components/global/glass"
import { Button } from "@/components/ui/button"
import { LogOut, MenuIcon } from "lucide-react"
import Link from "next/link"
import Menu from "./menu"
type Props = {}

export const LandingPageNavbar = (props: Props) => {
    return (
        <div className="w-full flex  justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-2xl">Grouple</p>
            <Menu orientation="dekstop"></Menu>
            <div className="flex gap-2">
                <Link href="/sign-in">
                    <Button
                        variant="outline"
                        className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray "
                    >
                        <LogOut></LogOut>
                        Login
                    </Button>
                </Link>
                <GlassSheet
                    triggerClass="lg:hidden"
                    trigger={
                        <Button
                            variant="ghost"
                            className="hover:bg-transparent"
                        >
                            <MenuIcon size={30}></MenuIcon>
                        </Button>
                    }
                >
                    <Menu orientation="mobile"></Menu>
                </GlassSheet>
            </div>
        </div>
    )
}
