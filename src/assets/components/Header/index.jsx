import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <div className={styles.header_white}>
        <ul className={styles.header_ul}>
          <li className={styles.header_li}><a href="#" className={styles.header_a_white}>Simplifique</a></li>
          <li className={styles.header_li}><a href="#" className={styles.header_a_white}>Participe</a></li>
          <li className={styles.header_li}><a href="#" className={styles.header_a_white}>Legislação</a></li>
        </ul>
      </div>
      <div className={styles.header_green}>
        <ul className={styles.header_ul}>
        <span className={styles.header_deep_green}>Instituto Federal do Piauí</span>
          <li className={styles.header_li}><a href="#" className={styles.header_a_green}>Contatos</a></li>
          <li className={styles.header_li}><a href="#" className={styles.header_a_green}>E-mail</a></li>
          <li className={styles.header_li}><a href="#" className={styles.header_a_green}>Ouvidoria</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
