/* eslint-disable react/prop-types */
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { useRef } from "react";

export default function AltBtnBoard({
  uploadOne,
  uploadTwo,
  uploadThree,
  onOkuBaslikChange,
  onDinleBaslikChange,
  onIzleBaslikChange,
  onBonusBaslikChange,
}) {
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);

  const handleFileUploadOne = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrlOne = e.target.result;
      uploadOne(imageUrlOne);
    };

    reader.readAsDataURL(file);
  };
  const handleFileUploadTwo = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrlTwo = e.target.result;
      uploadTwo(imageUrlTwo);
    };

    reader.readAsDataURL(file);
  };
  const handleFileUploadThree = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrlThree = e.target.result;
      uploadThree(imageUrlThree);
    };

    reader.readAsDataURL(file);
  };
  return (
    <Card
      radius="sm"
      shadow="sm"
      className="flex flex-col gap-2 w-max h-min p-4 shrink-0"
    >
      <h1>Kontrol Paneli</h1>
      <Divider />

      <div className="flex gap-2">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          ref={inputRefOne}
          style={{ display: "none" }}
          onChange={handleFileUploadOne}
        />
        <Button
          className="flex flex-col h-24 w-24"
          variant="flat"
          color="secondary"
          radius="sm"
          onPress={() => inputRefOne.current.click()}
        >
          <FontAwesomeIcon icon={faUpload} />
          Oku Görsel
        </Button>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          ref={inputRefTwo}
          style={{ display: "none" }}
          onChange={handleFileUploadTwo}
        />
        <Button
          className="flex flex-col h-24 w-24"
          variant="flat"
          color="secondary"
          radius="sm"
          onPress={() => inputRefTwo.current.click()}
        >
          <FontAwesomeIcon icon={faUpload} />
          Dinle Görsel
        </Button>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          ref={inputRefThree}
          style={{ display: "none" }}
          onChange={handleFileUploadThree}
        />
        <Button
          className="flex flex-col h-24 w-24"
          variant="flat"
          color="secondary"
          radius="sm"
          onPress={() => inputRefThree.current.click()}
        >
          <FontAwesomeIcon icon={faUpload} />
          İzle Görsel
        </Button>
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
      <Button variant="flat" color="success" radius="sm">
        <FontAwesomeIcon icon={faDownload} />
        Bütün sayfaları yazdır.
      </Button>
    </Card>
  );
}
