import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createPost } from '../../Services/posts';
import PostCard from '../../Components/PostCard/PostCard';

function PostCreate({user, userBoards}) {

  const params = useParams();
  const [createForm, setCreateForm] = useState({
    background_color: "#FFFFFF",
    background_url: "",
    board_id: "null",
    content: "",
    font: "Arial",
    font_color: "#000000",
    font_size: 20,
    image_url: "",
    is_public: false,
    post_type: "null",
    user_id: params.userID
  })
  const history = useHistory();
  const fontChoices = [['Arial'], ['Caveat', ' cursive'], ['Courgette', ' cursive']];

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setCreateForm({
      ...createForm,
      [name]:value
    })
  }

  const handleRadio = (e) => {
    setCreateForm({ ...createForm, is_public: e.target.value==="true" ? true: false });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newPost = await createPost(user.id, createForm.board_id, createForm);
    setTimeout(()=>{
      history.push(`/post/${newPost.id}`);
    }, 200)

  }

  return (
    <div className="create-post-page">
    <h3 className="create-post-title">Create Post</h3>
    <div className="create-post-card">
      <div className="post-preview-div">
        <PostCard post={createForm} />
      </div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="label-input-cf">
          <label htmlFor="edit-post-content" className="create-form-label">Text:</label>
          <textarea
            id="edit-post-content"
            name="content"
            value={createForm.content}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="image_url" className="create-form-label">Interior Image URL:</label>
          <input 
            type="text"
            className="create-text-input"
            id="image_url"
            name="image_url"
            value={createForm.image_url} 
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="background_url" className="create-form-label">Background Image URL:</label>
          <input 
            type="text"
            className="create-text-input"
            id="background_url"
            name="background_url"
            value={createForm.background_url}
            onChange={handleChange}
          />
        </div>

        <div className="create-color-picker-div">
          <div className="label-input-cf">
            <label htmlFor="background_color" className="create-form-label">Background Color:</label>
            <input 
              type="color"
              className="create-color-picker"
              id="background_color"
              name="background_color"
              value={createForm.background_color}
              onChange={handleChange}
            />
          </div>

          <div className="label-input-cf">
            <label htmlFor="font_color" className="create-form-label">Font Color:</label>
            <input 
              type="color"
              className="create-color-picker"
              id="font_color"
              name="font_color"
              value={createForm.font_color}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="label-input-cf">
          <label htmlFor="font" className="create-form-label">Change font:</label>
          <select 
            id="font"
            className="create-select-menu"
            name="font"
            onChange={handleChange}
            > 
          {fontChoices.map((font, index)=>(
            <option key={index} value={font}>{font[0]}</option>
          ))}
          </select>
        </div>

        <div className="label-input-cf">
          <label htmlFor="font_size" className="create-form-label">Font Size:</label>
          <input 
            type="range"
            min="10"
            max="60"
            id="font_size"
            name="font_size"
            value={parseInt(createForm.font_size)}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="post_type" className="create-form-label">Category:</label>
          <select 
            id="post_type"
            className="create-select-menu"
            name="post_type"
            onChange={handleChange}
            > 
            <option selected={true} disabled="disabled">Category</option>
            <option value="affirmation">Affirmation</option>
            <option value="blessings">Blessing</option>
            <option value="celebrations">Celebration</option>
            <option value="quote">Wisdom</option>
          </select>
        </div>

        <div className="label-input-cf"> 
          <label htmlFor="board-select" className="create-form-label">Save to Board:</label>
            <select 
              id="board-select"
              className="create-select-menu"
              name="board_id"
              onChange={handleChange}
              >
              <option selected={true} disabled="disabled"> My boards</option>
              {userBoards?.map((board)=>(
                <option value={board.id} key={board.id}>{board.name}</option>
              ))}
            </select>
          </div>

          <div className="create-radio-buttons">
            <div className="label-input-cf">
              <label htmlFor="public" className="create-form-label">Public</label>
              <input 
                type="radio"
                className="create-raiod-input"
                id="public"
                name="is_public"
                value="true"
                checked={createForm.is_public===true}
                onChange={(e)=>handleRadio(e)}
              />
            </div>

            <div className="label-input-cf">
              <label htmlFor="private" className="create-form-label">Private</label>
              <input 
                type="radio"
                className="create-radio-input"
                id="private"
                name="is_public"
                value="false"
                checked={createForm.is_public===false}
                onChange={(e)=>handleRadio(e)}
              />
            </div>
          </div>
          
        <button className="create-form-button">Save</button>
      </form>
    </div>
  </div>
  );
} 
export default PostCreate;