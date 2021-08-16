import './PostCard.css';

function PostCard({ post }) {
  const fontSz = post.font_size.toString() + "px";
  const style = {
    backgroundImage: `url(${post.background_url})`,
    backgroundColor: post.background_color,
    color: post.font_color,
    fontFamily: post.font,
    fontSize: fontSz
    
  }
  
  const cardClasses = post.background_url && post.background_url.length!==0 ? "post-card background" : "post-card"

  if(post.image_url) {
    return (
      <div 
        className={cardClasses}
        style = {style}>
        <div className="post-image-div">
          <img src={post.image_url} className = "post-image" />
        </div>
        <div className="post-text">
          <p className="post-content-p">{post.content}</p>
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