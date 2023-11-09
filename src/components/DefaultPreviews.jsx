import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { toJpeg } from "html-to-image";
import { Card } from "@nextui-org/card";

import blackBG from "/previews/blackbg-prev.png";
import whiteBG from "/previews/whitebg-prev.png";
import blackTitle from "/previews/btitle-prev.png";
import whiteTitle from "/previews/wtitle-prev.png";
import whiteTpocg from "/previews/wtpocg-prev.png";
import blackTpocg from "/previews/btpocg-prev.png";
import whiteLonca from "/previews/wlon-prev.png";
import blackLonca from "/previews/blon-prev.png";

const imageMap = {
  "bg black": blackBG,
  "bg white": whiteBG,
  "title black": blackTitle,
  "title white": whiteTitle,
  "tpocg black": blackTpocg,
  "tpocg white": whiteTpocg,
  "lonca black": blackLonca,
  "lonca white": whiteLonca,
};

const placement = "absolute z-auto h-full w-full";

const DefaultPreviews = forwardRef(
  ({ selectedBG, selectedValue, baslik, yazar }, ref) => {
    const generateImages = () => {
      const nodes = printCellRefs.current;
      const promises = Array.from(nodes).map((node, index) =>
        toJpeg(node, { quality: 1 })
          .then((dataUrl) => ({ dataUrl, index }))
          .catch((error) => {
            console.error("oops, something went wrong!", error);
            return { error, index };
          })
      );

      Promise.all(promises).then((results) => {
        results.forEach((result) => {
          if (result.error) {
            console.error(
              `Error generating image for node ${result.index}:`,
              result.error
            );
          } else {
            const link = document.createElement("a");
            link.download = `blog.jpeg`;
            link.href = result.dataUrl;
            link.click();
          }
        });
      });
    };

    useImperativeHandle(ref, () => ({
      generateImages,
    }));

    const printCellRefs = useRef([]);

    useEffect(() => {
      printCellRefs.current = printCellRefs.current.slice(0, 6);
    }, []);

    return (
      <Card
        radius="sm"
        shadow="sm"
        className="flex flex-row flex-wrap gap-4 p-4 max-w-[908px]"
      >
        <CoverPreviewCell
          ref={(el) => (printCellRefs.current[0] = el)}
          selectedBG={selectedBG}
          selectedValue={selectedValue}
          baslik={baslik}
          yazar={yazar}
        />
        <OtherPreviewCell
          withTitle={true}
          baslik={baslik}
          ref={(el) => (printCellRefs.current[1] = el)}
          selectedBG={selectedBG}
          selectedValue={selectedValue}
          pageNumber="1"
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[2] = el)}
          selectedBG={selectedBG}
          selectedValue={selectedValue}
          pageNumber="2"
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[3] = el)}
          selectedBG={selectedBG}
          selectedValue={selectedValue}
          pageNumber="3"
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[4] = el)}
          selectedBG={selectedBG}
          selectedValue={selectedValue}
          pageNumber="4"
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[5] = el)}
          selectedBG={selectedBG}
          selectedValue={selectedValue}
          pageNumber="5"
        />
      </Card>
    );
  }
);
DefaultPreviews.displayName = "DefaultPreviews";
export default DefaultPreviews;

const CoverPreviewCell = forwardRef(
  ({ selectedValue, selectedBG, baslik, yazar }, ref) => {
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
      if (selectedValue) {
        const category = selectedValue.split(" ")[0];
        setSelectedImages((prevSelectedImages) => {
          const updatedImages = prevSelectedImages.filter(
            (image) => !image.includes(category)
          );
          if (!selectedValue.startsWith("bg")) {
            updatedImages.push(imageMap[selectedValue]);
          }
          return updatedImages;
        });
      }
    }, [selectedValue]);

    return (
      <Card
        ref={ref}
        radius="sm"
        shadow="sm"
        className="bg-white w-[430px] h-[500px]"
      >
        {/* 1st layer: background image*/}
        <img alt="arka plan görseli" src={selectedBG} className={placement} />
        {/* 2nd 3rd 4th layers: title back, logo1, logo2 */}
        {selectedImages.map((image, index) => (
          <img
            alt="başlık ve logolar"
            src={image}
            className={placement}
            key={index}
          />
        ))}
        {/* 5th layer: title text */}
        <span className="z-10 mt-[27px] ml-28 mr-4 text-center cronus-font text-[22px] text-white">
          {baslik}
        </span>
        {/* 6th layer: author text */}
        <span className="z-10 mt-[15px] ml-56 mr-5 text-center cronus-font text-white">
          {yazar}
        </span>
      </Card>
    );
  }
);

CoverPreviewCell.displayName = "CoverPreviewCell";

const OtherPreviewCell = forwardRef(
  ({ withTitle, baslik, selectedValue, selectedBG, pageNumber }, ref) => {
    const [textBG, setTextBG] = useState(null);
    const defaultValue = useMemo(() => "Buraya metin girin.", []);

    useEffect(() => {
      if (selectedValue && selectedValue.includes("bg")) {
        setTextBG(imageMap[selectedValue]);
      }
    }, [selectedValue]);

    return (
      <Card
        ref={ref}
        radius="sm"
        shadow="sm"
        className="bg-white w-[430px] h-[500px]"
      >
        {/* 0th layer: page number*/}
        <span
          className={`absolute z-10 bottom-0 right-0 mr-1 arial-font font-semibold ${
            textBG == blackBG ? "text-white" : "text-black"
          }`}
        >
          {pageNumber}
        </span>
        {/* 1st layer: background image*/}
        <img alt="arka plan görseli" src={selectedBG} className={placement} />
        {/* 2nd layer: text color*/}
        {textBG && (
          <img alt="yazı arka planı" src={textBG} className={placement} />
        )}
        {/* 3rd layer: text */}
        {withTitle && (
          <span
            className={`z-10 pt-6 pl-7 arial-font font-semibold ${
              textBG == blackBG ? "text-white" : "text-black"
            }`}
          >
            {baslik}
          </span>
        )}
        <textarea
          className={`z-10 ${
            withTitle ? "pb-6" : "py-6"
          } px-7 h-full overflow-scroll arial-font bg-transparent ${
            textBG == blackBG ? "text-white" : "text-black"
          }`}
          defaultValue={defaultValue}
        ></textarea>
      </Card>
    );
  }
);

OtherPreviewCell.displayName = "OtherPreviewCell";
