/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Card } from '@nextui-org/card';

// images
import blackBG from '../assets/all/PNG/blackbg-prev.png';
import whiteBG from '../assets/all/PNG/whitebg-prev.png';
import blackTitle from '../assets/all/PNG/btitle-prev.png';
import whiteTitle from '../assets/all/PNG/wtitle-prev.png';
import whiteTpocg from '../assets/all/PNG/wtpocg-prev.png';
import blackTpocg from '../assets/all/PNG/btpocg-prev.png';
import whiteLonca from '../assets/all/PNG/wlon-prev.png';
import blackLonca from '../assets/all/PNG/blon-prev.png';
import { toJpeg } from 'html-to-image';

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

const placement = 'absolute z-auto h-full w-full';

const DefaultPreviews = forwardRef((
    { selectedBG, selectedValue, baslik, yazar },
    ref) => {

    const generateImages = () => {
        const nodes = printCellRefs.current;
    
        const promises = Array.from(nodes).map((node, index) =>
            toJpeg(node, { quality: 1 })
                .then((dataUrl) => ({ dataUrl, index }))
                .catch((error) => {
                    console.error('oops, something went wrong!', error);
                })
        );
    
        Promise.all(promises)
            .then((results) => {
                results.forEach(({ dataUrl, index }) => {
                    const link = document.createElement('a');
                    link.download = `blog_${index}.jpeg`;
                    link.href = dataUrl;
                    link.click();
                });
            });
    };
    useImperativeHandle(ref, () => ({
        generateImages,
    }));

    const printCellRefs = useRef([]);

    useEffect(() => {
        printCellRefs.current = printCellRefs.current.slice(0, 6); //take a look at this line
    }, []);

    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-row flex-wrap gap-4 p-4 max-w-[908px]">
            <CoverPreviewCell ref={(el) => printCellRefs.current[0] = el} className="print-cell" selectedBG={selectedBG} selectedValue={selectedValue} baslik={baslik} yazar={yazar} />
            <OtherPreviewCell ref={(el) => printCellRefs.current[1] = el} className="print-cell" selectedBG={selectedBG} selectedValue={selectedValue} />
            <OtherPreviewCell ref={(el) => printCellRefs.current[2] = el} className="print-cell" selectedBG={selectedBG} selectedValue={selectedValue} />
            <OtherPreviewCell ref={(el) => printCellRefs.current[3] = el} className="print-cell" selectedBG={selectedBG} selectedValue={selectedValue} />
            <OtherPreviewCell ref={(el) => printCellRefs.current[4] = el} className="print-cell" selectedBG={selectedBG} selectedValue={selectedValue} />
            <OtherPreviewCell ref={(el) => printCellRefs.current[5] = el} className="print-cell" selectedBG={selectedBG} selectedValue={selectedValue} />

        </Card>
    );
});
DefaultPreviews.displayName = 'DefaultPreviews';
export default DefaultPreviews;


const CoverPreviewCell = forwardRef((
    { selectedValue, selectedBG, baslik, yazar },
    ref) => {

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

    return (
        <Card ref={ref} radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
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
    );
});

CoverPreviewCell.displayName = 'CoverPreviewCell';

const OtherPreviewCell = forwardRef(({ selectedValue, selectedBG }, ref) => {
    const [textBG, setTextBG] = useState(null);

    useEffect(() => {
        if (selectedValue && selectedValue.includes('bg')) {
            setTextBG(imageMap[selectedValue]);
        }
    }, [selectedValue]);

    const defaultValue = useMemo(() => "Buraya metin girin.", []);

    return (
        <Card ref={ref} radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            {/* 1st layer: background image*/}
            <img src={selectedBG} className={placement} />
            {/* 2nd layer: text color*/}
            {textBG && <img src={textBG} className={placement} />}
            {/* 3rd layer: text */}
            <textarea
                className={`z-10 py-6 px-7 h-full overflow-scroll arial-font bg-transparent ${textBG == blackBG ? "text-white" : "text-black"}`}
                defaultValue={defaultValue}
            >
            </textarea>
        </Card>
    );
});

OtherPreviewCell.displayName = 'OtherPreviewCell';