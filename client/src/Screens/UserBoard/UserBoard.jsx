import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { getUserBoard, editBoard } from '../../Services/boards';
import { getBoardPosts } from '../../Services/posts';
import PostCard from '../../Components/PostCard/PostCard';
import BoardCard from '../../Components/BoardCard/BoardCard';
import './UserBoard.css';

function UserBoard({user, board, setBoard}) {


  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [editBoardForm, setEditBoardForm] = useState({
    name: '',
    description: '',
    cover_image_url: '',
    background_color: '',
    background_url: '',
    font: '',
    font_color: '',
    user_id: params.userID
  });
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const fontChoices = [['Arial'], ['Caveat', ' cursive'], ['Courgette', ' cursive'], ['Crimson Pro', ' serif'], ['Dancing Script', ' cursive'], ['Delius Swash Caps', ' cursive'], ['Emilys Candy', ' cursive'], ['Gothic A1', 'sans-serif'], ['Hachi Maru Pop', ' cursive'], ['Inconsolata', ' monospace'], ['Indie Flower', ' cursive'], ['Itim', ' cursive'], ['Lato', ' sans-serif'], ['Oldenburg', ' cursive'], ['Pacifico', ' cursive'], ['Poiret One', ' cursive'], ['Poppins', ' sans-serif'], ['Quicksand', ' sans-serif'], ['Sacramento', ' cursive'], ['Seaweed Script', ' cursive'], ['Shadows Into Light', ' cursive'], ['Taviraj', 'serif'], ['Tenali Ramakrishna', ' sans-serif'], ['Yomogi', ' cursive']];

  const style = editFormVisibility ? 
    {
      backgroundImage: `url(${editBoardForm.background_url})`,
      backgroundColor: editBoardForm.background_color,
      color: editBoardForm.font_color,
      fontFamily: editBoardForm.font,
    }
    : 
    {
      backgroundImage: `url(${board.background_url})`,
      backgroundColor: board.background_color,
      color: board.font_color,
      fontFamily: board.font,
    }


  useEffect(()=>{
    const fetchBoard = async() => {
      const userBoard = await getUserBoard(params.userID, params.id);
      setBoard(userBoard);
      setEditBoardForm(userBoard);
    }
    fetchBoard();
  },[])

  useEffect(()=>{
    const fetchPosts = async() => {
      const boardPosts = await getBoardPosts(params.userID, params.id);
      console.log(boardPosts)
      setPosts([...boardPosts].reverse());
    }
    fetchPosts();
  },[])

  const toggleEditForm = () => {
    setEditFormVisibility((editFormVisibility)=>!editFormVisibility);
  }

  const setEditFormClass = () => {
    return editFormVisibility ? "edit-board-form-div" : "edit-board-form-div invisible"
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBoardForm({
      ...editBoardForm,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedBoard = await editBoard(params.userID, params.id, editBoardForm);
    setBoard(updatedBoard);
    setEditFormVisibility(false);
  }

  const editForm = () => {
    return(
      <div className={setEditFormClass()}>
        <form className="edit-board-form" onSubmit={handleSubmit}>

        <div className="label-input-eb">
          <label htmlFor="name" className="eb-label">Name</label>
          <input 
            type="text"
            className="eb-text-input"
            id="name"
            name="name"
            value={editBoardForm.anme} 
            onChange={handleChange}
          />
        </div>

          <div className="label-input-eb">
            <label htmlFor="description" className="eb-label">Description</label>
            <textarea
              id="description"
              className="eb-text-input"
              name="description"
              value={editBoardForm.description}
              onChange={handleChange}
            />
          </div>

        <div className="label-input-eb">
          <label htmlFor="cover_image_url" className="eb-label">Cover Image URL</label>
          <input 
            type="text"
            className="eb-text-input"
            id="cover_image_url"
            name="cover_image_url"
            value={editBoardForm.cover_image_url} 
            onChange={handleChange}
          />
        </div>

        <div className="label-input-eb">
          <label htmlFor="background_url" className="eb-label">Background Image URL</label>
          <input 
            type="text"
            className="eb-text-input"
            id="background_url"
            name="background_url"
            value={editBoardForm.background_url}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-eb">
          <label htmlFor="font" className="eb-label">Change font:</label>
          <select 
            id="font"
            className="eb-select"
            name="font"
            onChange={handleChange}
            > 
            {fontChoices.map((font, index)=>(
              <option key={index} value={font}>{font[0]}</option>
            ))}
            </select>
        </div>

        <div className="color-choice-div">
          <div className="label-input-eb">
            <label htmlFor="background_color" className="eb-label">Background Color</label>
            <input 
              type="color"
              className="color-selector"
              id="background_color"
              name="background_color"
              value={editBoardForm.background_color}
              onChange={handleChange}
            />
          </div>

          <div className="label-input-eb">
            <label htmlFor="font_color" className="eb-label">Font Color</label>
            <input 
              type="color"
              className="color-selector"
              id="font_color"
              name="font_color"
              value={editBoardForm.font_color}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="edit-board-button">Save Settings</button>
        </form>
      </div>
    )
  }
  if(!editFormVisibility) {
    return (
      <div className = "user-board-page" style={style}>
        <div className="edit-board-button-div">
          <button 
            className="edit-board-button"
            onClick={toggleEditForm}>
              Edit Settings
            </button>

            <Link to={`/posts/${params.userID}/create`}>
            <button 
            className="edit-board-button">
              Create Post
            </button>
            </Link>
        </div>
        <div className="user-board-header">
          <h2 className="user-board-title"> {board?.name} </h2>
          <p className="user-board-desc">{board?.description}</p>
        </div>
        <div className = "post-cards-div">
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 550: 2, 800: 3, 1050: 4, 1300: 5, 1550: 6}}>
            <Masonry>
              {posts?.map((post)=>(
                <Link to={`/post/${post.id}`} key={post.id}>
                  <PostCard  post={post}/>
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    )
  } else {
    return (
      <div className = "user-board-page" style={style}>
        <div className="edit-board-button-div">
          <button 
            className="edit-board-button"
            onClick={toggleEditForm}>
              Close
          </button>
        </div>

        <div className="edit-board-form-and-preview-div">
          <div className="board-preview-and-title">
            <h3>Cover Image</h3>
            <div className="board-card-preview-div">
              <BoardCard board={editBoardForm} />
            </div>
          </div>
          {editForm()}
        </div>

        <div className="user-board-header-edit">
          <h2 className="user-board-title"> {editBoardForm.name} </h2>
          <p className="user-board-desc">{editBoardForm.description}</p>
        </div>
      
        <div className = "post-cards-div">
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 550: 2, 800: 3, 1050: 4, 1300: 5, 1550: 6}}>
            <Masonry>
              {posts?.map((post)=>(
                <Link to={`/post/${post.id}`} key={post.id}>
                  <PostCard  post={post}/>
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    )
  }
}

export default UserBoard;