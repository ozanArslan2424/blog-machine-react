/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
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

const Previews = forwardRef((
    { selectedBG, selectedValue, baslik, yazar, onAddNewCell, addedCellCount },
    ref) => {

    const generateImages = () => {
        const nodes = printCellRefs.current
        console.log(nodes);
        Array.from(nodes).forEach((node) => {
            toJpeg(node, { quality: 1 })
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'blog.jpeg';
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) => {
                    console.error('oops, something went wrong!', error);
                });
        });
    };

    useImperativeHandle(ref, () => ({
        generateImages,
    }));

    const printCellRefs = useRef([]);

    useEffect(() => {
        printCellRefs.current = printCellRefs.current.slice(0, addedCellCount + 1);
    }, [addedCellCount]);

    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-row flex-wrap gap-4 p-4 max-w-[908px]">
            <CoverPreviewCell
                ref={(el) => printCellRefs.current[0] = el}
                className="print-cell"
                selectedBG={selectedBG}
                selectedValue={selectedValue}
                baslik={baslik}
                yazar={yazar}
            />
            {[...Array(addedCellCount)].map((_, index) => (
                <OtherPreviewCell
                    ref={(el) => printCellRefs.current[index + 1] = el}
                    className="print-cell"
                    key={index}
                    selectedBG={selectedBG}
                    selectedValue={selectedValue}
                />
            ))}
            <Button disableRipple onClick={onAddNewCell} radius="full" color="primary" className="w-[430px]">
                <FontAwesomeIcon icon={faAdd} size="lg" />
            </Button>
        </Card>
    );
});
Previews.displayName = 'Previews';
export default Previews;


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


    const placement = 'absolute z-auto h-full w-full';

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

const OtherPreviewCell = forwardRef((
    { selectedValue, selectedBG, },
    ref) => {

    const [textBG, setTextBG] = useState(null);

    useEffect(() => {
        if (selectedValue && selectedValue.includes('bg')) {
            setTextBG(imageMap[selectedValue]);
        }
    }, [selectedValue]);

    const placement = 'absolute z-auto h-full w-full';
    return (
        <Card ref={ref} radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            {/* 1st layer: background image*/}
            <img src={selectedBG} className={placement} />
            {/* 2nd layer: text color*/}
            {textBG && <img src={textBG} className={placement} />}
            {/* 3rd layer: text */}
            <div
                // contentEditable
                className={`z-10 py-6 px-7 max-h-full overflow-scroll arial-font ${textBG == blackBG ? "text-white" : "text-black"}`}>
                text placeholder
            </div>
        </Card>
    );
});

OtherPreviewCell.displayName = 'OtherPreviewCell';