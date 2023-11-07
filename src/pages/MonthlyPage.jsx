import Header from "../sections/Header";
import Previews from "../sections/Previews";
import AltBtnBoard from "../sections/AltBtnBoard";


export default function DefaultPage() {
    return (
        <>
            <Header headerTitle="Ayın Önerileri" />
            <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
                {/* <AltBtnBoard /> */}
                <Previews />
            </div>
        </>
    )
}
