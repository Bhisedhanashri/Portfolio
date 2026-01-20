export default function Hero() {
  return (
    <div className="hero-left">
      <div className="profile-container">
        <img 
          src="/profile.jpeg" 
          alt="Dhanashri Bhise" 
          className="profile-img" 
          onError={(e) => {
            e.target.src =
              "https://ui-avatars.com/api/?name=Dhanashri+Bhise&background=3b82f6&color=fff&size=200";
          }}
        />
      </div>

      <h1>
        Hi, I'm <span>Dhanashri Bhise</span>
      </h1>

      <p className="hero-subtitle">
        Full Stack Java Developer
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>
    </div>
  );
}
