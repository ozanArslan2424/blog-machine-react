import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";

export default function HamburgerMenu() {
    return (
        <Dropdown>
            <DropdownTrigger><FontAwesomeIcon icon={faBars} size="xl" className="my-2 hover:cursor-pointer" /></DropdownTrigger>
            <DropdownMenu
                aria-label="Diğer Siteler Menüsü"
                disabledKeys={["title"]}
            >

                <DropdownItem
                    aria-label="Menü Başlığı"
                    key="title">
                    Diğer Sitelerimiz
                </DropdownItem>

                <DropdownItem
                    aria-label="TPÖÇG Web Sitesi"
                    key="site">
                    TPÖÇG Web
                </DropdownItem>

                <DropdownItem
                    aria-label="PsiNossa Dergi"
                    key="dergi">
                    PsiNossa Dergi
                </DropdownItem>

                <DropdownItem
                    aria-label="Akıl Defterim Blog"
                    key="blog">
                    Akıl Defterim Blog
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    )
}
