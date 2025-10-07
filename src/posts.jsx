import { useEffect, useState } from 'react';
import Post from './post';

export default function Posts({ postsPromise }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsPromise.then((data) => setPosts(data));
  }, [postsPromise]);

  if (posts.length === 0) {
    return <h4>Loading posts...</h4>;
  }

  return (
    <div className="card">
      <h2>All posts are here: {posts.length}</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
