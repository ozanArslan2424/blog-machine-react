import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg1 from "../assets/all/SVG/headerimg1.svg"
import DefBtnBoard from "../sections/DefBtnBoard";
import { useState } from "react";


export default function DefaultPage() {
    const [selectedBG, setSelectedBG] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [baslik, setBaslik] = useState("");
    const [yazar, setYazar] = useState("");
    const [pageAmount, setPageAmount] = useState(0);


    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };

    function handleBaslikChange(value) {
        setBaslik(value);
    }

    function handleYazarChange(value) {
        setYazar(value);
    }
    function handlePageAmountChange(value) {
        setPageAmount(value);
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
                    onPageAmountChange={handlePageAmountChange}
                    pageAmount={pageAmount}
                />

                <Previews
                    selectedBG={selectedBG}
                    selectedValue={selectedValue}
                    baslik={baslik}
                    yazar={yazar}
                />

            </div>
        </>
    )
}
