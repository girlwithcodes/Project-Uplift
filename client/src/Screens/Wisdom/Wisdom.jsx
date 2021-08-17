
import { Link } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import './Wisdom.css';

function Wisdom(props) {
  const orderedPosts = [...props.posts].reverse();

  return (
    <div className = "public-posts-page">
      <h2>Wisdom</h2>
      <div className = "post-cards-div">
      {orderedPosts?.map((post)=>(
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostCard post={post} />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Wisdom;