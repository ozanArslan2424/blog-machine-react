import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export default function PrintButton() {
    const [pageAmount, setPageAmount] = useState(0);


    return (
        <div className="flex gap-2">
            <Input
                id="pageAmount"
                className="w-1/3"
                type="number"
                radius="sm"
                placeholder="Sayfa Sayısı Gir"
                value={pageAmount}
                onChange={(e) => setPageAmount(e.target.value)}
                min={1}
                max={10}
            />
            <Button
                className="w-2/3"
                variant="flat"
                color="success"
                radius="sm" >
                <FontAwesomeIcon icon={faDownload} />
                {pageAmount} sayfa yazdır.
            </Button>
        </div>
    )

}
