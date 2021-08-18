import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOnePost, createPost, updatePost, getPublicPosts } from '../../Services/posts';
import './PostDetail.css';

function PostDetail({ user, post, setPost, userBoards, setPublicPosts }){

  const [postData, setPostData] = useState({});
  const [publicStatus, setPublicStatus] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(()=>{
    const getPost = async() => {
      const postDetails = await getOnePost(params.id);
      setPost(postDetails);
      setPostData(postDetails);
      setPublicStatus(postDetails.is_public);
      console.log(postDetails);
    }
    getPost();
  },[])

  useEffect(()=>{
    console.log(publicStatus);
    setPostData({
      ...postData,
      is_public: publicStatus
    })
    console.log(postData);
    const updatePostStatus = async() => {
      const updatedPost = await updatePost(user?.id, post.board_id, params.id, postData);
      setPost(updatedPost);
      console.log(updatedPost);
    }
    if(user && post && Object.keys(post).length!==0 && postData && Object.keys(postData).length!==0){
      updatePostStatus();
    }
  }, [publicStatus])

  // useEffect(()=> {
  //   const getAllPublicPosts = async() => {
  //     const posts = await getPublicPosts();
  //     setPublicPosts(posts);
  //     history.push(`/post/${params.id}`);
  //   }
  //   getAllPublicPosts();
  // }, [post])


  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData({
      ...post,
      [name]: value,
      // user_id: user.id
    })
    console.log(postData);
  }

  const updatePublicStatus = () => {
    setPublicStatus((prevStatus)=>!prevStatus);
  }


  const savePostCopy = async(e) => {
    e.preventDefault();
    const newPost = await createPost(user.id, postData.board_id, postData);
    setTimeout(()=>{
      history.push(`/user/${user.id}/boards/${postData.board_id}`);
    }, 200);
  }

  const shareButton = () => {
    return(
      <button onClick={updatePublicStatus} className="post-detail-button">
        { post.is_public ? "Unshare" : "Share" }
      </button> 
    )
  }
  
  if(post && Object.keys(post).length!==0 && post.id==params.id) {

    const style = {
      backgroundImage: `url(${post.background_url})`,
      backgroundColor: post.background_color,
      color: post.font_color,
      fontFamily: post.font,
      fontSize: post.font_size.toString() + "px"
    }

    const boardMenu = () => {
      if(user && userBoards.length!==0) {
        return (
          <form className="board-select-menu" onSubmit={savePostCopy}>
            <label 
              htmlFor="board-select"
              className="pd-label"
              >Save Copy to a Board
            </label>
            <select 
              id="board-select"
              className="board-select-det"
              name="board_id"
              onChange={handleChange}
              >
              <option default disabled> My boards</option>
              {userBoards.map((board)=>(
                <option value={board.id} key={board.id}>{board.name}</option>
              ))}
            </select>
            <button className="post-detail-button">Save</button>
          </form>
        )
      }
    }

    const postOptions = () => {
      if(user && user.id === post.user_id) {
        return (
          <div className="post-owner-options">
            <Link to={`/post/edit/${params.id}`}>
              <button className="post-detail-button">Edit Post</button>
            </Link>
            <button className="post-detail-button">Delete Post</button>
            {shareButton()}
          </div>
        )
      }
    }

    const detailCard = () => {
      return (
        <div className = "post-detail-card">
          <div className="post-image-text" style={style}>
            {post.image_url && 
              <img src={post.image_url} className="post-detail-image"/>
            }
            <p className="post-detail-text">{post.content}</p>
          </div>

          <div className = "post-options">
            {postOptions()}
            {boardMenu()}
          </div>

        </div>
      )
    }

    return (
      <div className = "post-detail-page">
        {detailCard()}
      </div>
    )
  } else {
    return (
      <div className = "post-detail-page">
        Loading..
      </div>
    )
  }
}

export default PostDetail;