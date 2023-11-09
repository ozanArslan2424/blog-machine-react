import {
  faArrowCircleDown,
  faLink,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Divider } from "@nextui-org/react";

const InfoCard = () => {
  const navigateToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      radius="sm"
      shadow="sm"
      className="flex flex-col gap-2 w-[336px] h-min p-4 shrink-0"
    >
      <h2>
        <FontAwesomeIcon icon={faList} className="mr-2" />
        Diğer siteler:
      </h2>

      <Divider />

      <ul id="website-list" className="text-sm">
        <li>
          <a aria-label="TPÖÇG Web Sitesi" href="https://www.tpocg.org">
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            TPÖÇG Websitesi
          </a>
        </li>

        <li>
          <a aria-label="PsiNossa Dergi" href="http://psinossa.tpocg.org">
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            PsiNossa Dergi
          </a>
        </li>

        <li>
          <a
            aria-label="Akıl Defterim Blog"
            href="https://www.tpocg.org/blog/category/blog"
          >
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            Akıl Defterim Blog
          </a>
        </li>
      </ul>

      <Divider />
      <Button
        radius="sm"
        shadow="sm"
        variant="faded"
        onPress={() => navigateToFooter()}
      >
        <FontAwesomeIcon icon={faArrowCircleDown} />
        En alta git.
      </Button>
    </Card>
  );
};

export default InfoCard;
