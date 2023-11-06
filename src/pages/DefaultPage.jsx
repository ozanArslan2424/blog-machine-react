import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg1 from "../assets/all/SVG/headerimg1.svg"
import DefBtnBoard from "../sections/DefBtnBoard";
import { useRef, useState } from "react";

export default function DefaultPage() {
    const [selectedBG, setSelectedBG] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [baslik, setBaslik] = useState("");
    const [yazar, setYazar] = useState("");
    const [addedCellCount, setAddedCellCount] = useState(1);

    function handleRadioChange(value) {
        setSelectedValue(value);
    }

    function handleBaslikChange(value) {
        setBaslik(value);
    }

    function handleYazarChange(value) {
        setYazar(value);
    }

    function handleAddNewCell() {
        setAddedCellCount((prevCount) => prevCount + 1);
    }

    const previewsRef = useRef();

    function handleGenerateImages() {
        previewsRef.current.generateImages();
    }

    return (
        <>
            <Header headerImage={HeaderImg1} />
            <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
                <DefBtnBoard
                    uploadBG={setSelectedBG}
                    onRadioChange={handleRadioChange}
                    onBaslikChange={handleBaslikChange}
                    onYazarChange={handleYazarChange}
                    addedCellCount={addedCellCount}
                    onGenerateImages={handleGenerateImages}
                />
                <Previews
                    selectedBG={selectedBG}
                    selectedValue={selectedValue}
                    baslik={baslik}
                    yazar={yazar}
                    onAddNewCell={handleAddNewCell}
                    addedCellCount={addedCellCount}
                    ref={previewsRef}
                />
            </div>
        </>
    )
}
