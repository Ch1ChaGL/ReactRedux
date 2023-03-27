import c from './Profile.module.css';
import { Posts } from './MyPosts/MyPosts';
const Profile = () => (
  <div className="content">
    <div>
      <img
        className={c.billboard}
        src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
      ></img>
    </div>
    <div>ava + description</div>
    <Posts />
  </div>
);

export { Profile };
