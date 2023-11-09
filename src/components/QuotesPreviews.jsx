/* eslint-disable react/prop-types */
import { Card } from "@nextui-org/react";
import { toJpeg } from "html-to-image";
import { forwardRef, useImperativeHandle, useRef } from "react";
import alintiBG from "/quotes/alinti-bg.png";

const QuotesPreviews = forwardRef(({ cover }, ref) => {
  const printCellRef = useRef(null);

  const generateImages = () => {
    const node = printCellRef.current;
    if (node) {
      toJpeg(node, { quality: 1 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `blog.jpeg`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  useImperativeHandle(ref, () => ({
    generateImages,
  }));

  return (
    <Card
      radius="sm"
      shadow="sm"
      className="flex flex-row flex-wrap gap-4 p-4 max-w-[908px]"
    >
      <Card
        ref={printCellRef}
        radius="sm"
        shadow="sm"
        className="bg-white w-[430px] h-[500px]"
      >
        {/* 1st layer: background*/}
        <img src={alintiBG} className="absolute z-auto h-full w-full" />
        {/* 2nd layer: image */}
        <div className="flex justify-center content-center absolute z-10 w-full h-full">
          <div className="absolute frame-border mt-6">
            <img src={cover} className="h-min w-64" />
          </div>
        </div>
      </Card>
    </Card>
  );
});

QuotesPreviews.displayName = "QuotesPreviews";
export default QuotesPreviews;
