import {
  faDownload,
  faUpload,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Divider } from "@nextui-org/react";
import { useRef } from "react";

const QuotesBoard = ({ uploadCover, onGenerateImages }) => {
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
      <FileInputButton
        upload={uploadCover}
        buttonText="PsiNossa Alıntılar Görseli Yükle"
      />
      <Divider />
      <Button
        variant="flat"
        color="success"
        radius="sm"
        onPress={onGenerateImages}
      >
        <FontAwesomeIcon icon={faDownload} />
        Sayfayı yazdır.
      </Button>
    </Card>
  );
};

export default QuotesBoard;

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
