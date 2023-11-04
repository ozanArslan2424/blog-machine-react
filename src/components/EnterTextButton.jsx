import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";

export default function EnterTextButton() {
    return (
        <Button variant="flat" color="primary" radius="sm">
        <FontAwesomeIcon icon={faPen} />
        Metin gir.</Button>
    )

}
