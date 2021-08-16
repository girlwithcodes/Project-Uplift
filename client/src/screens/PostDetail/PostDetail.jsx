import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOnePost, createPost, updatePost } from '../../Services/posts';
import './PostDetail.css';

function PostDetail({ user, post, setPost, userBoards }){

  const [postData, setPostData] = useState({});
  const [publicStatus, setPublicStatus] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(()=>{
    const getPost = async() => {
      const postDetails = await getOnePost(params.id);
      console.log(postDetails);
      setPost(postDetails);
      setPostData(postDetails);
      setPublicStatus(postDetails.is_public);
    }
    getPost();
  },[])

  useEffect(()=>{
    setPostData({
      ...postData,
      is_public: publicStatus
    })

    const updatePostStatus = async() => {
      const updatedPost = await updatePost(user.id, post.board_id, post.id, postData);
      setPost(updatedPost);
      console.log(updatedPost);
    }
    updatePostStatus();
  }, [publicStatus])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData({
      ...post,
      [name]: value,
      user_id: user.id
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
  
  if(post && Object.keys(post).length!==0 && post.id==params.id) {

    const style = {
      backgroundImage: `url(${post.background_url})`,
      backgroundColor: post.background_color,
      color: post.font_color,
      fontFamily: post.font
    }

    const boardMenu = () => {
      if(user && userBoards.length!==0) {
        return (
          <form className="board-select-menu" onSubmit={savePostCopy}>
            <label htmlFor="board-select">Save Copy to a Board</label>
            <select 
              id="board-select"
              name="board_id"
              onChange={handleChange}
              >
              <option default disabled> My boards</option>
              {userBoards.map((board)=>(
                <option value={board.id} key={board.id}>{board.name}</option>
              ))}
            </select>
            <button>Save</button>
          </form>
        )
      }
    }

    const postOptions = () => {
      if(user && user.id === post.user_id) {
        return (
          <div className="post-owner-options">
            <Link to={`/post/edit/${params.id}`}>
              <button>Edit Post</button>
            </Link>
            <button>Delete Post</button>
            <button onClick={updatePublicStatus}>
              { post.is_public ? "Unshare" : "Share" }
            </button>  
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
            <p>{post.content}</p>
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