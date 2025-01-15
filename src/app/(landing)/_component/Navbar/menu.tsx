"use client"
import { Card, CardContent } from "@/components/ui/card"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useNavigation } from "@/hooks/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"
interface Props {}
type MenuProps = {
    orientation: "mobile" | "dekstop"
}
const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case "dekstop":
            return (
                <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop-blur_safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl ">
                    <CardContent className="p-0 flex  gap-2">
                        {GROUPLE_CONSTANTS.landingPageMenu.map((MenuItem) => (
                            <Link
                                href={MenuItem.path}
                                {...(MenuItem.section && {})}
                                onClick={() => {
                                    onSetSection(MenuItem.path)
                                }}
                                key={MenuItem.id}
                                className={cn(
                                    "rounded-xl flex gap-2 py-2 px-4 items-center",
                                    section == MenuItem.path
                                        ? "bg-[#09090B]"
                                        : "",
                                )}
                            >
                                {MenuItem.icon}
                                {MenuItem.label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            )
        case "mobile":
            return (
                <div className="flex flex-col mt-10">
                    {GROUPLE_CONSTANTS.landingPageMenu.map((MenuItem) => (
                        <Link
                            href={MenuItem.path}
                            {...(MenuItem.section && {})}
                            onClick={() => {
                                onSetSection(MenuItem.path)
                            }}
                            key={MenuItem.id}
                            className={cn(
                                "rounded-xl flex gap-2 py-2 px-4 items-center",
                                section == MenuItem.path ? "bg-[#09090B]" : "",
                            )}
                        >
                            {MenuItem.icon}
                            {MenuItem.label}
                        </Link>
                    ))}
                </div>
            )
    }
}
export default Menu
