import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navGroup}>
        <div className={styles.logo}>
           WOWUP
        </div>

        <div className={styles.info}>
          <div>
            <span>Email:</span>
            <a href="mailto:sale@wowup.vn">sale@wowup.vn</a>
          </div>
          <div>
            <span>Điện thoại:</span>
            <a href="tel:+84818990465">(+84)818 990 465</a>
          </div>
          <div>
            <span>Trụ sở chính:</span>
            <a href="#">Số 75A Minh Khai, phường Lê Mao, thành phố Vinh, Nghệ An</a>
          </div>

          <div className={styles["social-icons"]}>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
          </div>
        </div>

        <div className={styles.info2}>
          <a href="#">Trang chủ</a>
          <a href="#">Dịch vụ</a>
          <a href="#">Dự án</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
