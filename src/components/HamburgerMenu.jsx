import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

export default function HamburgerMenu() {
  return (
    <Dropdown>
      <DropdownTrigger
          className="hover:cursor-pointer mr-[35px]"
          >
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Diğer Siteler Menüsü" disabledKeys={["title"]}>
        <DropdownItem aria-label="Menü Başlığı" key="title">
          Diğer Sitelerimiz
        </DropdownItem>

        <DropdownItem
          aria-label="TPÖÇG Web Sitesi"
          key="site"
          href="https://www.tpocg.org"
        >
          TPÖÇG Web
        </DropdownItem>

        <DropdownItem
          aria-label="PsiNossa Dergi"
          key="dergi"
          href="http://psinossa.tpocg.org"
        >
          PsiNossa Dergi
        </DropdownItem>

        <DropdownItem
          aria-label="Akıl Defterim Blog"
          key="blog"
          href="https://www.tpocg.org/blog/category/blog"
        >
          Akıl Defterim Blog
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
