/* eslint-disable react/prop-types */

import { Card } from '@nextui-org/react';
import React, { forwardRef, useEffect, useMemo, useState } from 'react';
//images
import CoverBG from "../assets/monthly/cover.svg";
import TextBG from "../assets/monthly/oneri-wbg.png";

const placement = 'absolute z-auto';

const MonthlyPreviews = forwardRef(({okuBaslik, dinleBaslik, izleBaslik, bonusBaslik}, ref) => { 
    return (
        <Card
            radius="sm"
            shadow="sm"
            className="flex flex-row flex-wrap gap-4 p-4 max-w-[908px] min-w-[462px]">
            <CoverPreviewCell />
            <OtherPreviewCell withTitle={true} baslikType="Ayın Önerileri"  />
            <OtherPreviewCell withTitle={true} baslikType="Oku: " baslikText={okuBaslik} />
            <OtherPreviewCell withTitle={false} />
            <OtherPreviewCell withTitle={true} baslikType="Dinle: " baslikText={dinleBaslik} />
            <OtherPreviewCell withTitle={false} />
            <OtherPreviewCell withTitle={true} baslikType="İzle: " baslikText={izleBaslik} />
            <OtherPreviewCell withTitle={false} />
            <OtherPreviewCell withTitle={true} baslikType="Bonus: " baslikText={bonusBaslik} />
            <OtherPreviewCell withTitle={false} />
        </Card>
    );
});

MonthlyPreviews.displayName = 'MonthlyPreviews';
export default MonthlyPreviews;



const CoverPreviewCell = forwardRef(({ props }, ref) => {

    return (
        <Card ref={ref} radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            {/* 1st layer: image1 */}
            <img src="/avatar-1577909_1280.webp" alt="" className={` w-[118px] h-[113px] bottom-[109px] left-[35px] ${placement}`}/>
            {/* 2nd layer: image2 */}
            <img src="/avatar-1577909_1280.webp" alt="" className={` w-[118px] h-[113px] bottom-[109px] left-[159px] ${placement}`}/>
            {/* 3rd layer: image3 */}
            <img src="/avatar-1577909_1280.webp" alt="" className={` w-[118px] h-[113px] bottom-[109px] left-[283px] ${placement}`}/>
            {/* 4th layer: background image*/}
            <img src={CoverBG} className={placement} />

        </Card>
    );
});

CoverPreviewCell.displayName = 'CoverPreviewCell';

const OtherPreviewCell = forwardRef(({ withTitle, baslikType, baslikText }, ref) => {

    const defaultValue = useMemo(() => "Buraya metin girin.", []);

    return (
        <Card ref={ref} radius="sm" shadow="sm" className="bg-white w-[430px] h-[500px]">
            {/* 1st layer: background image*/}
            <img src={TextBG} className={placement} />
            {/* 2nd layer: text */}
            {withTitle && (<span className="z-10 pt-6 pl-7 arial-font font-semibold text-black">{baslikType}{baslikText}</span>)}
            <textarea
                className={`${withTitle ? "pb-6" : "py-6"} z-10 px-7 h-full overflow-scroll arial-font bg-transparent text-black`}
                defaultValue={defaultValue}
            >
            </textarea>
        </Card>
    );
});

OtherPreviewCell.displayName = 'OtherPreviewCell';