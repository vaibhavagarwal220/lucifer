import React from 'react';
import { NavLink } from "react-router-dom";
import NavHeaderCSS from './NavHeader.module.css';
import { Icon } from '@fluentui/react/lib/Icon';

const NavHeader = () => {
  return (
    <div className={NavHeaderCSS.navHeader}>
        <Icon className={NavHeaderCSS.navAppIcon} iconName="Glasses" />
        <ul className={NavHeaderCSS.navList}>
            <li className={NavHeaderCSS.navItem}>
                <NavLink activeClassName={NavHeaderCSS.navHrefActive} className={NavHeaderCSS.navHref} to="/shows">Shows</NavLink>
            </li>
            <li className={NavHeaderCSS.navItem}>
                <NavLink activeClassName={NavHeaderCSS.navHrefActive} className={NavHeaderCSS.navHref} to="/people">People</NavLink>
            </li>
        </ul>
    </div>
    ); 
}

export default NavHeader;
