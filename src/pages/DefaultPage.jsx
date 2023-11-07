import Header from "../sections/Header";
import DefaultPreviews from "../sections/DefaultPreviews";
import DefBtnBoard from "../sections/DefBtnBoard";
import { useRef, useState } from "react";

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
    <>
      <Header headerTitle="Akıl Defterim" />
      <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
        <DefBtnBoard
          uploadBG={(bg) =>
            setState((prevState) => ({ ...prevState, selectedBG: bg }))
          }
          onRadioChange={handleRadioChange}
          onBaslikChange={handleBaslikChange}
          onYazarChange={handleYazarChange}
          onGenerateImages={handleGenerateImages}
        />
        <DefaultPreviews
          selectedBG={state.selectedBG}
          selectedValue={state.selectedValue}
          baslik={state.baslik}
          yazar={state.yazar}
          ref={previewsRef}
        />
      </div>
    </>
  );
}
