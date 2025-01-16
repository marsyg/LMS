import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const CallToAction = (props: Props) => {
    return (
        <div className="flex flex-col items-start md:items-center md:gap-y-0   ">
            <GradientText
                className="text-[35px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[80-px] "
                element="H1"
            >
                Bringing Communities <br className="md:hidden" /> Together
            </GradientText>
            <div className="flex w-full md:flex-row flex-col md:justify-center gap-5 md:mt-5 ">
                <Button
                    variant="outline"
                    className="rounded-xl bg-transparent test-base"
                >
                    Watch Demo
                </Button>
                <Link href="/sign-in">
                    <Button className="rounded-xl test-base flex gap-2 w-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default CallToAction
