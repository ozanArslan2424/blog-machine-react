import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg1 from "../assets/all/SVG/headerimg1.svg"
import DefBtnBoard from "../sections/DefBtnBoard";
import { useEffect, useState } from "react";


export default function DefaultPage() {
    const [uploadedBG, setUploadedBG] = useState(null);

    const [selectedValue, setSelectedValue] = useState(null);

    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };

    const [baslik, setBaslik] = useState("");

    function handleBaslikChange(value) {
        setBaslik(value);
    }

    const [yazar, setYazar] = useState("");

    function handleYazarChange(value) {
        setYazar(value);
    }

    return (
        <>
            <Header headerImage={HeaderImg1} />

            <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">

                <DefBtnBoard 
                displayBG={setUploadedBG} 
                onRadioChange={handleRadioChange}
                selectedValue={selectedValue} 
                onBaslikChange={handleBaslikChange}
                onYazarChange={handleYazarChange}
                />

                <Previews 
                uploadedBG={uploadedBG} 
                selectedValue={selectedValue}
                baslik={baslik}
                yazar={yazar}
                />

            </div>
        </>
    )
}
