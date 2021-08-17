import './Home.css';

function Home() {
  return (
    <div className = "home-page">
      <div className="home-page-title">
        <h1>Welcome to Project Uplift</h1>
      </div>
      <section className="home-page-welcome">
        <div className="welcome-message">
          <h2>The <span className="highlight-word">story</span> we tell ourselves is <span className="highlight-word">important</span>.  <p>  <span className="highlight-word">Words</span> are <span className="highlight-word">powerful</span>.</p></h2>
          <div className="welcome-site-description">
            At Project Uplift, you can harness that power by creating, saving, and sharing your own positive messages. Spread a little happiness today!
          </div>
          <div className="welcome-options">
            <p>Browse</p>
            <p>Affirmations</p>
            <p>Celebrations</p>
            <p>Blessings</p>
            <p>Wisdom</p>
          </div>

        </div>
        <div className="welcome-image"></div>

      </section>
    </div>
  )
}

export default Home;