import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOnePost, createPost, updatePost, deletePost } from '../../Services/posts';
import { createBoard } from '../../Services/boards.js';
import { plusIcon } from '../../Assets/Icons';
import './PostDetail.css';

function PostDetail({ user, post, setPost, userBoards, setUserBoards, setUserPosts}){

  const [postData, setPostData] = useState({});

  const [createBoardForm, setCreateBoardForm] = useState({
    name: '',
    description: '',
    cover_image_url: '',
    background_color: '#FFFFFF',
    background_url: '',
    font: 'Arial',
    font_color: '#000000',
    user_id: user?.id
  })

  const [publicStatus, setPublicStatus] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(()=>{
    const getPost = async() => {
      const postDetails = await getOnePost(params.id);
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
      const updatedPost = await updatePost(user?.id, post.board_id, params.id, postData);
      setPost(updatedPost);
    }
    if(user && post && Object.keys(post).length!==0 && postData && Object.keys(postData).length!==0){
      updatePostStatus();
    }
  }, [publicStatus])


  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData({
      ...post,
      [name]: value,
      user_id: user.id
    })
  }

  const handleNBChange = (e)=> {
    const {name, value} = e.target;
    setCreateBoardForm({
      ...createBoardForm, 
      [name]:value,
      user_id: user.id
    })
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    setCreateBoardForm({
      ...createBoardForm,
      name: ""
    })
    if(user){
      const newBoard = await createBoard(user.id, createBoardForm);
      setUserBoards((prevBoards)=>[...prevBoards, newBoard]);
    } 
  }

  const handleDelete = async(postID) => {
    if(post && Object.keys(post).length!==0) {
      await deletePost(post.user_id, post.board_id, params.id);
      setUserPosts((prevPosts)=>(prevPosts.filter(post=> post.id!==postID)))
      //user/:userID/boards/:id
      history.push(`/user/${user.id}/boards/${post.board_id}`);
    }
  }

  const shareButton = () => {
    return(
      <button onClick={updatePublicStatus} className="post-detail-button">
        { post.is_public ? "Unshare" : "Share" }
      </button> 
    )
  }

  const newBoardForm = (
    <form className="new-board-form" onSubmit={handleSubmit}>
      <div className="label-input-cb">
        <input 
          type="text"
          className = "cb-input-pd"
          id="name"
          name="name"
          placeholder="New Board Name"
          value={createBoardForm.name}
          onChange={handleNBChange}
        />
      </div>
      <div className="new-board-button-div">
        <button id="plus-icon-button" className="add-board-button">{plusIcon}</button>
        <label htmlFor="plus-icon-button">add new board</label>
      </div>
    </form>
  )
  
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
              <option value="" selected disabled="disabled"> My boards</option>
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
            <button className="post-detail-button" onClick={()=>handleDelete(params.id)}>Delete Post</button>
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
            <div className="new-board-div">
              {newBoardForm}
            </div>
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