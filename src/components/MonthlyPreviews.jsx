/* eslint-disable react/prop-types */

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Card } from "@nextui-org/react";
import { toJpeg } from "html-to-image";
//images
import Back from "/monthly/back-color.png";
import CoverBG from "/monthly/cover.png";
import TextBG from "/monthly/oneri-wbg.png";

const placement = "absolute z-auto";

const MonthlyPreviews = forwardRef(
  (
    {
      okuGorsel,
      dinleGorsel,
      izleGorsel,
      okuBaslik,
      dinleBaslik,
      izleBaslik,
      bonusBaslik,
    },
    ref
  ) => {
    const generateImages = () => {
      const nodes = printCellRefs.current;
      const promises = Array.from(nodes).map((node, index) =>
        toJpeg(node, { quality: 1 })
          .then((dataUrl) => ({ dataUrl, index }))
          .catch((error) => {
            console.error("oops, something went wrong!", error);
            return { error, index }; // Return an error object
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
            link.download = `blog_${result.index}.jpeg`;
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
      printCellRefs.current = printCellRefs.current.slice(0, 6); //take a look at this line
    }, []);

    return (
      <Card
        radius="sm"
        shadow="sm"
        className="flex flex-row flex-wrap gap-4 p-4 max-w-[908px] min-w-[462px]"
      >
        <CoverPreviewCell
          ref={(el) => (printCellRefs.current[0] = el)}
          okuGorsel={okuGorsel}
          dinleGorsel={dinleGorsel}
          izleGorsel={izleGorsel}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[1] = el)}
          withTitle={true}
          baslikType="Ayın Önerileri"
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[2] = el)}
          withTitle={true}
          baslikType="Oku: "
          baslikText={okuBaslik}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[3] = el)}
          withTitle={false}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[4] = el)}
          withTitle={true}
          baslikType="Dinle: "
          baslikText={dinleBaslik}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[5] = el)}
          withTitle={false}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[6] = el)}
          withTitle={true}
          baslikType="İzle: "
          baslikText={izleBaslik}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[7] = el)}
          withTitle={false}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[8] = el)}
          withTitle={true}
          baslikType="Bonus: "
          baslikText={bonusBaslik}
        />
        <OtherPreviewCell
          ref={(el) => (printCellRefs.current[9] = el)}
          withTitle={false}
        />
      </Card>
    );
  }
);

MonthlyPreviews.displayName = "MonthlyPreviews";
export default MonthlyPreviews;

const CoverPreviewCell = forwardRef(
  ({ okuGorsel, dinleGorsel, izleGorsel }, ref) => {
    return (
      <Card
        ref={ref}
        radius="sm"
        shadow="sm"
        className="bg-white w-[430px] h-[500px]"
      >
        {/* 1st layer: back */}
        <img src={Back} className={placement} />
        {/* 2nd layer: images */}
        <img
          src={okuGorsel}
          alt="oku görseli buraya"
          className={`w-[118px] h-[113px] bottom-[109px] left-[35px] ${placement}`}
        />
        <img
          src={dinleGorsel}
          alt="dinle görseli buraya"
          className={`w-[118px] h-[113px] bottom-[109px] left-[159px] ${placement}`}
        />
        <img
          src={izleGorsel}
          alt="izle görseli buraya"
          className={`w-[118px] h-[113px] bottom-[109px] left-[282px] ${placement}`}
        />
        {/* 3rd layer: background image*/}
        <img src={CoverBG} className={placement} />
      </Card>
    );
  }
);

CoverPreviewCell.displayName = "CoverPreviewCell";

const OtherPreviewCell = forwardRef(
  ({ withTitle, baslikType, baslikText }, ref) => {
    const defaultValue = useMemo(() => "Buraya metin girin.", []);

    return (
      <Card
        ref={ref}
        radius="sm"
        shadow="sm"
        className="bg-white w-[430px] h-[500px]"
      >
        {/* 1st layer: background image*/}
        <img src={TextBG} className={placement} />
        {/* 2nd layer: text */}
        {withTitle && (
          <span className="z-10 pt-6 pl-7 arial-font font-semibold text-black">
            {baslikType}
            {baslikText}
          </span>
        )}
        <textarea
          className={`${
            withTitle ? "pb-6" : "py-6"
          } z-10 px-7 h-full overflow-scroll arial-font bg-transparent text-black`}
          defaultValue={defaultValue}
        ></textarea>
      </Card>
    );
  }
);

OtherPreviewCell.displayName = "OtherPreviewCell";
