import AltBtnBoard from "../components/AltBtnBoard";
import MonthlyPreviews from "../components/MonthlyPreviews";
import { useRef, useState } from "react";

export default function MonthlyPage() {
  const [state, setState] = useState({
    okuGorsel: null,
    dinleGorsel: null,
    izleGorsel: null,
    okuBaslik: "",
    dinleBaslik: "",
    izleBaslik: "",
    bonusBaslik: "",
  });
  const previewsRef = useRef();

  const handleBaslikChange = (key) => (value) =>
    setState((prevState) => ({ ...prevState, [key]: value }));

  const handleGorselUpload = (key) => (image) =>
    setState((prevState) => ({ ...prevState, [key]: image }));
  const handleGenerateImages = () => previewsRef.current.generateImages();

  return (
    <div className="flex responsive-flex justify-center gap-4 p-4 w-screen">
      <AltBtnBoard
        uploadOne={handleGorselUpload("okuGorsel")}
        uploadTwo={handleGorselUpload("dinleGorsel")}
        uploadThree={handleGorselUpload("izleGorsel")}
        onOkuBaslikChange={handleBaslikChange("okuBaslik")}
        onDinleBaslikChange={handleBaslikChange("dinleBaslik")}
        onIzleBaslikChange={handleBaslikChange("izleBaslik")}
        onBonusBaslikChange={handleBaslikChange("bonusBaslik")}
        onGenerateImages={handleGenerateImages}
      />
      <MonthlyPreviews {...state} ref={previewsRef} />
    </div>
  );
}
