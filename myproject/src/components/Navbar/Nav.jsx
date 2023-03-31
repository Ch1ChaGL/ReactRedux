import c from './Nav.module.css';

const Nav = () => (
  <nav className={c.nav}>
    <div className={c.item}>
      <a href="/profile">Profile</a>
    </div>
    <div className={c.item}>
      <a href="/dialogs">Messages</a>
    </div>
    <div className={c.item}>
      <a href="https://github.com/Ch1ChaGL">News</a>
    </div>
    <div className={c.item}>
      <a href="https://github.com/Ch1ChaGL">Music</a>
    </div>
    <div className={c.item}>
      <a href="https://github.com/Ch1ChaGL">Settings</a>
    </div>
  </nav>
);

export { Nav };


