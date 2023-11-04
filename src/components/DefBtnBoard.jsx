/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

// images
import wtitle from "../assets/btn/bas-b.svg";
import btitle from "../assets/btn/bas-s.svg";
import wtpocg from "../assets/btn/tpocg-b.svg";
import btpocg from "../assets/btn/tpocg-s.svg";
import wlonca from "../assets/btn/lonca-b.svg";
import blonca from "../assets/btn/lonca-s.svg";
import PrintButton from "./PrintButton";
import EnterTextButton from "./EnterTextButton";

export default function DefBtnBoard() {

    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-col gap-2 w-min h-min p-4 shrink-0"
        >
            <h1>Kontrol Paneli</h1>
            <Divider />

            <Button variant="flat" color="secondary" radius="sm">
                <FontAwesomeIcon icon={faUpload} />
                Arka Plan Görseli Yükle</Button>

            <Divider />

            <CustomRadio
                value1="whitebg"
                value2="blackbg"
                class1="bg-white"
                class2="bg-black"
                variant="bordered" />

            <CustomRadio
                value1="whitetitle"
                value2="blacktitle"
                style1={wtitle}
                style2={btitle}
                variant="flat" />

            <CustomRadio
                value1="whitetpocg"
                value2="blacktpocg"
                style1={wtpocg}
                style2={btpocg}
                variant="flat" />

            <CustomRadio
                value1="whitelonca"
                value2="blacklonca"
                style1={wlonca}
                style2={blonca}
                variant="flat" />

            <Divider />

            <Input
                type="text"
                variant="bordered"
                radius="sm"
                placeholder="Başlık"
            />

            <Input
                type="text"
                variant="bordered"
                radius="sm"
                placeholder="Yazar"
            />

            <EnterTextButton />

            <Divider />

            <PrintButton />
        </Card>
    )
}




const CustomRadio = ({ value1, value2, style1, style2, class1, class2 }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const selectedBorder = "box-border border border-2 border-dotted border-green-600";
    let radioButtonStyle = "bg-no-repeat bg-center w-36 h-14 hover:cursor-pointer hover:ring-2 hover:ring-zinc-400";

    return (
        <div className="radio-group flex gap-2">
            <input
                id={value1}
                type="radio"
                value={value1}
                checked={selectedOption === value1}
                onChange={handleOptionChange}
            />
            <label htmlFor={value1}>
                <Card
                    radius="sm"
                    shadow="sm"
                    style={{ backgroundImage: `url(${style1})` }}
                    className=
                    {`${(class1 != null) ? class1 : "bg-zinc-600"} 
                        ${(selectedOption === value1) && selectedBorder} 
                        ${radioButtonStyle}`}
                ></Card>
            </label>

            <input
                id={value2}
                type="radio"
                value={value2}
                checked={selectedOption === value2}
                onChange={handleOptionChange}
            />
            <label htmlFor={value2}>
                <Card
                    radius="sm"
                    shadow="sm"
                    style={{ backgroundImage: `url(${style2})` }}
                    className=
                    {`${(class2 != null) ? class2 : "bg-zinc-600"} 
                        ${(selectedOption === value2) && selectedBorder} 
                        ${radioButtonStyle}`}
                ></Card>
            </label>
        </div>
    );
};
