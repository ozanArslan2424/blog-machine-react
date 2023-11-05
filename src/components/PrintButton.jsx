/* eslint-disable react/prop-types */
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function PrintButton({onPageAmountChange, pageAmount}) {


    return (
        <div className="flex gap-2">

            {/* V probably not necessary */}
            <Input
                id="pageAmount"
                className="w-1/3"
                type="number"
                radius="sm"
                placeholder="Sayfa Sayısı Gir"
                value={pageAmount}
                onValueChange={onPageAmountChange}
                min={1}
                max={10}
            />
            {/* ^ remove later */}

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
