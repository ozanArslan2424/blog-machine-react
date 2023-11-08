/* eslint-disable react/prop-types */
import {
  faDownload,
  faUpload,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { useRef } from "react";

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
        className="flex flex-col h-24 w-24"
        variant="flat"
        color="secondary"
        radius="sm"
        onPress={() => inputRef.current.click()}
      >
        <FontAwesomeIcon icon={faUpload} />
        {buttonText}
      </Button>
    </>
  );
};

export default function MonthlyBoard({
  uploadOne,
  uploadTwo,
  uploadThree,
  onOkuBaslikChange,
  onDinleBaslikChange,
  onIzleBaslikChange,
  onBonusBaslikChange,
  onGenerateImages,
}) {
  return (
    <Card
      radius="sm"
      shadow="sm"
      className="flex flex-col gap-2 w-max h-min p-4 shrink-0"
    >
      <h1>
        <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
        Kontrol Paneli
      </h1>
      <Divider />

      <div className="flex gap-2">
        <FileInputButton upload={uploadOne} buttonText="Oku Görseli" />
        <FileInputButton upload={uploadTwo} buttonText="Dinle Görseli" />
        <FileInputButton upload={uploadThree} buttonText="İzle Görseli" />
      </div>
      <Divider />

      <Input
        type="text"
        variant="bordered"
        radius="sm"
        onValueChange={onOkuBaslikChange}
        placeholder="Oku Başlık"
      />

      <Input
        type="text"
        variant="bordered"
        radius="sm"
        onValueChange={onDinleBaslikChange}
        placeholder="Dinle Başlık"
      />

      <Input
        type="text"
        variant="bordered"
        radius="sm"
        onValueChange={onIzleBaslikChange}
        placeholder="İzle Başlık"
      />

      <Divider />
      <h2 className="-mb-1 text-sm">Bonus varsa:</h2>
      <Input
        type="text"
        variant="bordered"
        radius="sm"
        onValueChange={onBonusBaslikChange}
        placeholder="Bonus Başlık"
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
