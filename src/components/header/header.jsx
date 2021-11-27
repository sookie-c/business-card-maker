import React, { memo } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        LogOut
      </button>
    )}

    <FontAwesomeIcon className={styles.logo} icon={faAddressCard} />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
));

export default Header;
