import { useRef } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUpload,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

// images
import wtitle from "/btn/bas-b.svg";
import btitle from "/btn/bas-s.svg";
import wtpocg from "/btn/tpocg-b.svg";
import btpocg from "/btn/tpocg-s.svg";
import wlonca from "/btn/lonca-b.svg";
import blonca from "/btn/lonca-s.svg";

export default function DefaultBoard({
  uploadBG,
  onRadioChange,
  onBaslikChange,
  onYazarChange,
  onGenerateImages,
}) {
  return (
    <Card
      radius="sm"
      shadow="sm"
      className="flex flex-col gap-2 w-[336px] h-min p-4 shrink-0"
    >
      <h1>
        <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
        Kontrol Paneli
      </h1>
      <Divider />
      <FileInputButton upload={uploadBG} buttonText="Arka Plan Görseli Yükle" />
      <Divider />
      <CustomRadioButton
        onRadioChange={onRadioChange}
        optionName="title"
        image1={wtitle}
        image2={btitle}
      />
      <CustomRadioButton
        onRadioChange={onRadioChange}
        optionName="tpocg"
        image1={wtpocg}
        image2={btpocg}
      />
      <CustomRadioButton
        onRadioChange={onRadioChange}
        optionName="lonca"
        image1={wlonca}
        image2={blonca}
      />
      <CustomRadioButton
        onRadioChange={onRadioChange}
        optionName="bg"
        class1="bg-white"
        class2="bg-black"
      />
      <Divider />
      <Input
        type="text"
        variant="bordered"
        radius="sm"
        placeholder="Başlık"
        onValueChange={onBaslikChange}
      />
      <Input
        type="text"
        variant="bordered"
        radius="sm"
        placeholder="Yazar"
        onValueChange={onYazarChange}
      />
      <Divider />
      <Button
        variant="flat"
        color="success"
        radius="sm"
        onPress={onGenerateImages}
      >
        <FontAwesomeIcon icon={faDownload} />
        Bütün sayfaları yazdır.
      </Button>
    </Card>
  );
}

const CustomRadioButton = ({
  optionName,
  class1,
  class2,
  image1,
  image2,
  onRadioChange,
}) => {
  let radioButtonStyle =
    "bg-no-repeat bg-center w-1/2 h-14 ring-inset ring-2 ring-zinc-300 dark:ring-zinc-700 hover:cursor-pointer hover:ring-2 hover:ring-zinc-400";

  return (
    <ButtonGroup radius="sm" disableRipple className="">
      <Button
        style={{ backgroundImage: `url(${image1})` }}
        className={`${class1} ${radioButtonStyle}`}
        onClick={() => {
          const newValue = `${optionName} white`;
          onRadioChange(newValue);
        }}
      ></Button>
      <Divider orientation="vertical" />
      <Button
        style={{ backgroundImage: `url(${image2})` }}
        className={`${class2} ${radioButtonStyle}`}
        onClick={() => {
          const newValue = `${optionName} black`;
          onRadioChange(newValue);
        }}
      ></Button>
    </ButtonGroup>
  );
};

const handleFileUpload = (upload) => (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const imageUrl = e.target.result;
    upload(imageUrl);
  };

  reader.readAsDataURL(file);
};

const FileInputButton = ({ upload, buttonText }) => {
  const inputRef = useRef(null);

  return (
    <>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload(upload)}
      />
      <Button
        variant="flat"
        color="secondary"
        radius="sm"
        className="w-full"
        onPress={() => inputRef.current.click()}
      >
        <FontAwesomeIcon icon={faUpload} />
        {buttonText}
      </Button>
    </>
  );
};
