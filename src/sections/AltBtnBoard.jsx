/* eslint-disable react/prop-types */
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import PrintButton from "../components/PrintButton";
import EnterTextButton from "../components/EnterTextButton";

export default function AltBtnBoard() {
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-col gap-2 w-max h-min p-4 shrink-0"
        >
            <h1>Kontrol Paneli</h1>
            <Divider />

            <CustomInput fileType="Oku" />
            <CustomInput fileType="Dinle" />
            <CustomInput fileType="İzle" />
            <EnterTextButton />
            <Divider />
            <PrintButton />
        </Card>
    )
}

const CustomInput = ({ fileType }) => {
    return (
        <div className="flex gap-2">
            <Button
                className="w-1/3"
                variant="flat"
                color="secondary"
                radius="sm"
            >
                <FontAwesomeIcon icon={faUpload} />
                {fileType} Görsel
            </Button>

            <Input
                className="w-2/3"
                type="text"
                variant="bordered"
                radius="sm"
                placeholder={fileType + " Başlık"}
            />

        </div>
    )
}