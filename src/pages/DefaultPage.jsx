import { useRef, useState } from "react";
import DefaultPreviews from "../components/DefaultPreviews";
import DefaultBoard from "../components/DefaultBoard";
import InfoCard from "../components/ui/InfoCard";

export default function DefaultPage() {
  const [state, setState] = useState({
    selectedBG: null,
    selectedValue: null,
    baslik: "",
    yazar: "",
  });
  const previewsRef = useRef();

  const handleRadioChange = (value) =>
    setState((prevState) => ({ ...prevState, selectedValue: value }));
  const handleBaslikChange = (value) =>
    setState((prevState) => ({ ...prevState, baslik: value }));
  const handleYazarChange = (value) =>
    setState((prevState) => ({ ...prevState, yazar: value }));
  const handleGenerateImages = () => previewsRef.current.generateImages();

  return (
    <div className="flex responsive-flex justify-center gap-4 p-4 w-screen">
      <div className="flex flex-col gap-4">
        <DefaultBoard
          uploadBG={(bg) =>
            setState((prevState) => ({ ...prevState, selectedBG: bg }))
          }
          onRadioChange={handleRadioChange}
          onBaslikChange={handleBaslikChange}
          onYazarChange={handleYazarChange}
          onGenerateImages={handleGenerateImages}
        />
        <InfoCard />
      </div>
      <DefaultPreviews
        selectedBG={state.selectedBG}
        selectedValue={state.selectedValue}
        baslik={state.baslik}
        yazar={state.yazar}
        ref={previewsRef}
      />
    </div>
  );
}
