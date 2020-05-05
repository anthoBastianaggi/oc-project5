import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import NavbarRight from './navbar-right/NavbarRight';
import Sidebar from './sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import { useRouteMatch } from 'react-router-dom';

const Header = () => {
  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const container = useRef();
  
  const menuItems = [
    { id: "home", href: "/home", label: "home", isActive:  useRouteMatch("/home") },
    { id: "about", href: "/about", label: "about", isActive:  useRouteMatch("/about") },
    { id: "skills", href: "/skills", label: "skills", isActive:  useRouteMatch("/skills") },
    { id: "services", href: "/services", label: "services", isActive:  useRouteMatch("/services") },
    { id: "portfolio", href: "/portfolio", label: "portfolio", isActive:  useRouteMatch("/portfolio") },
    { id: "contact", href: "/contact", label: "contact", isActive:  useRouteMatch("/contact") }
  ];
  
  const BtnMenuBurger = () => (
    <div className={styles.btnMenuSidebarContainer}>
      <button className={styles.btnMenuSidebar} onClick={openMenuBurger}>
        {menuSidebarOpen ?
          <FontAwesomeIcon className={styles.iconMenu} icon={faTimes} />
          : 
          <FontAwesomeIcon className={styles.iconMenu} icon={faBars} /> 
        }
      </button>
    </div>
  )

  function openMenuBurger() {
    setMenuSidebarOpen(true);
  }

  function setIsOpen(bool) {
    setMenuSidebarOpen(bool);
  }

  function handleClickOutside(e) {
    if(container.current && !container.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  function setSidebarRef(ref) {
    container.current = ref;
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener("click", handleClickOutside, true);
    return function cleanup() {
      document.removeEventListener('scroll', handleScroll);
      document.addEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <header className={cx({ [styles.headerScroll]: scrolled }, styles.header)}>
      <nav className={cx({ [styles.active] : menuSidebarOpen }, styles.navigation)}>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
              <span className={styles.headerTitle}>BASTIANAGGI Anthony</span>
            <BtnMenuBurger />
          </div>
          <Sidebar
            className={cx(styles.sidebar, { [styles.sidebarActive]: menuSidebarOpen })}
            setSidebarRef={setSidebarRef}
            data={menuItems}
            opened={menuSidebarOpen}
          />
          <NavbarRight data={menuItems} scrolled={scrolled} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
