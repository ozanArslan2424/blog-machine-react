import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg1 from "../assets/all/SVG/headerimg1.svg"
import DefBtnBoard from "../sections/DefBtnBoard";


export default function DefaultPage() {
    return (
        <>
        <Header headerImage={HeaderImg1}/>
        <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
            <DefBtnBoard />
            <Previews />
        </div>
        </>
    )
}
