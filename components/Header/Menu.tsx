import { menuItems } from "./config";
import NavItem from "./NavItem";

interface Props {
  currentPath: string;
}

export default function Menu({ currentPath }: Props) {
  return (
    <ul className="flex items-center justify-around space-x-6 md:justify-end md:space-x-14">
      {menuItems.map((item) => (
        <li key={item.label}>
          <NavItem
            url={item.url}
            isActive={currentPath === item.url}
            icon={item.icon}
            extra={item.extra}
            isMobileOnly={item.mobileOnly}
            label={item.label}
          />
        </li>
      ))}
    </ul>
  );
}
