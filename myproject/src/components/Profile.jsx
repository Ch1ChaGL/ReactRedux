
import c from './Profile.module.css';
const Profile = () => (
  <div className="content">
    <div>
      <img
        className={c.billboard}
        src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
      ></img>
    </div>
    <div>ava + description</div>
    <div>
      my posts
      <div>new post</div>
      <div className={c.posts}>
        <div className={c.item}>Post 1</div>
        <div className={c.item}>Post 2</div>
      </div>
    </div>
  </div>
);

export { Profile };
