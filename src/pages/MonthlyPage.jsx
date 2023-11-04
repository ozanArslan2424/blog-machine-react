import BtnBoard from "../sections/BtnBoard";
import Header from "../sections/Header";
import Previews from "../sections/Previews";
import HeaderImg2 from "../assets/all/SVG/headerimg2.svg"


export default function DefaultPage() {
    return (
        <>
        <Header headerImage={HeaderImg2}/>
        <div className="flex justify-center gap-4 px-4 w-screen">
            hello
            <BtnBoard />
            <Previews />
        </div>
        </>
    )
}
