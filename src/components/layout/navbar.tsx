import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState("EN");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navGroup}>
        <div className={styles.logo}>WOWUP</div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Dịch vụ</Link>
          </li>
          <li>
            <Link href="/">Dự án</Link>
          </li>
          <li>
            <Link href="/">Bài viết</Link>
          </li>
        </ul>
      </div>
      <div className={styles.endnav}>
        <div className={styles.languageDropdown}>
          <button onClick={toggleDropdown} className={styles.languageButton}>
            {language} ▼
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li onClick={() => changeLanguage("EN")}>EN</li>
              <li onClick={() => changeLanguage("VN")}>VN</li>
            </ul>
          )}
        </div>
        <button>Hồ sơ công ty</button>
        <button>Liên hệ</button>
      </div>
    </nav>
  );
};

export default Navbar;
