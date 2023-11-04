import { Card } from "@nextui-org/card";
import blackBG from "../assets/all/PNG/blackbg-prev.png";
import whiteBG from "../assets/all/PNG/whitebg-prev.png";

export default function Previews({ uploadedBG }) {
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-col gap-2 w-min p-4">

            <PreviewCell bgimage={uploadedBG} />

        </Card>
    )
}

const PreviewCell = ({ bgimage }) => {
    const placement = "absolute z-auto h-full w-full";
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="bg-white w-[430px] h-[500px]"
        >
            <img src={bgimage} className={placement}/>
            <img src={whiteBG} className={placement}/>
            <img src={blackBG} className={placement}/>
        </Card>
    )
}