import c from './MyPosts.module.css';
import { Post } from './Post/Post';
const Posts = () => (
  <div>
    My posts
    <div>new post</div>
    <div className={c.posts}>
      <Post message="Hi, how are u?" likesCount="23" />
      <Post message="Its my first post" likesCount="0" />
      <Post message="post 3" />
      <Post message="post 4" />
      <Post message="post 5" />
    </div>
  </div>
);

export { Posts };
