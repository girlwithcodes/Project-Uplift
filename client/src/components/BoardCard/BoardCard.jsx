
import './BoardCard.css';

function BoardCard({board}) {
  if(board.cover_image_url) {
    return (
      <div className = "board-card">
        <img src={board.cover_image_url} className="board-cover-image" />
        <p className="board-card-name">{board.name}</p>
      </div>
    )
  } else {
    return (
      <div className = "board-card">
        <p className="board-card-name">{board.name}</p>
      </div>
    )
  }
}

export default BoardCard;