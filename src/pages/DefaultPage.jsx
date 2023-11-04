import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg1 from "../assets/all/SVG/headerimg1.svg"
import DefBtnBoard from "../sections/DefBtnBoard";
import { useState } from "react";


export default function DefaultPage() {
    const [uploadedBG, setUploadedBG] = useState(null);
    console.log(uploadedBG);

    return (
        <>
            <Header headerImage={HeaderImg1} />
            <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
                <DefBtnBoard displayBG={setUploadedBG}/>
                <Previews uploadedBG={uploadedBG}/>
            </div>
        </>
    )
}
