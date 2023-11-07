/* eslint-disable react/prop-types */
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";

export default function AltBtnBoard({onOkuBaslikChange, onDinleBaslikChange, onIzleBaslikChange, onBonusBaslikChange}) {
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-col gap-2 w-max h-min p-4 shrink-0"
        >
            <h1>Kontrol Paneli</h1>
            <Divider />

            <div className="flex gap-2">
                <Button className="flex flex-col h-24 w-24" variant="flat" color="secondary" radius="sm">
                    <FontAwesomeIcon icon={faUpload} />
                    Oku Görsel
                </Button>

                <Button className="flex flex-col h-24 w-24" variant="flat" color="secondary" radius="sm">
                    <FontAwesomeIcon icon={faUpload} />
                    Dinle Görsel
                </Button>

                <Button className="flex flex-col h-24 w-24" variant="flat" color="secondary" radius="sm">
                    <FontAwesomeIcon icon={faUpload} />
                    İzle Görsel
                </Button>
            </div>
            <Divider />

            <Input type="text" variant="bordered" radius="sm"
            onValueChange={onOkuBaslikChange}
                placeholder="Oku Başlık"
            />

            <Input type="text" variant="bordered" radius="sm"
            onValueChange={onDinleBaslikChange}
                placeholder="Dinle Başlık"
            />

            <Input type="text" variant="bordered" radius="sm"
            onValueChange={onIzleBaslikChange}
                placeholder="İzle Başlık"
            />

            <Divider />
            <h2 className="-mb-1 text-sm">Bonus varsa:</h2>
            <Input type="text" variant="bordered" radius="sm"
            onValueChange={onBonusBaslikChange}
                placeholder="Bonus Başlık"
            />
            <Divider />
            <Button
                variant="flat"
                color="success"
                radius="sm" >
                <FontAwesomeIcon icon={faDownload} />
                Bütün sayfaları yazdır.
            </Button>
        </Card >
    )
}
