import React from 'react';
import classes from './NavigationItems.css';
import NavItem from './NavItem/NavItem';
const navItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link='/' active={true}>Burger Builder</NavItem>
    <NavItem>Checkout</NavItem>
  </ul>
);

export default navItems;