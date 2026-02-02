import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
  const navLinks = [
    { id: 0, label: "Browse Meals", link: "/meals" },
    { id: 1, label: "Foodies Community", link: "/community" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logoImg.src} alt="A plate with food on it" />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
