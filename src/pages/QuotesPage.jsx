import { useRef, useState } from "react";
import QuotesBoard from "../components/QuotesBoard";
import QuotesPreviews from "../components/QuotesPreviews";
import InfoCard from "../components/ui/InfoCard";

const QuotesPage = () => {
  const [cover, setCover] = useState(null);
  const previewsRef = useRef();
  const handleGenerateImages = () => previewsRef.current.generateImages();

  return (
    <div className="flex responsive-flex justify-center gap-4 p-4 w-screen">
      <div className="flex flex-col gap-4">
        <QuotesBoard
          onGenerateImages={handleGenerateImages}
          uploadCover={(cover) => {
            setCover(cover);
          }}
        />
        <InfoCard />
      </div>
      <QuotesPreviews cover={cover} ref={previewsRef} />
    </div>
  );
};

export default QuotesPage;
