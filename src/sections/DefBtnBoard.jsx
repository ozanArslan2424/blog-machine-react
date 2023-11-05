/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
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
import PrintButton from "../components/PrintButton";
import EnterTextButton from "../components/EnterTextButton";


export default function DefBtnBoard({ displayBG, selectedValue, onRadioChange }) {


    return (
        <Card radius="sm" shadow="sm" className="flex flex-col gap-2 w-min h-min p-4 shrink-0" >
            <h1>Kontrol Paneli</h1>

            <Divider />

            <UploadButton displayBG={displayBG} />

            <Divider />

            <CustomRadioButton
                selectedValue={selectedValue} onRadioChange={onRadioChange}
                optionName="bg" class1="bg-white" class2="bg-black" />
            <CustomRadioButton
                selectedValue={selectedValue} onRadioChange={onRadioChange}
                optionName="title" image1={wtitle} image2={btitle} />
            <CustomRadioButton
                selectedValue={selectedValue} onRadioChange={onRadioChange}
                optionName="tpocg" image1={wtpocg} image2={btpocg} />
            <CustomRadioButton
                selectedValue={selectedValue} onRadioChange={onRadioChange}
                optionName="lonca" image1={wlonca} image2={blonca} />

            <Divider />

            <Input
                type="text"
                variant="bordered"
                radius="sm"
                placeholder="Başlık" />

            <Input
                type="text"
                variant="bordered"
                radius="sm"
                placeholder="Yazar" />

            <EnterTextButton />

            <Divider />

            <PrintButton />
        </Card>
    )
}

const UploadButton = ({ displayBG }) => {

    const handleFileClick = () => {
        inputRef.current.click();
    };

    const inputRef = useRef(null);

    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;
            displayBG(imageUrl);
        };

        reader.readAsDataURL(file);
    }

    return (
        <>
            <input type="file" id="fileInput" accept="image/*" ref={inputRef} style={{ display: "none" }} onChange={handleFileUpload} />
            <Button
                variant="flat"
                color="secondary"
                radius="sm"
                className="w-full"
                onPress={handleFileClick} >
                <FontAwesomeIcon icon={faUpload} />
                Arka Plan Görseli Yükle
            </Button>
        </>
    )
}

const CustomRadioButton = ({ optionName, class1, class2, image1, image2, selectedValue, onRadioChange }) => {

    let radioButtonStyle = "bg-no-repeat bg-center w-36 h-14 hover:cursor-pointer hover:ring-2 hover:ring-zinc-400";
    const selectedBorder = "border border-1 border-green-600 ";

    return (
        <ButtonGroup radius="sm" shadow="sm" disableRipple>
            <Button
                onClick={() => {
                    const newValue = `${optionName} white`;
                    onRadioChange(newValue);
                }}
                style={{ backgroundImage: `url(${image1})` }}
                className={`${class1} ${radioButtonStyle}` + (selectedValue === `${optionName} white` && selectedBorder)}
            >
            </Button>
            <Button
                onClick={() => {
                    const newValue = `${optionName} black`;
                    onRadioChange(newValue);
                }} style={{ backgroundImage: `url(${image2})` }}
                className={`${class2} ${radioButtonStyle}` + (selectedValue === `${optionName} black` && selectedBorder)}
            >
            </Button>
        </ButtonGroup>
    );

}