import './Home.css';

function Home() {
  return (
    <div className = "home-page">
      <div className="home-page-title">
        <h1>Welcome to Project Uplift</h1>
      </div>
      <section className="home-page-welcome">
        <div className="welcome-image"></div>
        <div className="welcome-message"></div>
      </section>
    </div>
  )
}

export default Home;