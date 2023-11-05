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

export default function Previews({ uploadedBG, selectedValue }) {

    return (
        <Card radius="sm" shadow="sm" className="flex flex-col gap-4 w-min p-4">
            <CoverPreviewCell uploadedBG={uploadedBG} selectedValue={selectedValue} />
            <OtherPreviewCell uploadedBG={uploadedBG} selectedValue={selectedValue} />
        </Card>
    );
}

const CoverPreviewCell = ({ selectedValue, uploadedBG }) => {

    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        if (selectedValue) {
            // Exclude "bg" item from selected images
            if (!selectedValue.startsWith('bg')) {
                setSelectedImages((prevSelectedImages) => [
                    ...prevSelectedImages.filter((image) => !image.includes('bg')),
                    imageMap[selectedValue],
                ]);
            } else {
                setSelectedImages((prevSelectedImages) => [
                    ...prevSelectedImages.filter((image) => !image.includes('bg')),
                ]);
            }
        }
    }, [selectedValue]);

    const placement = 'absolute z-auto h-full w-full';

    return (
        <Card radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            <img src={uploadedBG} className={placement} />
            {selectedImages.map((image, index) => (
                <img src={image} className={placement} key={index} />
            ))}
        </Card>
    )
}

const OtherPreviewCell = ({ selectedValue, uploadedBG }) => {
    const [selectedBackground, setSelectedBackground] = useState(null);

    useEffect(() => {
        if (selectedValue && selectedValue.includes('bg')) {
            setSelectedBackground(imageMap[selectedValue]);
        }
    }, [selectedValue]);

    const placement = 'absolute z-auto h-full w-full';
    return (
        <Card radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            <img src={uploadedBG} className={placement} />
            {selectedBackground && <img src={selectedBackground} className={placement} />}
        </Card>
    )
}