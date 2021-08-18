import './Home.css';

function Home() {
  return (
    <div className = "home-page">
      <div className="home-page-title">
        <h1>Welcome to Project Uplift</h1>
      </div>

      <section className="home-page-welcome">
        <div className="welcome-message">
          <h2>The <span className="highlight-word" id="hw1">Stories</span> we tell ourselves are <span className="highlight-word" id="hw2">Important</span>  <p>  <span className="highlight-word" id="hw3">Words</span> are <span className="highlight-word" id="hw4">Powerful</span>.</p></h2>

          <div className="site-des-bg-mssg">
            <div className="site-desc-background"></div>
            <div className="welcome-site-description">
            At Project Uplift, you can harness that power by creating, saving, and sharing your own positive messages. Spread a little happiness today!
          </div>

          </div>
          <div className="welcome-options">
            <h3>Browse</h3>
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