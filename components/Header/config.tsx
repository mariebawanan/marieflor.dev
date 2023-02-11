import { AiOutlineHome } from "react-icons/ai";
import { RiChat1Line, RiCodeLine, RiUserHeartLine } from "react-icons/ri";
import { MenuItem, Page } from "./types";

const menuItems: MenuItem[] = [
  {
    label: "home",
    icon: <AiOutlineHome />,
    extra: "home",
    url: Page.Home,
    mobileOnly: true,
  },
  {
    label: "about",
    icon: <RiUserHeartLine />,
    extra: "more of me",
    url: Page.About,
  },
  {
    label: "projects",
    icon: <RiCodeLine />,
    extra: "my work",
    url: Page.Projects,
  },
  {
    label: "contact",
    icon: <RiChat1Line />,
    extra: "say hi :)",
    url: Page.Contact,
  },
];

export { menuItems };
