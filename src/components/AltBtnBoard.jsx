import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function AltBtnBoard() {
    return (
        <Card
        radius="sm"
        shadow="sm"
        className="flex flex-col gap-2 w-min p-4 shrink-0"
    >
        <h1>Kontrol Paneli</h1>
        <Divider />
        </Card>
    )
}