import { NavLink } from 'react-router-dom';
import c from './Nav.module.css';

const Nav = () => (
  <nav className={c.nav}>
    <div className={c.item}>
      <NavLink
        to="/profile"
        className={navData => (navData.isActive ? c.active : c.item)}
      >
        Profile
      </NavLink>
    </div>
    <div className={c.item}>
      <NavLink
        to="/dialogs"
        className={navData => (navData.isActive ? c.active : c.item)}
      >
        Messages
      </NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="https://github.com/Ch1ChaGL">News</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="https://github.com/Ch1ChaGL">Music</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to="https://github.com/Ch1ChaGL">Settings</NavLink>
    </div>
  </nav>
);

export { Nav };
