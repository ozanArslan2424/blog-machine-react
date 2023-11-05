/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Card } from '@nextui-org/card';
import blackBG from '../assets/all/PNG/blackbg-prev.png';
import whiteBG from '../assets/all/PNG/whitebg-prev.png';
import blackTitle from '../assets/all/PNG/btitle-prev.png';
import whiteTitle from '../assets/all/PNG/wtitle-prev.png';
import whiteTpocg from '../assets/all/PNG/wtpocg-prev.png';
import blackTpocg from '../assets/all/PNG/btpocg-prev.png';
import whiteLonca from '../assets/all/PNG/wlon-prev.png';
import blackLonca from '../assets/all/PNG/blon-prev.png';

const imageMap = {
    'bg black': blackBG,
    'bg white': whiteBG,
    'title black': blackTitle,
    'title white': whiteTitle,
    'tpocg black': blackTpocg,
    'tpocg white': whiteTpocg,
    'lonca black': blackLonca,
    'lonca white': whiteLonca,
};

export default function Previews({ selectedBG, selectedValue, baslik, yazar }) {

    return (
        <Card radius="sm" shadow="sm" className="flex flex-col gap-4 w-min p-4">
            <CoverPreviewCell selectedBG={selectedBG} selectedValue={selectedValue} baslik={baslik} yazar={yazar} />
            <OtherPreviewCell selectedBG={selectedBG} selectedValue={selectedValue} />
        </Card>
    );
}

const CoverPreviewCell = ({ selectedValue, selectedBG, baslik, yazar }) => {

    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        if (selectedValue) {
            const category = selectedValue.split(' ')[0];
            setSelectedImages((prevSelectedImages) => {
                const updatedImages = prevSelectedImages.filter(
                    (image) => !image.includes(category)
                );
                if (!selectedValue.startsWith('bg')) {
                    updatedImages.push(imageMap[selectedValue]);
                }
                return updatedImages;
            });
        }
    }, [selectedValue]);


    const placement = 'absolute z-auto h-full w-full';

    return (
        <Card radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            {/* 1st layer: background image*/}
            <img src={selectedBG} className={placement} />
            {/* 2nd 3rd 4th layers: title back, logo1, logo2 */}
            {selectedImages.map((image, index) => (
                <img src={image} className={placement} key={index} />
            ))}
            {/* 5th layer: title text */}
            <span className="z-10 mt-[27px] ml-28 mr-4 text-center cronus-font text-[22px]">{baslik}</span>
            {/* 6th layer: author text */}
            <span className="z-10 mt-[15px] ml-56 mr-5 text-center cronus-font">{yazar}</span>

        </Card>
    )
}

const OtherPreviewCell = ({ selectedValue, selectedBG }) => {
    const [textBG, setTextBG] = useState(null);

    useEffect(() => {
        if (selectedValue && selectedValue.includes('bg')) {
            setTextBG(imageMap[selectedValue]);
        }
    }, [selectedValue]);


    const placement = 'absolute z-auto h-full w-full';
    return (
        <Card radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            {/* 1st layer: background image*/}
            <img src={selectedBG} className={placement} />
            {/* 2nd layer: text color*/}
            {textBG && <img src={textBG} className={placement} />}
            {/* 3rd layer: text */}
            <div
                contentEditable
                className={`z-10 py-6 px-7 max-h-full overflow-scroll arial-font ${textBG == blackBG ? "text-white" : "text-black"}`}>
                text placeholder
            </div>
        </Card>
    )
}