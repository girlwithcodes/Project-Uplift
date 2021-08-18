import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className = "home-page">
      <div className="home-page-title">
        <h1>Welcome to Project Uplift</h1>
      </div>

      <section className="home-page-welcome">
        
        <div className="welcome-message">
          <h2 className="weclome-message-header">The <span className="highlight-word" id="hw1">Stories</span> we tell ourselves are <span className="highlight-word" id="hw2">Important</span>  <p>  <span className="highlight-word" id="hw3">Words</span> are <span className="highlight-word" id="hw4">Powerful</span></p></h2>

          <div className="welcome-site-description">
            At Project Uplift, you can harness that power by creating, saving, and sharing your own positive messages. Spread a little happiness today!
          </div>

          <div className="welcome-options">
            <Link to="/affirmations">
              <div className="welcome-option">find new Affirmations</div>
            </Link>

            <Link to="/celebrations">
              <div className="welcome-option">share in Celebrations</div>
            </Link>

            <Link to="/blessings">
              <div className="welcome-option">rejoice in Blessings</div>
            </Link>
            
            <Link to="/wisdom">
              <div className="welcome-option">garner new Wisdom</div>
            </Link>

            <Link to="/login">
              <div className="welcome-option">or sign in to create your own!</div>
            </Link>
          </div>

          </div>        
        <div className="welcome-image"></div>

      </section>
    </div>
  )
}

export default Home;