import './PostCard.css';

function PostCard({ post }) {
  const style = {
    backgroundImage: `url(${post.background_url})`,
    backgroundColor: post.background_color,
    color: post.font_color,
    fontFamily: post.font
  }
  console.log(post);

  if(post.image_url) {
    return (
      <div 
        className="post-card"
        style = {style}>
        <div className="post-image-div">
          <img src={post.image_url} className = "post-image" />
        </div>
        <div className="post-text">
          {post.content}
        </div>
      </div>
    )
  }  else {
    return (
      <div 
        className="post-card"
        style = {style}>
        <div className="post-text">
          {post.content}
        </div>
      </div>
    )
  }
}

export default PostCard;