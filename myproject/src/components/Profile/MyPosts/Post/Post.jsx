import c from './Post.module.css';
const Post = props => (
  <div className={c.item}>
    <img src="https://cs12.pikabu.ru/post_img/big/2022/10/24/2/1666571824193118478.jpg" />
    {props.message} <span>like</span> {props.likesCount}
  </div>
);

export { Post };
