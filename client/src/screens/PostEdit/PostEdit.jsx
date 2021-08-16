import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updatePost } from '../../Services/posts';
import PostCard from '../../Components/PostCard/PostCard';

function PostEdit({user, userBoards, post}) {

  const [createForm, setCreateForm] = useState({
    ...post
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedPost = await updatePost(user.id, createForm.board_id, post.id, createForm);
    setTimeout(()=>{
      history.push(`/post/${updatedPost.id}`);
    }, 200)

  }

  return (
    <div className="create-post-page">
      <div className="post-preview-div">
        <PostCard post={createForm} />
      </div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="label-input-cf">
          <label htmlFor="content">Text</label>
          <textarea
            id="content"
            name="content"
            value={createForm.content}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="image_url">Interior Image URL</label>
          <input 
            type="text"
            id="image_url"
            name="image_url"
            value={createForm.image_url} 
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="background_url">Background Image URL</label>
          <input 
            type="text"
            id="background_url"
            name="background_url"
            value={createForm.background_url}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="background_color">Background Color</label>
          <input 
            type="color"
            id="background_color"
            name="background_color"
            value={createForm.background_color}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="font">Change font:</label>
          <select 
            id="font"
            name="font"
            onChange={handleChange}
            > 
            {fontChoices.map((font, index)=>(
              <option key={index} value={font}>{font[0]}</option>
            ))}
            </select>
        </div>

        <div className="label-input-cf">
          <label htmlFor="font_color">Font Color</label>
          <input 
            type="color"
            id="font_color"
            name="font_color"
            value={createForm.font_color}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-cf">
          <label htmlFor="font_size">Font Size</label>
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
          <label htmlFor="post_type">Category:</label>
          <select 
            id="post_type"
            name="post_type"
            onChange={handleChange}
            > 
            <option selected={true} disabled="disabled">Category</option>
            <option value="affirmation">Affirmation</option>
            <option value="blessing">Blessing</option>
            <option value="celebration">Celebration</option>
            <option value="wisdom">Wisdom</option>
          </select>
        </div>

        <div className="label-input-cf"> 
          <label htmlFor="board-select">Save to Board</label>
            <select 
              id="board-select"
              name="board_id"
              onChange={handleChange}
              >
              <option selected={true} disabled="disabled"> My boards</option>
              {userBoards?.map((board)=>(
                <option value={board.id} key={board.id}>{board.name}</option>
              ))}
            </select>
          </div>
        <button>Save</button>
      </form>
    </div>
  );
} 
export default PostEdit;