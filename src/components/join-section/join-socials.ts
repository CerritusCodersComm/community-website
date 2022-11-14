import {IconType} from "react-icons";
import {FaDiscord, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {discord, instagram, linkedin, twitter} from "../../utils/links";

interface JoinSocials {
    Icon: IconType;
    label: string;
    url: string;
}

export const joinSocials: JoinSocials[] = [
    {
        Icon: FaDiscord,
        label: "Discord",
        url: discord,
    },
    {
        Icon: FaTwitter,
        label: "Twitter",
        url: twitter,
    },
    {
        Icon: FaLinkedin,
        label: "LinkedIn",
        url: linkedin,
    },
    {
        Icon: FaInstagram,
        label: "Instagram",
        url: instagram,
    },
];