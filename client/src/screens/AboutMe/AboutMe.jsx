import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img
        className="headshot"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGxSMKgtv9cyw/profile-displayphoto-shrink_800_800/0/1618085204744?e=1623888000&v=beta&t=iCZicahOAm5VWtQZNCbch3vh6lgn2TuqeeCLXo-K2po"
        alt="headshot"
      />
      <h1 className="title">Hey! My name is Huck.</h1>
      <h2 className="sub-title">I am a Software Engineer</h2>

      <main className="about-me">
        Technical Skills: React, Javascript, Ruby, Ruby on Rails, Express, HTML,
        CSS, MongoDB, PostgreSQL, Jest, and Rspec.
        <br />
        <br />I am looking for a position with a environmentally conscious
        business with a fun engaging culture. I have an eagerness to learn new
        tech, and the proven ability to do so effectively, and quickly. At
        General Assemblies 12 week Software Engineering Immersive program I was
        able to learn a multitude of tech stacks, as well as data structure and
        algorithm fundamentals.
        <br />
        <br /> With a B.S. in Conservation Biology and a background in climbing
        instruction, I bring a detail-oriented, driven, and communicative
        personality to software development. I leverage my experience in
        teaching and science to break down information, teach complex ideas and
        effectively test and troubleshoot.
        <br />
      </main>
    </div>
  );
}
