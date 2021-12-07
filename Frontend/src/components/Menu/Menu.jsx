import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineClipboardList } from "react-icons/hi";

import styles from "./Menu.module.css";

export function Menu() {
  const links = [
    {
      icon: <HiOutlineHome className={styles.navButtonIcon} />,
      path: "/",
      title: "Início",
    },
    {
      icon: <HiOutlineClipboardList className={styles.navButtonIcon} />,
      path: "/registro",
      title: "Registro",
    },
  ];

  const nav_links = links.map((link, index) => {
    return (
      <li key={index}>
        <NavLink
          to={link.path}
          className={(props) =>
            props.isActive ? styles.active : styles.notActive
          }
          title={link.title}
        >
          {link.icon}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={styles.container}>
      <ul>{nav_links}</ul>
    </nav>
  );
}
