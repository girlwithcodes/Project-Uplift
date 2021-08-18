import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PostCard from '../../Components/PostCard/PostCard';
import './Blessings.css';

function Blessings(props) {
  const orderedPosts = [...props.posts].reverse();

  useEffect(()=>{
    props.setToggleGetPublicPosts((prevToggle)=>!prevToggle); 
  },[])

  return (
    <div className = "public-posts-page">
      <h2 className="public-posts-title">Blessings</h2>
      <div className = "post-cards-div">
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 550: 2, 800: 3, 1050: 4, 1300: 5, 1550: 6}}>
            <Masonry>
            {orderedPosts?.map((post)=>(
              <Link to={`/post/${post.id}`} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
            </Masonry>
          </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Blessings;