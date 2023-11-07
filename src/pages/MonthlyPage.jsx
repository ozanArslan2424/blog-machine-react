import Header from "../sections/Header";
import AltBtnBoard from "../sections/AltBtnBoard";
import MonthlyPreviews from "../sections/MonthlyPreviews";
import { useState } from "react";


export default function MonthlyPage() {
    const [state, setState] = useState({
        okuBaslik: "",
        dinleBaslik: "",
        izleBaslik: "",
        bonusBaslik: "",
    });
    const handleOkuBaslikChange = (value) => setState(prevState => ({ ...prevState, okuBaslik:value }));
    const handleDinleBaslikChange = (value) => setState(prevState => ({ ...prevState, dinleBaslik:value }));
    const handleIzleBaslikChange = (value) => setState(prevState => ({ ...prevState, izleBaslik:value }));
    const handleBonusBaslikChange = (value) => setState(prevState => ({ ...prevState, bonusBaslik:value }));

    return (
        <>
            <Header headerTitle="Ayın Önerileri" />
            <div className="flex responsive-flex justify-center gap-4 px-4 w-screen">
                <AltBtnBoard
                    onOkuBaslikChange={handleOkuBaslikChange}
                    onDinleBaslikChange={handleDinleBaslikChange}
                    onIzleBaslikChange={handleIzleBaslikChange}
                    onBonusBaslikChange={handleBonusBaslikChange} />
                <MonthlyPreviews
                    okuBaslik={state.okuBaslik}
                    dinleBaslik={state.dinleBaslik}
                    izleBaslik={state.izleBaslik}
                    bonusBaslik={state.bonusBaslik} />
            </div>
        </>
    )
}
