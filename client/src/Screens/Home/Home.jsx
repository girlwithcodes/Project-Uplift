import './Home.css';

function Home() {
  return (
    <div className = "home-page">
      <div className="home-page-title">
        <h1>Welcome to Project Uplift</h1>
      </div>
      <section className="home-page-welcome">
        <div className="welcome-message">
          <p>The story we tell ourselves is important.  Words have the power to shape our thoughts, our attitudes, our habits, and our lives.</p>
          <p>At Project Uplift, you can harness that power by creating your own affirmation, celebration, blessing and wisdom statements, saving them to your boards, and sharing them with the world. Spread a little joy and positivity today!</p>
          <p>Browse</p>
          <p>Affirmations</p>
          <p>Celebrations</p>
          <p>Blessings</p>
          <p>Wisdom</p>

        </div>
        <div className="welcome-image"></div>

      </section>
    </div>
  )
}

export default Home;