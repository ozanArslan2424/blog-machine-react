import { Card } from "@nextui-org/card";

export default function Previews() {
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-col gap-2 w-min p-4">

            <PreviewCell />

        </Card>
    )
}

const PreviewCell = () => {
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="bg-white w-[430px] h-[500px]"
        >

        </Card>
    )
}