// import AltBtnBoardOne from "../sections/AltBtnBoardOne";
import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg2 from "../assets/all/SVG/headerimg2.svg"
import AltBtnBoard from "../components/AltBtnBoard";


export default function DefaultPage() {
    return (
        <>
            <Header headerImage={HeaderImg2} />
            <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
                <AltBtnBoard />
                <Previews />
            </div>
        </>
    )
}
