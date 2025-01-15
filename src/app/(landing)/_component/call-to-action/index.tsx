import GradientText from "@/components/global/gradient-text"

type Props = {}

const CallToAction = (props: Props) => {
    return (
        <div className="flex flex-col items-start md:items-center md:gap-y-0   ">
            
            <GradientText className="text-[35px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[80-px] " element="H1">
                Bringing Communities <br className="md:hidden"/> Together
            </GradientText>
        </div>
    )
}
export default CallToAction
